// app/layout.js  — add the tailwind CDN script (dev only)
import './globals.css';
import { AuthProvider } from '../components/AuthProvider';
import Navbar from '../components/Navbar';

export const metadata = { title: 'Clinic Suite' };

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        {/* quick dev-only Tailwind CDN so classes render while we fix PostCSS */}
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        <AuthProvider>
          <Navbar />
          <main className="min-h-screen p-6">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
