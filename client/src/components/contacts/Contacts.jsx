import { Link } from 'react-router';
import { setDocumentTitle } from '../../utils/document';

export default function Contacts() {
  setDocumentTitle("Contacts")
  window.scrollTo(0, 0);
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="w-full max-w-lg p-8 bg-gray-800 bg-opacity-90 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-indigo-400 text-lg font-semibold">Email:</span>
            <span className="text-lg">bgbobi878@gmail.com</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-indigo-400 text-lg font-semibold">Phone:</span>
            <span className="text-lg">+359 75 324 6451</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-indigo-400 text-lg font-semibold">Address:</span>
            <span className="text-lg">Bul. Bulgaria, Sofia, Bulgaria</span>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link
            to="/"
            className="text-indigo-400 hover:text-indigo-300 text-sm font-medium"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
