import { Icon } from "@iconify/react";
import logo from "@/assets/images/logo.png";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Products", href: "/#products" },
  { label: "Contact", href: "/#contact" },
];

const socialLinks = [
  { icon: "ri:facebook-fill", href: "#" },
  { icon: "ri:twitter-fill", href: "#" },
  { icon: "ri:linkedin-box-fill", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto py-16 lg:py-24 border-b border-white/50 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo */}
        <div className="col-span-1">
          <img src={logo} alt="Logo" className="h-12 sm:h-14 mb-4" />
          <p className="text-base text-[#F5F5F5] leading-[150%] font-[300] mb-4">
            Your trusted FMCG partner in Ghana, providing retail, wholesale, and
            delivery services nationwide.
          </p>

          <div>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  className="hover:text-primary/80 p-3 border border-white/30 rounded-full transition-colors duration-200"
                >
                  <Icon icon={icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:ml-10">
          <h4 className="text-white mb-2 text-lg lg:text-xl leading-[150%] font-[600]">
            Quick Links
          </h4>
          <ul className="space-y-1 text-[#F5F5F5] text-sm">
            {quickLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  to={href}
                  className="transition-colors duration-200 text-base leading-[150%] opacity-90 hover:text-[#FFC20E] "
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Help & Info</h4>
          <ul className="space-y-2 opacity-80">
            <li>
              <a href="#" className="hover:text-[#FFC20E] transition-colors">
                Delivery Info
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FFC20E] transition-colors">
                Wholesale Accounts
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FFC20E] transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FFC20E] transition-colors">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3 opacity-80">
            <li className="flex items-start">
              <Phone className="h-5 w-5 mr-2 mt-0.5" />
              <span> +233 54 012 8958</span>
            </li>
            <li className="flex items-start">
              <Mail className="h-5 w-5 mr-2 mt-0.5" />
              <span>info@cepodek.com</span>
            </li>
            <li className="flex items-start">
              <MapPin className="h-5 w-5 mr-2 mt-0.5" />
              <span>Madina Market, Ghana</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center font-light text-sm text-[#E4E5E7]/60 mt-6 px-4">
        &copy; {new Date().getFullYear()} Cepodek. All rights reserved.
      </div>
    </footer>
  );
}
