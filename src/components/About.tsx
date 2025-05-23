const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl xl:text-[42px] font-bold text-gray-900 leading-tight mb-6">
              Committed to Keeping Ghana Moving — One Product at a Time
            </h2>
            <p className="text-lg leading-[150%] text-gray-700 mb-6">
              At Cepodek, we're more than just an FMCG distributor. We’re a
              trusted link in Ghana’s supply chain — serving households,
              businesses, and institutions with over 5,000 essential products,
              every single day.
            </p>
            <p className="italic text-gray-600 mb-10">
              With a strong retail presence, reliable delivery, and competitive
              pricing, Cepodek ensures quality and convenience reach every
              corner of Ghana. We don’t just sell — we supply confidence,
              consistency, and care.
            </p>
            <a
              href="#contact"
              className="text-base rounded-md px-6 py-4 lg:px-7 lg:py-4.5 bg-black text-white"
            >
              Learn More About Us
            </a>
          </div>

          {/* Image Grid */}
          <div className="w-full md:w-1/2 grid grid-col-1 lg:grid-cols-2 gap-6">
            <img
              src="https://images.unsplash.com/photo-1573496267526-08a69e46a409?auto=format&fit=crop&q=80"
              alt="Salon 1"
              className="object-cover w-full h-72"
            />
            <img
              src="https://images.unsplash.com/photo-1573496267526-08a69e46a409?auto=format&fit=crop&q=80"
              alt="Salon 2"
              className="hidden lg:block object-cover w-full h-72"
            />
            <img
              src="https://images.unsplash.com/photo-1573496267526-08a69e46a409?auto=format&fit=crop&q=80"
              alt="Salon 3"
              className="hidden lg:block object-cover w-full h-72"
            />
            <img
              src="https://images.unsplash.com/photo-1573496267526-08a69e46a409?auto=format&fit=crop&q=80"
              alt="Salon 4"
              className="object-cover w-full h-72"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
