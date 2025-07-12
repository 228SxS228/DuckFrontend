import React, { CSSProperties, useMemo } from "react";

type BackgroundPattern =
  | "gradient-blobs"
  | "subtle-waves"
  | "organic-mosaic"
  | "bubbles"
  | "none";

interface LiquidGlassProps {
  children: React.ReactNode;
  blurStrength?: number;
  hoverBlurStrength?: number;
  glassColor?: string;
  hoverGlassColor?: string;
  opacity?: number;
  hoverOpacity?: number;
  borderRadius?: number;
  borderWidth?: number;
  borderColor?: string;
  hoverBorderColor?: string;
  className?: string;
  animationDuration?: number;
  scaleOnHover?: number;
  shadow?: boolean;
  hoverShadow?: boolean;
  backgroundPattern?: BackgroundPattern;
  patternColor?: string;
  patternIntensity?: number;
  patternScale?: number;
}

export const LiquidGlass: React.FC<LiquidGlassProps> = ({
  children,
  blurStrength = 10,
  hoverBlurStrength = 15,
  glassColor = "#ffffff",
  hoverGlassColor,
  opacity = 0.2,
  hoverOpacity = 0.3,
  borderRadius = 24,
  borderWidth = 1,
  borderColor = "rgba(255, 255, 255, 0.3)",
  hoverBorderColor = "rgba(255, 255, 255, 0.5)",
  className = "",
  animationDuration = 300,
  scaleOnHover = 1.02,
  shadow = true,
  hoverShadow = true,
  backgroundPattern = "none",
  patternColor = "rgba(255,255,255,0.1)",
  patternIntensity = 0.3,
  patternScale = 1,
}) => {
  const getBackgroundColor = (color: string, alpha: number) => {
    if (color.startsWith("#")) {
      const r = parseInt(color.slice(1, 3), 16);
      const g = parseInt(color.slice(3, 5), 16);
      const b = parseInt(color.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
    if (color.startsWith("rgb")) {
      return color.replace("rgb", "rgba").replace(")", `, ${alpha})`);
    }
    return `rgba(255, 255, 255, ${alpha})`;
  };

  const baseStyles: CSSProperties = {
    backdropFilter: `blur(${blurStrength}px)`,
    backgroundColor: getBackgroundColor(glassColor, opacity),
    borderRadius: `${borderRadius}px`,
    border: `${borderWidth}px solid ${borderColor}`,
    boxShadow: shadow ? "0 4px 30px rgba(0, 0, 0, 0.1)" : "none",
    transform: "scale(1)",
    transition: `all ${animationDuration}ms ease-out`,
  };

  const hoverStyles: CSSProperties = {
    backdropFilter: `blur(${hoverBlurStrength}px)`,
    backgroundColor: getBackgroundColor(
      hoverGlassColor || glassColor,
      hoverOpacity
    ),
    borderColor: hoverBorderColor,
    boxShadow: hoverShadow
      ? "0 8px 40px rgba(0, 0, 0, 0.15)"
      : baseStyles.boxShadow,
    transform: `scale(${scaleOnHover})`,
  };

  const generatePattern = useMemo(() => {
    if (backgroundPattern === "none") return null;

    const patternStyle: CSSProperties = {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      opacity: patternIntensity,
      pointerEvents: "none",
      mixBlendMode: "overlay",
      transform: `scale(${patternScale})`,
    };

    const getPatternSVG = () => {
      switch (backgroundPattern) {
        case "gradient-blobs":
          return (
            <svg viewBox="0 0 500 500" style={patternStyle}>
              <defs>
                <radialGradient id="blob1" cx="30%" cy="40%">
                  <stop offset="0%" stopColor={patternColor} />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
                <radialGradient id="blob2" cx="70%" cy="60%">
                  <stop offset="0%" stopColor={patternColor} />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
              </defs>
              <ellipse cx="30%" cy="40%" rx="100" ry="80" fill="url(#blob1)" />
              <ellipse cx="70%" cy="60%" rx="120" ry="90" fill="url(#blob2)" />
            </svg>
          );

        case "subtle-waves":
          return (
            <svg viewBox="0 0 500 200" style={patternStyle}>
              <path
                d="M0,100 C150,200 350,0 500,100 L500,0 L0,0 Z"
                fill={patternColor}
                fillOpacity="0.2"
              />
              <path
                d="M0,80 C100,180 400,-20 500,80 L500,0 L0,0 Z"
                fill={patternColor}
                fillOpacity="0.15"
              />
            </svg>
          );

        case "organic-mosaic":
          return (
            <svg viewBox="0 0 500 500" style={patternStyle}>
              {Array.from({ length: 20 }).map((_, i) => (
                <circle
                  key={i}
                  cx={`${Math.random() * 100}%`}
                  cy={`${Math.random() * 100}%`}
                  r={Math.random() * 30 + 10}
                  fill="transparent"
                  stroke={patternColor}
                  strokeWidth={1.5}
                  strokeOpacity={0.15}
                />
              ))}
            </svg>
          );

        case "bubbles":
          return (
            <svg viewBox="0 0 500 500" style={patternStyle}>
              {Array.from({ length: 15 }).map((_, i) => (
                <circle
                  key={i}
                  cx={`${Math.random() * 100}%`}
                  cy={`${Math.random() * 100}%`}
                  r={Math.random() * 20 + 5}
                  fill={patternColor}
                  fillOpacity={0.1}
                />
              ))}
            </svg>
          );

        default:
          return null;
      }
    };

    return getPatternSVG();
  }, [backgroundPattern, patternColor, patternIntensity, patternScale]);

  return (
    <div
      className={`${className} liquid-glass-container`}
      style={{
        ...baseStyles,
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        Object.assign(e.currentTarget.style, hoverStyles);
      }}
      onMouseLeave={(e) => {
        Object.assign(e.currentTarget.style, baseStyles);
      }}
    >
      {backgroundPattern !== "none" && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: patternIntensity,
            pointerEvents: "none",
            mixBlendMode: "overlay",
            transform: `scale(${patternScale})`,
            transition: `opacity ${animationDuration}ms ease-out`,
          }}
        >
          {generatePattern}
        </div>
      )}

      <div
        style={{
          position: "relative",
          zIndex: 2,
          transition: `all ${animationDuration}ms ease-out`,
        }}
      >
        {children}
      </div>
    </div>
  );
};
