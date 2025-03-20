import { Link } from "react-router";


export default function About() {
    const people = [
        {
            'name': 'John Doe',
            'role': 'CEO Founder',
            'description': 'John is the visionary behind FurniCraft, leading the company with innovation and passion.',
            'id': 'dw34-63fa-323g-kdwm-3217',
        },
        {
            'name': 'Sarah Smith',
            'role': 'Head of Design',
            'description': 'Sarah brings creativity and elegance to our furniture collections with her expertise.',
            'id': 'kd98-3hfg-92kd-asdq-9826',
        },
        {
            'name': 'Michael Brown',
            'role': 'Head of Operations',
            'description': 'Michael ensures everything runs smoothly, from manufacturing to customer service.',
            'id': 'lm28-asd1-78fg-mzxc-4591',
        }
    ];
    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center py-16">
        <h2 className="text-4xl font-semibold mb-10 text-center mt-17">About Us</h2>

        <p className="max-w-2xl text-center text-gray-300 mb-12">
            At FurnitureHub, we are dedicated to providing high-quality furniture with modern designs.
            Meet the people who make it all possible.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
            {people.map((person) => (
                <div key={person.id} className="bg-gray-800 p-6 rounded-lg shadow-lg text-center cursor-pointer">
                    <h3 className="text-2xl font-semibold">{person.name}</h3>
                    <p className="text-indigo-400">{person.role}</p>
                    <p className="mt-3 text-gray-300 text-sm">
                      {person.description}
                    </p>
                </div>
            ))}
            {/* <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <img
                src="images/person1.jpg"
                alt="CEO"
                className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-2xl font-semibold">John Doe</h3>
            <p className="text-indigo-400">CEO & Founder</p>
            <p className="mt-3 text-gray-300 text-sm">
                
            </p>
            </div> */}

            {/* <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <img
                src="images/person2.jpg"
                alt="Designer"
                className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-2xl font-semibold">Sarah Smith</h3>
            <p className="text-indigo-400">Head of Design</p>
            <p className="mt-3 text-gray-300 text-sm">
                Sarah brings creativity and elegance to our furniture collections with her expertise.
            </p>
            </div> */}
            {/* <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <img
                src="images/person3.jpg"
                alt="Operations"
                className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-2xl font-semibold">Michael Brown</h3>
            <p className="text-indigo-400">Head of Operations</p>
            <p className="mt-3 text-gray-300 text-sm">
                Michael ensures everything runs smoothly, from manufacturing to customer service.
            </p>
            </div> */}
        </div>

        <div className="mt-10 text-center">
            <Link
            to="/"
            className="text-indigo-400 hover:text-indigo-300 text-sm font-medium"
            >
            Back to Home
            </Link>
        </div>
        </div>
    );
}
