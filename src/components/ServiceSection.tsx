import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
};

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
  const containerAlignmentClass = alignRight ? "ml-auto" : "mr-auto";

  const sectionStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url(${image})`,
    fontFamily: "Inter",
  };

  return (
    <section
      id={id}
      className="relative flex items-center justify-center bg-black text-white bg-cover bg-center p-3 md:p-10"
      style={sectionStyle}
    >
      <div className="container">
        <div
          className={`relative z-10 p-8 sm:p-12 md:p-16 lg:w-2/3 xl:w-7/12 rounded-lg ${containerAlignmentClass}`}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl pb-4 md:pb-6 lg:pb-8 font-bold mb-4 flex items-center"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {title}
            {/* <Icon
              icon={icon}
              className="ml-2 h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-20 lg:w-20"
            /> */}
          </motion.h2>

          <motion.p
            className="mb-4 text-base sm:text-lg"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {description}
          </motion.p>

          <ul className="list-disc list-inside mb-8 text-base sm:text-lg">
            {points.map((point, index) => (
              <motion.li
                key={index}
                className="mb-2 md:mb-4"
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <span>{point}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
