const PromoBanner = () => {
  const handleClick = () => {
    // Redirect to eCommerce site
    window.location.href = "https://shop.cepodek.com";
    // OR if it's an internal route:
    // navigate('/shop');
  };

  return (
    <div
      className="w-full bg-gradient-to-r from-[#FF6B00] to-[#FF8C00] py-3 px-4 md:py-4 md:px-6 cursor-pointer"
      onClick={handleClick}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="text-center md:text-left">
          <p className="text-white font-bold text-sm md:text-base lg:text-lg">
            🚀 LIMITED-TIME OFFER:{" "}
            <span className="underline">Shop with Cepodek</span> and Enjoy:
          </p>
          <p className="text-white text-xs md:text-sm">
            ✅ Competitive Prices | ✅ Fast 30-Day Delivery | ✅ Premium Quality
            Products
          </p>
        </div>
        <div className="flex items-center">
          <button className="bg-white text-[#FF6B00] hover:bg-gray-100 font-bold py-2 px-4 md:py-3 md:px-6 rounded-full text-xs md:text-sm transition-all duration-200 flex items-center gap-2">
            Shop Now & Save Big
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
