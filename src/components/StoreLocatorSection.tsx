import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StoreLocatorSection() {
  return (
    <section className=" py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="bg-[#faf7f8] rounded-xl overflow-hidden xl:pt-10">
          <div className="flex flex-col md:flex-row gap-8 p-10 max-w-6xl mx-auto space-y-10">
            {/* Left Content */}
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl md:text-4xl xl:text-[40px] font-bold text-gray-800 mb-4">
                Find our FMCG store near you
              </h2>
              <p className="text-gray-600 mb-6">
                Visit our physical locations or shop online for quick access to
                your favorite products. Check below for store addresses and
                contact info.
              </p>
              <Button>Shop Now</Button>
            </div>

            {/* Right Content - Locations */}
            <div className="space-y-4 w-full md:w-1/3">
              <div className="flex items-start space-x-3">
                <Phone className="text-gray-500 mt-1" size={24} />
                <div>
                  <p className="text-lg font-medium text-gray-700">
                    +1 555-123-4567
                  </p>
                  <p className="text-lg text-gray-500">Customer Support</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="text-gray-500 mt-1" size={24} />
                <p className="text-lg text-gray-700">135 West 52nd Street</p>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="text-gray-500 mt-1" size={24} />
                <p className="text-lg text-gray-700">365 Clinton Street</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
