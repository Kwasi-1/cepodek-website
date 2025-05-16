import { Truck, ShoppingBag, PackageCheck, Store } from "lucide-react";

function HeroCards() {
  const cards = [
    {
      title: "Reliable Delivery Service",
      description:
        "Get your products to your customers swiftly and safely with our trusted delivery network across regions.",
      icon: <Truck className="w-8 h-8 text-white/80" />,
    },
    {
      title: "Retail Solutions",
      description:
        "Support your everyday sales with tailored retail options designed for fast-moving consumer goods.",
      icon: <ShoppingBag className="w-8 h-8 text-white/80" />,
    },
    {
      title: "Wholesale Distribution",
      description:
        "Efficient and scalable bulk order management for retailers and resellers, optimized for supply chain success.",
      icon: <PackageCheck className="w-8 h-8 text-white/80" />,
    },
    {
      title: "Physical & Online Stores",
      description:
        "Whether online or offline, we support seamless shopping experiences for your customers everywhere.",
      icon: <Store className="w-8 h-8 text-white/80" />,
    },
  ];

  return (
    <div className="relative bg-[#3a190b]">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-8 py-16">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#4b2415] rounded-2xl shadow-lg text-white p-6 flex flex-col items-start h-full min-h-[260px] transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="mb-4 bg-white/10 p-3 rounded-full">{card.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
            <p className="text-sm text-white/90 leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroCards;
