import React from 'react';
import { Menu, Github, Linkedin, Mail, Phone } from 'lucide-react';
import Navigation from './Navigation';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-900">André Souza</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <Navigation />
              <div className="flex items-center space-x-4 ml-6">
                <a href="https://github.com" className="text-gray-500 hover:text-gray-700">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com" className="text-gray-500 hover:text-gray-700">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:andrerdeus087@gmail.com" className="text-gray-500 hover:text-gray-700">
                  <Mail size={20} />
                </a>
                <a href="tel:+5531992051436" className="text-gray-500 hover:text-gray-700">
                  <Phone size={20} />
                </a>
              </div>
            </div>
            
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-500 hover:text-gray-700"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Navigation />
            </div>
          </div>
        )}
      </header>

      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>

      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-gray-500">
            © {new Date().getFullYear()} André Souza. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;