import product1 from "@/assets/images/product-1.png";
import product2 from "@/assets/images/product-2.png";
import product3 from "@/assets/images/product-3.png";
import product4 from "@/assets/images/product-4.png";
import product5 from "@/assets/images/product-5.png";
import product6 from "@/assets/images/product-6.png";
import product7 from "@/assets/images/product-7.png";
import product8 from "@/assets/images/product-8.png";
// import product9 from "@/assets/images/product-9.png";

const products = [
  { src: product1, name: "Multipurpose Cleaner" },
  { src: product2, name: "Fruit Juice Pack" },
  { src: product8, name: "Instant Noodles" },
  { src: product4, name: "Hand Wash Soap" },
  { src: product5, name: "Snack Combo" },
  { src: product6, name: "Toilet Paper Roll" },
  { src: product7, name: "Energy Drink" },
  { src: product3, name: "Cooking Oil Bottle" },
  // { src: product9, name: "Cereal Box" },
];

export default function ProductGallerySection() {
  return (
    <section
      id="products"
      className="py-16 px-4 md:px-10 xl:px-16 container max-w mx-auto"
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl xl:pt-10 xl:text-5xl font-bold mb-2">
          Our Featured Products
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Discover household and personal care products trusted by retailers and
          consumers across the nation.
        </p>
      </div>

      {/* Mobile: Show only 4 products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:hidden">
        {products.slice(0, 4).map(({ src, name }, index) => (
          <div key={index} className="overflow-hidden h-full rounded">
            <div className="group border h-full max-h-[300px] rounded bg-white shadow-md hover:shadow-xl transition">
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

      {/* Tablet and up: Show all products */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map(({ src, name }, index) => (
          <div
            key={index}
            className="overflow-hidden min-h-[300px] h-full rounded"
          >
            <div className="group border h-full max-h-[400px] rounded bg-white shadow-md hover:shadow-xl transition">
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
        <button
          onClick={() =>
            window.open("https://hub.foundry-platform.app/", "_blank")
          }
          className="text-base px-7 py-4.5 rounded-md bg-black text-white font-medium cursor-pointer hover:bg-gray-800 transition"
        >
          View All Our Products
        </button>
      </div>
    </section>
  );
}
