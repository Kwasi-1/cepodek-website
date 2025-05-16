import { useState } from "react";

interface ServicesSectionProps {
  id: string;
  title: string;
  description: string;
  points: string[];
  image: string;
  alignRight: boolean;
}

const ServicesSection = ({
  id,
  title,
  description,
  points,
  image,
  alignRight,
}: ServicesSectionProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const layoutDirection = alignRight ? "flex-row-reverse" : "flex-row";

  return (
    <section
      id={id}
      className={`container mx-auto flex flex-col md:flex-${layoutDirection} items-center justify-center text-black p-6 md:py-12 md:px-32 gap-6 md:gap-12 lg:gap-16`}
      style={{ fontFamily: "Inter" }}
    >
      {/* Image */}
      <div className="w-full md:w-1/2">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-auto rounded-lg object-cover shadow-lg"
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      {/* Text Content */}
      {imageLoaded && (
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">{title}</h2>

          <p className="mb-6 text-base sm:text-lg">{description}</p>

          <ul className="list-disc list-inside text-base sm:text-lg space-y-2">
            {points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
