import { useNavigate } from "react-router";
import { setDocumentTitle } from "../../utils/document";

export default function NotFound() {
    setDocumentTitle("Not Found");
    window.scrollTo(0, 0);
    const navigate = useNavigate();

    const goHome = () => {
        return navigate("/");
    }

    return (
        <>
                <div className="h-screen bg-gray-900 flex items-center justify-center text-center text-white">
                <div className="space-y-8">
                <h1 className="text-6xl font-extrabold tracking-tight sm:text-7xl">
                    404
                </h1>
                <p className="text-2xl font-medium">
                    Oops! The page you&apos;re looking for can&apos;t be found.
                </p>
                <div className="mt-6">
                    <button
                    onClick={goHome}
                    className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-md text-white text-lg font-semibold transition duration-200"
                    >
                    Go to Home
                    </button>
                </div>
                </div>
            </div>
        </>
    );
}