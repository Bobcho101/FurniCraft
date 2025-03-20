import {useState } from 'react';
import { Link } from 'react-router';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navigation = [
      { name: 'Catalog', href: '/catalog' },
      { name: 'Sell a Furniture', href: '/create-post' },
      { name: 'About', href: '/about' },
      { name: 'Contacts', href: '/contacts' },
    ];
  
   return (
       <>
       <header className="absolute inset-x-0 top-0 z-50 w-full">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8 bg-transparent text-white">
          <div className="flex lg:flex-1">
            <Link to={'/'} className="-m-1.5 p-1.5 flex flex-row gap-2 items-center">
              <img
                alt="FurnitureHub"
                src={'images/logo2.png'}
                className="h-8 w-auto"
              />
                 <span className="text-white">FurniCraft</span>
            </Link>

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
              <Link key={item.name} to={item.href} className="text-sm font-semibold text-white hover:text-yellow-400 transition duration-200">
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 gap-7 lg:justify-end">
            <Link to={"/register"} className="text-sm font-semibold text-white hover:text-yellow-400 transition duration-200">
              Register <span aria-hidden="true"></span>
            </Link>
            <Link to={"/login"} className="text-sm font-semibold text-white hover:text-yellow-400 transition duration-200">
              Log in <span aria-hidden="true"></span>
            </Link>
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
                  src={"images/logo2.png"}
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
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-gray-900 hover:bg-gray-100 rounded-lg px-3 py-2 text-base font-semibold"
                >
                  {item.name}
                </Link>
              ))}
               <Link onClick={() => setMobileMenuOpen(false)} to={"/register"} className="block text-gray-900 hover:bg-gray-100 rounded-lg px-3 py-2.5 text-base font-semibold">
                Register
              </Link>
              <Link onClick={() => setMobileMenuOpen(false)} to={"/login"} className="block text-gray-900 hover:bg-gray-100 rounded-lg px-3 py-2.5 text-base font-semibold">
                Log in
              </Link>
            </div>
          </div>
        )}
      </header>
       </>
   );
}