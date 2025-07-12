import { FC } from "react";
import { motion } from "framer-motion";

interface BubbleComponentProps {
  count?: number;
  speed?: number;
  color?: string;
  size?: {
    base?: number;
    sm?: number;
    md?: number;
  };
}

const BubbleComponent: FC<BubbleComponentProps> = ({
  count = 8,
  speed = 4,
  color = "rgb(255, 255, 255)",
  size = { base: 2, sm: 3, md: 4 },
}) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${size.base}px`,
            height: `${size.base}px`,
            backgroundColor: color,
          }}
          animate={{
            y: [0, -50, -100, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: speed + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default BubbleComponent;
