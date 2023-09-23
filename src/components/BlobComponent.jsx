import { useRef, useEffect, useState } from 'react';

const BlobComponent = () => {
  const blobRef = useRef(null);
  const [blobStyle, setBlobStyle] = useState({
    left: '50%',
    top: '50%',
  });

  const handlePointerMove = (e) => {
    const { clientX, clientY } = e;
    setBlobStyle({
      left: `${clientX}px`,
      top: `${clientY}px`,
    });
  };

  useEffect(() => {
    blobRef.current.animate(
      [
        { left: blobStyle.left, top: blobStyle.top },
      ],
      { duration: 3000, fill: 'forwards' }
    );
  }, [blobStyle]);

  return (
    <div>
      <div
        id="blur"
        onMouseMove={handlePointerMove}
        style={{
          height: '100%',
          width: '100%',
          position: 'fixed',
          zIndex: 2,
        }}
      >
        <div
          id="blob"
          ref={blobRef}
          style={{
            backgroundColor: '#fff',
            height: '150px',
            width: '150px',
            aspectRatio: '1',
            position: 'absolute',
            left: blobStyle.left,
            top: blobStyle.top,
            transform: 'translate(-50%, -50%)',
            borderRadius: '50%',
            background: 'linear-gradient(to right, #c80089, #8e00b2, #5c0089)',
            animation: 'rotateblob 20s infinite',
            opacity: '0.5',
            filter: 'blur(10px)'
          }}
        ></div>
      </div>
    </div>
  );
};

export default BlobComponent;