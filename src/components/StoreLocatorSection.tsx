import { MapPin, Phone } from "lucide-react";

export default function StoreLocatorSection() {
  return (
    <section id="contact" className="py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="bg-[#faf7f8] rounded-xl overflow-hidden lg:pt-10">
          <div className="flex flex-col md:flex-row gap-8 p-10 max-w-7xl lg:max-w-6xl mx-auto md:space-y-10">
            {/* Left Content */}
            <div className="w-full md:w-4/7 lg:w-2/3">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Find our FMCG store near you
              </h2>
              <p className="text-gray-600 text-lg lg:text-xl mb-6">
                Visit our physical locations or shop online for quick access to
                your favorite products. Check below for store addresses and
                contact info.
              </p>
              <button
                onClick={() =>
                  window.open("https://hub.foundry-platform.app/", "_blank")
                }
                className="text-base px-6 py-3.5 lg:px-7 lg:py-4 rounded-md border bg-black text-white font-medium hover:bg-white hover:text-black transition duration-300"
              >
                Shop Now
              </button>
            </div>

            {/* Right Content - Locations */}
            <div className="space-y-4 w-full md:w-1/2 lg:w-1/3">
              <div className="flex items-start space-x-3">
                <Phone className="text-gray-500 mt-1" size={24} />
                <div>
                  <p className="text-lg font-medium text-gray-700">
                    +233 54 012 8958
                  </p>
                  <p className="text-lg text-gray-500">Customer Support</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="text-gray-500 mt-1" size={24} />
                <p className="text-lg text-gray-700">Madina Market, Ghana</p>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="text-gray-500 mt-1" size={24} />
                <p className="text-lg text-gray-700">
                  Oyarifa, Near Special Ice, Ghana
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
