import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import DuckComponent from "./DuckComponent";

export default function WaveComponent() {
  const [activeWave, setActiveWave] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWave((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="realiteve flex-1 z-20 ">
      {/* Первая волна с утками */}
      {activeWave}
      <div className="absolute inset-x-0 top-197 flex-1 mb-4 sm:mb-8 lg:mb-16 z-100">
        <svg
          viewBox="800 80 800 200"
          className="w-full h-24 sm:h-32 md:h-40 lg:h-48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs className="w-full">
            <linearGradient
              id="waveGradient1"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#1e40af" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,150 Q300,50 600,150 T2500,150 L2500,300 L0,300 Z"
            fill="url(#waveGradient1)"
            animate={{
              d: [
                "M0,150 Q300,50 600,150 T2500,150 L2500,300 L0,300 Z",
                "M0,120 Q300,80 600,120 T2500,120 L2500,300 L0,300 Z",
                "M0,150 Q300,50 600,150 T2500,150 L2500,300 L0,300 Z",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </svg>

        {/* Утки на первой волне */}
        <motion.div
          className="absolute top-2 sm:top-4 md:top-6 lg:top-8 left-1/4"
          animate={{
            y: [0, -10, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <DuckComponent color="#fbbf24" size="responsive" />
        </motion.div>
        <motion.div
          className="absolute top-3 sm:top-6 md:top-8 lg:top-12 right-1/3"
          animate={{
            y: [0, -8, -15, 0],
            rotate: [0, -3, 3, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <DuckComponent color="#f59e0b" size="responsive" />
        </motion.div>
      </div>
    </div>
  );
};



      {
        /* <div className="realiteve flex-1 z-40 overflow-hidden">
        <div className="absolute inset-x-0 top-342 flex-1 mb-4 sm:mb-8 lg:mb-16 z-100">
          <svg
            viewBox="800 80 800 200"
            className="w-full h-24 sm:h-32 md:h-40 lg:h-48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs className="w-full">
              <linearGradient
                id="waveGradient1"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#1e40af" stopOpacity="0.9" />
              </linearGradient>
            </defs>
            <motion.path
              d="M0,150 Q300,50 600,150 T2500,150 L2500,300 L0,300 Z"
              fill="url(#waveGradient1)"
              animate={{
                d: [
                  "M0,150 Q300,50 600,150 T2500,150 L2500,300 L0,300 Z",
                  "M0,120 Q300,80 600,120 T2500,120 L2500,300 L0,300 Z",
                  "M0,150 Q300,50 600,150 T2500,150 L2500,300 L0,300 Z",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </svg>

          {/* Утки на первой волне */
      }
      {
        /* <motion.div
            className="absolute top-2 sm:top-4 md:top-6 lg:top-8 left-1/4"
            animate={{
              y: [0, -10, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
          <Duck color="#fbbf24" size="responsive" /> 
          </motion.div>

          <motion.div
            className="absolute top-3 sm:top-6 md:top-8 lg:top-12 right-1/3"
            animate={{
              y: [0, -8, -15, 0],
              rotate: [0, -3, 3, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <Duck color="#f59e0b" size="responsive" /> 
          </motion.div>
        </div>
      </div> */
      } 