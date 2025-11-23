// app/page.js
import Link from 'next/link';
import HomeStatsClient from '../components/HomeStatsClient';

export const metadata = {
  title: 'Clinic Suite — Medical Clinic Management',
  description: 'Clinic Suite — lightweight web-based clinic management: patient directory, consultations, pharmacy & billing.',
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-800">
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute right-0 top-0 -translate-y-1/4 translate-x-1/4 opacity-20">
          <svg width="420" height="420" viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="210" cy="210" r="210" fill="url(#g1)"/>
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#6366F1"/>
                <stop offset="1" stopColor="#60A5FA"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            {/* Hero content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium w-max">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 2a6 6 0 0 1 6 6v1h1a2 2 0 0 1 2 2v6a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-6a2 2 0 0 1 2-2h1V8a6 6 0 0 1 6-6z"/>
                </svg>
                Clinic Suite
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                A simple, modern clinic management suite
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 max-w-xl">
                Create patient appointments, manage Electronic Medical Records (EMR), run consultations, and handle pharmacy dispensing and billing — all from one lightweight web app. Multi-tenant capable with separate clinics, role-based access for doctors, receptionists, and pharmacists.
              </p>

              <div className="flex flex-wrap gap-3 mt-2">
                <Link href="/login" className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-white text-sm font-medium shadow hover:bg-indigo-700">
                  Get started
                </Link>

                <a
                  href="#features"
                  className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-4 py-2 text-sm text-slate-700 bg-white hover:bg-slate-50"
                >
                  Explore features
                </a>
              </div>
            </div>

            {/* Right column: show live stats only when user is logged in (client component) */}
            <div>
              <HomeStatsClient />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="max-w-7xl mx-auto px-6 py-14">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold">What Clinic Suite gives you</h2>
          <p className="mt-3 text-slate-600">
            A focused set of features designed to run outpatient clinics with low friction — role-based access, clinical records, prescriptions & pharmacy stock management, and billing.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <div className="flex items-center justify-between">
              <div className="text-slate-800 font-semibold">Patient Directory</div>
              <div className="text-sm text-slate-500">Reception</div>
            </div>
            <p className="mt-3 text-sm text-slate-600">Create & update patient records, search by NIC, manage appointments and visit history.</p>
            <div className="mt-4">
              <Link href="/patients" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-indigo-600 text-white text-sm">Open patients</Link>
            </div>
          </article>

          <article className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <div className="flex items-center justify-between">
              <div className="text-slate-800 font-semibold">Consultation</div>
              <div className="text-sm text-slate-500">Doctors</div>
            </div>
            <p className="mt-3 text-sm text-slate-600">Record consultations, diagnoses, investigations, and generate printable prescriptions.</p>
            <div className="mt-4">
              <Link href="/consultation" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-600 text-white text-sm">Open consultation</Link>
            </div>
          </article>

          <article className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <div className="flex items-center justify-between">
              <div className="text-slate-800 font-semibold">Pharmacy & Billing</div>
              <div className="text-sm text-slate-500">Pharmacist / Billing</div>
            </div>
            <p className="mt-3 text-sm text-slate-600">Manage drug stock, fulfill prescriptions, and produce printable A5 invoices for patients.</p>
            <div className="mt-4">
              <Link href="/pharmacy" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-amber-600 text-white text-sm">Open pharmacy</Link>
            </div>
          </article>
        </div>
      </section>

      <footer className="border-t border-slate-100 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="text-sm text-slate-600">© {new Date().getFullYear()} Clinic Suite · Built by Dr Chandima Jayasinghe.</div>
          <div className="flex items-center gap-3">
            <a className="text-sm text-slate-600 hover:text-slate-800" href="https://www.linkedin.com/in/drchandima/" target="_blank" rel="noreferrer">LinkedIn</a>
            <span className="text-slate-300">•</span>
            <a className="text-sm text-slate-600 hover:text-slate-800" href="https://github.com/drchandima" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
