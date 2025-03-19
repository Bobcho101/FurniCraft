import {useState } from 'react';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navigation = [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Shop', href: '#shop' },
      { name: 'Contact', href: '#contact' },
    ];
  
   return (
       <>
       <header className="absolute inset-x-0 top-0 z-50 w-full">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8 bg-transparent text-white">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">FurnitureHub</span>
              <img
                alt="FurnitureHub"
                src="https://your-logo-url.png"
                className="h-8 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button type="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="rounded-md p-2.5 text-white">
                <span className="sr-only">Close menu</span>
                <div className="w-6 h-0.5 bg-white mb-1" />
                <div className="w-6 h-0.5 bg-white mb-1" />
                <div className="w-6 h-0.5 bg-white" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold text-white hover:text-yellow-400 transition duration-200">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold text-white hover:text-yellow-400 transition duration-200">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 lg:hidden" onClick={() => setMobileMenuOpen(false)} />
        )}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden bg-white py-6 px-6">
            <div className="flex justify-between items-center">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">FurnitureHub</span>
                <img
                  alt="FurnitureHub"
                  src="https://your-logo-url.png"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <div className="w-6 h-0.5 bg-gray-700 mb-1"></div>
                <div className="w-6 h-0.5 bg-gray-700 mb-1"></div>
                <div className="w-6 h-0.5 bg-gray-700"></div>
              </button>
            </div>
            <div className="mt-6 space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-900 hover:bg-gray-100 rounded-lg px-3 py-2 text-base font-semibold"
                >
                  {item.name}
                </a>
              ))}
              <a href="#" className="block text-gray-900 hover:bg-gray-100 rounded-lg px-3 py-2.5 text-base font-semibold">
                Log in
              </a>
            </div>
          </div>
        )}
      </header>
       </>
   );
}