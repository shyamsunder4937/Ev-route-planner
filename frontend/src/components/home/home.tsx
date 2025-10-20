// src/components/HomePage.jsx

import { Bars3Icon, MapPinIcon, TruckIcon, PlusCircleIcon, BoltIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/solid'; // Updated to Heroicons v2

const HomePage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100 items-center justify-start py-4">
            <div className="relative w-full max-w-md bg-gradient-to-br from-indigo-900 to-purple-900 shadow-xl rounded-3xl overflow-hidden flex flex-col min-h-[90vh] md:min-h-[85vh]">
                {/* Header */}
                <header className="flex justify-between items-center p-4 bg-indigo-900 text-white shadow-md">
                    <div className="text-3xl font-bold tracking-wider">EV NAV</div>
                    <button className="p-2 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300">
                        <Bars3Icon className="h-7 w-7" />
                    </button>
                </header>

                {/* Main Content Area */}
                <main className="flex-grow p-5 space-y-4 relative z-10">
                    {/* Input Group: Starting Point */}
                    <div className="flex items-center bg-indigo-800 bg-opacity-70 rounded-xl p-3 shadow-lg">
                        <TruckIcon className="h-6 w-6 text-gray-300 mr-3" />
                        <input
                            type="text"
                            placeholder="Current Location"
                            value="Current Location"
                            className="flex-grow bg-transparent text-white placeholder-gray-400 text-lg focus:outline-none"
                        />
                    </div>

                    {/* Input Group: Destination */}
                    <div className="flex items-center bg-indigo-800 bg-opacity-70 rounded-xl p-3 shadow-lg">
                        <MapPinIcon className="h-6 w-6 text-gray-300 mr-3" />
                        <input
                            type="text"
                            placeholder="Destination"
                            value="New York, NY"
                            className="flex-grow bg-transparent text-white placeholder-gray-400 text-lg focus:outline-none"
                        />
                        <button className="ml-3 p-1 rounded-full text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300">
                            <PlusCircleIcon className="h-7 w-7" />
                        </button>
                    </div>

                    {/* Add Step Button */}
                    <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-300 transition duration-300 ease-in-out transform hover:-translate-y-0.5">
                        Add Step
                    </button>

                    {/* Plan Route Button */}
                    <button className="w-full py-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold rounded-xl text-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-300 ease-in-out transform hover:scale-105">
                        PLAN ROUTE
                    </button>
                </main>

                {/* Map Placeholder */}
                <div className="relative flex-grow bg-gray-300 rounded-b-3xl overflow-hidden shadow-inner">
                    <img
                        src="https://via.placeholder.com/400x300/e0e0e0/808080?text=Map+Goes+Here"
                        alt="Map"
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay icons for map visualization */}
                    <div className="absolute inset-0">
                         <TruckIcon className="absolute top-[70%] left-[25%] h-8 w-8 text-blue-600 bg-white rounded-full p-1 shadow-md" />
                         <span className="absolute top-[75%] left-[20%] text-sm font-medium text-gray-800">Current Location</span>
                         <BoltIcon className="absolute top-[20%] left-[60%] h-7 w-7 text-green-500 bg-white rounded-full p-1 shadow-md" />
                         <BoltIcon className="absolute top-[50%] left-[30%] h-7 w-7 text-green-500 bg-white rounded-full p-1 shadow-md" />
                         <BoltIcon className="absolute top-[80%] left-[70%] h-7 w-7 text-green-500 bg-white rounded-full p-1 shadow-md" />
                    </div>
                </div>

                {/* Bottom Navigation */}
                <nav className="absolute bottom-0 left-0 right-0 bg-indigo-900 text-white py-3 px-5 flex justify-around items-center rounded-b-3xl z-20">
                    <button className="flex flex-col items-center p-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition duration-200 ease-in-out">
                        <TruckIcon className="h-6 w-6" />
                        <span className="text-xs mt-1">Vehicle Type</span>
                    </button>
                    <button className="flex flex-col items-center p-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition duration-200 ease-in-out">
                        <BoltIcon className="h-6 w-6" />
                        <span className="text-xs mt-1">Charger Type</span>
                    </button>
                    <button className="flex flex-col items-center p-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition duration-200 ease-in-out">
                        <AdjustmentsHorizontalIcon className="h-6 w-6" />
                        <span className="text-xs mt-1">Network</span>
                    </button>
                </nav>
            </div>
        </div>
    );
};

export default HomePage;