import product1 from "@/assets/images/products-1.jpg";
import product2 from "@/assets/images/products-2.jpg";
import product3 from "@/assets/images/product-3.jpg";
import product4 from "@/assets/images/products-1.jpg";
import product5 from "@/assets/images/products-2.jpg";
import product6 from "@/assets/images/product-3.jpg";
import product7 from "@/assets/images/products-1.jpg";
import product8 from "@/assets/images/products-2.jpg";
import product9 from "@/assets/images/product-3.jpg";

const products = [
  { src: product1, name: "Multipurpose Cleaner" },
  { src: product2, name: "Fruit Juice Pack" },
  { src: product3, name: "Instant Noodles" },
  { src: product4, name: "Hand Wash Soap" },
  { src: product5, name: "Snack Combo" },
  { src: product6, name: "Toilet Paper Roll" },
  { src: product7, name: "Energy Drink" },
  { src: product8, name: "Cooking Oil Bottle" },
  { src: product9, name: "Cereal Box" },
];

export default function ProductGallerySection() {
  return (
    <section className="py-16 px-4 md:px-10 xl:px-16 container mx-auto">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl xl:pt-10 xl:text-5xl font-bold mb-2">
          Our Featured Products
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Discover household and personal care products trusted by retailers and
          consumers across the nation.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(({ src, name }, index) => (
          <div key={index} className="overflow-hidden h-full rounded">
            <div className="group border h-full rounded bg-white shadow-md hover:shadow-xl transition">
              <img
                src={src}
                alt={name}
                loading="lazy"
                className="w-full h-full object-cover rounded transition-transform duration-300 ease-in-out group-hover:scale-105"
                style={{ filter: "brightness(0.9)" }}
              />
              <div className="hidden group-hover:block absolute bottom-5 left-0 right-0 p-4 text-center">
                <p className="text-lg font-medium text-gray-800">{name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="text-base px-6 py-4 rounded bg-black text-white font-medium hover:bg-gray-800 transition">
          View All Our Products
        </button>
      </div>
    </section>
  );
}
