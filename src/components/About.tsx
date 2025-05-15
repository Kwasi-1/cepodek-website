const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <div className="overflow-hidden border-none shadow-lg">
              <div className="h-96 rounded-2xl bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80"
                  alt="Cepodek Store Interior"
                  className="w-full h-full rounded-3xl object-cover"
                />
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#003366]">
              About Cepodek
            </h2>
            <div className="p-0">
              <p className="text-lg mb-4">
                Cepodek is a proudly Ghanaian-owned FMCG distributor with 2
                strategically located retail stores and a comprehensive online
                shopping platform.
              </p>
              <p className="text-lg mb-4">
                With over 5,000 products in stock, we serve households,
                mini-marts, institutions, and businesses across Ghana, providing
                essential consumer goods at competitive prices.
              </p>
              <p className="text-lg">
                Our mission is to make quality products accessible to all
                Ghanaians through our retail, wholesale, and nationwide delivery
                services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
