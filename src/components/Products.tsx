import ProductCarousel from "./ProductCarousel";

function Products() {
  const headingText = "Looking for quick financing? Explore our loan options";

  return (
    <div>
      <div
        id="offers"
        className="relative  bg-gradient-to-br from-[#225EA6] to-[#193e6e] py-16 md:py-24"
      >
        <div className="max-w-7xl mx-auto mb-12 gap-6 px-6 sm:px-12 xl:px-0 flex flex-col">
          <h1 className="text-3xl md:text-4xl max-w-md font-bold text-white ">
            {headingText}
          </h1>
        </div>
        <ProductCarousel />
      </div>
    </div>
  );
}
export default Products;
