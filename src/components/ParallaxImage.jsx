import  { useState } from "react";

// eslint-disable-next-line react/prop-types
function ParallaxImage( { src }) {
  const [translateX, setTranslateX] = useState(0);
  const [translateY] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const newTranslateX = (offsetX / rect.width - 0.5) * 0.05;
    setTranslateX(newTranslateX);
  };

  const handleMouseLeave = () => {
    setTranslateX(0);
  };

  const imgStyles = {
    width: "100%",
    transform: `perspective(400px) translate(${translateX}px, ${translateY}px)`,
  };

  return (
    <div className="bg-dark-purple py-12 flex justify-center">
      <img
        src={src}
        alt="random person"
        className="parallax-img"
        style={imgStyles}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
}

export default ParallaxImage;
