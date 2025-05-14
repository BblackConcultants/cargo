import './globals.css'
import type { Metadata } from 'next'
import Header from '../components/Header'
import Link from 'next/link'
import Script from 'next/script'
import '@fortawesome/fontawesome-free/css/all.min.css'

export const metadata: Metadata = {
  title: 'Cargo World Link',
  description: 'Global Freight Solutions',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      url: '/favicon.png',
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head></head>
      <body className="bg-white flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow pt-40">
          {children}
        </div>
        <footer className="bg-gray-50 border-t">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-gray-600">
                <span>Copyright ©2025 Cargo World Link Limited - Company No. 124356</span>
              </div>
              
              {/* Footer Links */}
              <div className="flex flex-wrap justify-center gap-x-6 text-sm text-gray-600">
                <Link href="/privacy" className="hover:text-[#283694]">Privacy Notice</Link>
                <Link href="/cookies" className="hover:text-[#283694]">Cookie Notice</Link>
                <Link href="/terms" className="hover:text-[#283694]">Terms of Service</Link>
                <Link href="/report-bug" className="hover:text-[#283694]">Report a Bug</Link>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center space-x-6 mt-6">
              <a 
                href="https://facebook.com/cargoworldlink" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#283694] transition-colors"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a 
                href="https://twitter.com/cargoworldlink" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#283694] transition-colors"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a 
                href="https://instagram.com/cargoworldlink" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#283694] transition-colors"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a 
                href="https://linkedin.com/company/cargo-world-link" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#283694] transition-colors"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
