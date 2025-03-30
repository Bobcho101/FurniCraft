import { Link } from "react-router";
import { setDocumentTitle } from "../../utils/document";

const Home = () => {
  setDocumentTitle("Home");
  window.scrollTo(0, 0);
  return (
    <>
    
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="relative isolate px-6 pt-14 lg:px-8 min-h-screen w-full">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center text-white">
            <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
              Find Your Perfect Furniture
            </h1>
            <p className="mt-8 text-lg font-medium sm:text-xl/8">
              Discover a lot of furniture at FurniCraft.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to={'/catalog/1'}
                className="rounded-md bg-indigo-600 px-6 py-3 text-lg font-semibold text-white hover:bg-indigo-500 focus:outline-none"
              >
                Shop Now
              </Link>
              <Link to={'/about'} className="text-sm font-semibold text-indigo-200">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
