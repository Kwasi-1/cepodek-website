import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Customers from "@/assets/images/customers.jpg";
import "swiper/css";
import "swiper/css/autoplay";

const testimonials = [
  {
    name: "Mary Weber",
    image: "/images/user1.jpg",
    rating: 5,
    message:
      "Use whitespace for a clean and focused look, allowing content to breathe and guiding users' attention to key elements.",
  },
  {
    name: "Katherine Koch",
    image: "/images/user2.jpg",
    rating: 4,
    message:
      "This template is beautifully crafted and easy to customize. It helped us increase conversions significantly!",
  },
  {
    name: "Lukas Müller",
    image: "/images/user3.jpg",
    rating: 5,
    message:
      "Clean UI and fantastic performance. Our team and customers both love it!",
  },
  // Duplicate to create more slides for smooth looping
  {
    name: "Mary Weber",
    image: "/images/user1.jpg",
    rating: 5,
    message:
      "Use whitespace for a clean and focused look, allowing content to breathe and guiding users' attention to key elements.",
  },
  {
    name: "Katherine Koch",
    image: "/images/user2.jpg",
    rating: 4,
    message:
      "This template is beautifully crafted and easy to customize. It helped us increase conversions significantly!",
  },
  {
    name: "Lukas Müller",
    image: "/images/user3.jpg",
    rating: 5,
    message:
      "Clean UI and fantastic performance. Our team and customers both love it!",
  },
];

const TestimonialSection = () => {
  return (
    <section
      className="relative py-20 bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `url(${Customers})`,
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      <div className="relative max-w-7xl mx-auto text-center px-4 z-10">
        <h2 className="text-4xl font-bold mb-4">What our customers say</h2>
        <p className="text-lg text-muted-foreground mb-12">
          Hear from our satisfied users who trust and love our FMCG products.
        </p>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={10000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2.2,
            },
            1024: {
              slidesPerView: 3.2,
            },
            1440: {
              slidesPerView: 4.2,
            },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div>
                <div className="text-yellow-400 text-xl mb-2">
                  {"★".repeat(t.rating) + "☆".repeat(5 - t.rating)}
                </div>
                <p className="text-sm italic mb-6 text-white">{t.message}</p>
                <div className="flex flex-col items-center">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover mb-2 border border-white"
                  />
                  <h4 className="text-white font-semibold">{t.name}</h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSection;
