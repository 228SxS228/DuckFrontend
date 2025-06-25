import { motion } from "framer-motion";

export default function DuckComponent({
  color,
  size,
}: {
  color: string;
  size: number | "responsive";
}) {
  const getSize = () => {
    if (size === "responsive") {
      return "w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16";
    }
    return "";
  };

  const getSvgSize = () => {
    if (size === "responsive") {
      return { width: undefined, height: undefined };
    }
    return { width: size, height: size };
  };

  return (
    <motion.svg
      {...getSvgSize()}
      viewBox="0 0 100 100"
      className={`drop-shadow-lg ${size === "responsive" ? getSize() : ""}`}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Тело утки */}
      <ellipse cx="50" cy="65" rx="25" ry="20" fill={color} />

      {/* Голова утки */}
      <circle cx="45" cy="35" r="18" fill={color} />

      {/* Клюв */}
      <ellipse cx="35" cy="38" rx="8" ry="4" fill="#f97316" />

      {/* Глаз */}
      <circle cx="42" cy="30" r="3" fill="#1f2937" />
      <circle cx="43" cy="29" r="1" fill="white" />

      {/* Крыло */}
      <ellipse
        cx="55"
        cy="55"
        rx="12"
        ry="15"
        fill="#000000"
        fillOpacity="0.1"
      />

      {/* Хвост */}
      <ellipse cx="70" cy="60" rx="8" ry="12" fill={color} />
    </motion.svg>
  );
}
