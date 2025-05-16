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

  const containerAlignmentClass = alignRight ? "ml-auto" : "mr-auto";

  return (
    <section
      id={id}
      className="relative flex items-center justify-center bg-black text-white bg-cover bg-center p-3 md:p-10 overflow-hidden"
    >
      {/* Background Image */}
      <img
        src={image}
        alt=""
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover brightness-50"
        onLoad={() => setImageLoaded(true)}
      />

      {/* Dark overlay (optional, already added via brightness-50 on image) */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      {imageLoaded && (
        <div className="relative z-10 container">
          <div
            className={`p-8 sm:p-12 md:p-16 lg:w-2/3 xl:w-7/12 rounded-lg ${containerAlignmentClass}`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {title}
            </h2>

            <p className="mb-6 text-base sm:text-lg">{description}</p>

            <ul className="list-disc list-inside text-base sm:text-lg space-y-2">
              {points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
