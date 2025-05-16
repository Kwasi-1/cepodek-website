import { Button } from "@/components/ui/button";
import { Truck } from "lucide-react";

const Delivery = () => {
  return (
    <section className="py-16 bg-[#003366] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute transform -rotate-12 -left-16 -top-16 h-64 w-64 rounded-full bg-[#4DB3FF]"></div>
        <div className="absolute transform rotate-12 -right-16 -bottom-16 h-64 w-64 rounded-full bg-[#FFC20E]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <div className="mb-6 mx-auto bg-white bg-opacity-10 p-4 rounded-full inline-block">
            <Truck className="h-12 w-12 text-[#FFC20E]" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Delivery & Online Shopping
          </h2>

          <p className="text-xl mb-8">
            Order online and we'll deliver straight to your shop, office, or
            home. Our convenient e-commerce platform makes shopping easy, with
            the same great products you'd find in our stores.
          </p>

          <Button
            size="lg"
            className="bg-[#FFC20E] hover:bg-[#E6AF0D] text-[#003366] text-lg px-8"
          >
            Shop Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
