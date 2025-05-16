import { useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import logo from "@/assets/images/logo.png";
import { Icon } from "@iconify/react/dist/iconify.js";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Products", href: "/#products" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const pathname = useLocation().pathname;

  return (
    <header className={`w-full relative z-50 top-0 bg-transparent `}>
      <div className="container mx-auto px-4 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center font-bold space-x-2 text-3xl">
          <img src={logo} alt="Ubuntu Capital Logo" className="h-12 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-base font-normal">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`transition-colors text-white`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-2">
          <a
            href="tel:+233540128958"
            className="hover:scale-110 transition-transform duration-300"
          >
            <Icon icon={`ic:twotone-whatsapp`} className="h-6 w-6 text-white" />
          </a>
          <span className="text-base text-white">+233 54 012 8958</span>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="h-6 w-6 text-white" />
            </SheetTrigger>
            <SheetContent side="left" className="w-1/2 min-w-64 p-6 bg-white">
              <div className="mb-4">
                <img src={logo} alt="Ubuntu Capital Logo" className="h-12" />
              </div>
              <nav className="flex flex-col space-y-4 text-gray-700 font-medium">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`transition-colors duration-300 ${
                      pathname === link.href
                        ? "text-accent font-medium"
                        : "hover:text-accent/50 font-light"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
