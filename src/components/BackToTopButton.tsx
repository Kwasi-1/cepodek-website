import { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show/hide button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      title="Back to top"
      onClick={scrollToTop}
      className={`${
        isVisible ? "fixed" : "hidden"
      } hidden md:block bottom-6 right-6 bg-white text-[#402013] hover:text-white p-4 rounded-full shadow-xl hover:bg-primary/80 transition z-50`}
    >
      <Icon icon="iconoir:fast-arrow-up" className="text-xl font-thin" />
    </button>
  );
}

export default BackToTopButton;
