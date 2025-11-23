// components/NavBar.js
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from './AuthProvider';
import { signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';

/**
 * Role-aware Navbar
 * Hides pages based on claims.role
 *
 * Roles mapping (customize as needed):
 *  - admin       => sees everything
 *  - doctor      => sees: Consultation + Patients (added)
 *  - receptionist=> sees: Patients
 *  - pharmacist  => sees: Pharmacy / Drugs
 *  - billing     => sees: Billing / Invoices
 *
 * Add/remove links in `linksForRole` below as your app expands.
 */
export default function NavBar() {
  const { user, claims, loading } = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  // Controlled links by role
  const linksForRole = (role) => {
    // default minimal links accessible by anyone signed in
    const base = [
      { href: '/', label: 'Home', show: true },
    ];

    const roleLinks = {
      admin: [
        { href: '/patients', label: 'Patients' },
        { href: '/consultation', label: 'Consultation' },
        { href: '/pharmacy', label: 'Pharmacy' },
        { href: '/billing', label: 'Billing' },
        { href: '/admin', label: 'Admin' },
      ],
      // doctors now also see Patients in addition to Consultation
      doctor: [
        { href: '/patients', label: 'Patients' },
        { href: '/consultation', label: 'Consultation' },
      ],
      receptionist: [
        { href: '/patients', label: 'Patients' },
      ],
      pharmacist: [
        { href: '/pharmacy', label: 'Pharmacy' },
      ],
      billing: [
        { href: '/billing', label: 'Billing' },
      ]
    };

    return base.concat(roleLinks[role] || []);
  };

  async function handleSignOut() {
    try {
      await signOut(auth);
      router.push('/login');
    } catch (err) {
      console.error('Sign out failed', err);
      alert('Sign out failed: ' + (err.message || err));
    }
  }

  // compute links once we have a role (or fallback to base links)
  const role = claims?.role ?? null;
  const links = role ? linksForRole(role) : linksForRole(null);

  // Simple keyboard-friendly close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // formatted role string shown below email (small lowercase)
  const displayedRole = role ? String(role).toLowerCase() : null;

  return (
    <nav className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 items-center">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-indigo-600 flex items-center justify-center text-white font-bold">CS</div>
              <div className="hidden sm:block">
                <div className="text-sm font-semibold text-slate-800">Clinic Suite</div>
                <div className="text-xs text-slate-400">EMR & Clinic Management</div>
              </div>
            </Link>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {loading ? (
              <div className="text-sm text-slate-400">Loading...</div>
            ) : (
              <>
                {links.map(link => (
                  <NavLink key={link.href} href={link.href} active={pathname === link.href}>
                    {link.label}
                  </NavLink>
                ))}
                <div className="border-l border-slate-100 pl-3 ml-3">
                  {user ? (
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col">
                        <div className="text-sm text-slate-700">{user.email}</div>
                        {displayedRole && (
                          <div className="text-xs text-slate-400 lowercase">{displayedRole}</div>
                        )}
                      </div>
                      <button onClick={handleSignOut} className="text-sm px-3 py-1 rounded-md border">Sign out</button>
                    </div>
                  ) : (
                    <Link href="/login" className="text-sm px-3 py-1 rounded-md border">Sign in</Link>
                  )}
                </div>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setOpen(o => !o)} className="p-2 rounded-md border" aria-label="Toggle menu">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-600" viewBox="0 0 20 20" fill="currentColor">
                {open ? (
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                ) : (
                  <path fillRule="evenodd" d="M3 5h14a1 1 0 100-2H3a1 1 0 100 2zm14 6H3a1 1 0 000 2h14a1 1 0 000-2zm0 6H3a1 1 0 000 2h14a1 1 0 000-2z" clipRule="evenodd" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-4 py-3 space-y-2">
            {loading ? (
              <div className="text-sm text-slate-400">Loading...</div>
            ) : (
              <>
                {links.map(link => (
                  <div key={link.href}>
                    <Link href={link.href} className={`block px-3 py-2 rounded ${pathname === link.href ? 'bg-slate-100 font-medium' : 'text-slate-700'}`}>
                      {link.label}
                    </Link>
                  </div>
                ))}

                <div className="pt-2 border-t border-slate-100">
                  {user ? (
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <div className="text-sm text-slate-700">{user.email}</div>
                        {displayedRole && (
                          <div className="text-xs text-slate-400 lowercase">{displayedRole}</div>
                        )}
                      </div>
                      <button onClick={handleSignOut} className="text-sm px-3 py-1 rounded-md border">Sign out</button>
                    </div>
                  ) : (
                    <Link href="/login" className="block text-sm px-3 py-2 rounded border">Sign in</Link>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

/* Small NavLink subcomponent */
function NavLink({ href, children, active }) {
  return (
    <Link href={href} className={`px-3 py-2 rounded-md text-sm ${active ? 'bg-slate-100 font-medium' : 'text-slate-700 hover:bg-slate-50'}`}>
      {children}
    </Link>
  );
}
