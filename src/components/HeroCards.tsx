function HeroCards() {
  const cards = [
    {
      title: "Borrow",
      description:
        "Our digital lending solution, providing your customers with quick and convenient access to the financing they need.",
    },
    {
      title: "Invest",
      description:
        "Simplified onboarding for businesses and customers with our intuitive, user-friendly digital platform.",
    },
    {
      title: "Loan Calculator",
      description:
        "Expand banking access with our agent network platform, connecting underserved areas to essential financial services through local intermediaries.",
    },
    {
      title: "Loan Calculator",
      description:
        "Expand banking access with our agent network platform, connecting underserved areas to essential financial services through local intermediaries.",
    },
  ];

  return (
    <div className="relative bg-[#3a190b] ">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-8 py-16">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-[#402013] to-[#402013] rounded-2xl shadow-lg text-white p-6 flex flex-col justify-start items-start h-full min-h-[280px] transition-all duration-300 hover:scale-[1.02]"
          >
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-base leading-relaxed">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroCards;
