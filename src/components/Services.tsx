import ServicesSection from "./ServiceSection";
import delivery from "@/assets/images/delivery.jpg";
import wholesale from "@/assets/images/wholesale.jpg";
import retail from "@/assets/images/retail.jpg";

const services = [
  {
    id: "retail-sales",
    title: "Retail Sales",
    description:
      "From everyday essentials to your favorite brands, Cepodek’s retail stores serve individuals, families, and small businesses with affordability and variety.",
    points: [
      "Wide range of FMCG products — From toiletries to beverages and household items.",
      "Affordable prices — Competitive retail pricing with seasonal promotions.",
      "Convenient store locations — Easily accessible in key areas in Accra.",
      "Customer support — Friendly staff ready to assist in-store and by phone.",
    ],
    image: retail,
  },
  {
    id: "wholesale-supply",
    title: "Wholesale Supply",
    description:
      "Cepodek partners with retail shops, restaurants, and institutions to provide bulk FMCG supply with consistent stock and timely fulfillment.",
    points: [
      "Bulk purchase options — Ideal for resellers, institutions, and caterers.",
      "Discounted wholesale pricing — Enjoy better margins for volume orders.",
      "Reliable stock levels — We maintain inventory to meet demand quickly.",
      "Tailored service — Account support and flexible fulfillment options.",
    ],
    image: wholesale,
  },
  {
    id: "online-delivery",
    title: "Online Store & Delivery",
    description:
      "Shop online and enjoy quick delivery across Ghana. Whether you're buying for home, office, or business — Cepodek brings your order to your doorstep.",
    points: [
      "Fast nationwide delivery — Get your order in as little as 24–48 hours.",
      "Secure online shopping — Smooth, safe checkout on our e-commerce platform.",
      "Real-time customer support — WhatsApp, phone, and live chat available.",
      "Track your order — Stay informed every step of the way.",
    ],
    image: delivery,
  },
];

function Services() {
  return (
    <div>
      <div
        id="services"
        className="text-center font-bold py-6 text-4xl lg:text-5xl w-full"
      >
        What We Offer
      </div>
      {services.map((section, index) => (
        <ServicesSection
          key={section.id}
          id={section.id}
          title={section.title}
          description={section.description}
          points={section.points}
          image={section.image}
          alignRight={index % 2 === 0}
        />
      ))}
    </div>
  );
}
export default Services;
