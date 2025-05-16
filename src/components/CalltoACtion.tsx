import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, MapPin } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#003366]">
            Let's get you stocked up.
          </h2>
          <p className="text-xl mb-10">
            Ready to experience the Cepodek difference? Reach out to us today!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Button className="bg-[#003366] hover:bg-[#002244] text-white py-6 h-auto">
              <Phone className="mr-2 h-5 w-5" />
              <span>Call Now</span>
            </Button>

            <Button className="bg-[#4DB3FF] hover:bg-[#3da0ea] text-white py-6 h-auto">
              <MessageSquare className="mr-2 h-5 w-5" />
              <span>WhatsApp Us</span>
            </Button>

            <Button className="bg-[#FFC20E] hover:bg-[#E6AF0D] text-[#003366] py-6 h-auto">
              <MapPin className="mr-2 h-5 w-5" />
              <span>Find a Store</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
