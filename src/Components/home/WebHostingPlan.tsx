import { TiTick } from 'react-icons/ti';

const WebHostingPlan = () => {
    return (
        <div className="flex flex-col items-center justify-center w-3/4 rounded-xl p-6 bg-white shadow-lg mb-7 md:w-2/4 lg:w-1/4">
            <h3 className="text-3xl font-bold text-blue-700">Pro Publisher</h3>
            <strong className="text-4xl font-bold text-gray-800 my-5">$14.99/mo</strong>
            <span className="bg-green-200 text-green-800 rounded-full px-3 py-1 font-semibold">
                Save 20% with Annual Billing
            </span>
            <div className="mt-6">
                <h5 className="text-xl mb-3 font-semibold text-blue-600">What’s Included</h5>
                <div className="flex items-center text-green-600 mb-2 ps-3">
                    <TiTick className="mr-2" /> Publish Unlimited Articles
                </div>
                <div className="flex items-center text-green-600 mb-2 ps-3">
                    <TiTick className="mr-2" /> Access to Premium Templates
                </div>
                <div className="flex items-center text-green-600 mb-2 ps-3">
                    <TiTick className="mr-2" /> Advanced Analytics Dashboard
                </div>
                <div className="flex items-center text-green-600 mb-2 ps-3">
                    <TiTick className="mr-2" /> Priority Support 24/7
                </div>
                <div className="flex items-center text-green-600 mb-2 ps-3">
                    <TiTick className="mr-2" /> SEO Optimization Tools
                </div>
                <div className="flex items-center text-green-600 mb-2 ps-3">
                    <TiTick className="mr-2" /> Custom Domain Integration
                </div>
            </div>
            <button className="mt-5 bg-blue-700 text-white text-xl font-bold py-3 px-6 rounded-full hover:bg-blue-800 transition-all w-full">
                UPGRADE NOW
            </button>
        </div>

    )
}

export default WebHostingPlan