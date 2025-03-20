export default function Person({ selectedPerson, setSelectedPerson }) {
   return (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <button
            onClick={() => setSelectedPerson(null)}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-300 cursor-pointer"
            >
            ✕
            </button>
            <h2 className="text-2xl font-semibold">{selectedPerson.name}</h2>
            <h3 className="text-lg text-indigo-400">{selectedPerson.role}</h3>
            <p className="text-gray-300 mt-3">{selectedPerson.description}</p>
            </div>
        </div>
   );
}