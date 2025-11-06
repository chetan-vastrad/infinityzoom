import React, { useEffect, useRef, useState } from "react";

const ImageZoom = () => {
  const canvasRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const imagePaths = [
      "/images/1.jpg",
      "/images/2.jpg",
      "/images/3.jpg",
      "/images/4.jpg",
      "/images/5.jpg",
      "/images/6.jpg",
      "/images/7.jpg",
      "/images/8.jpg",
      "/images/9.jpg",
      "/images/10.jpg",
      "/images/11.jpg",
      "/images/12.jpg",
      "/images/13.jpg",
      "/images/14.jpg",
    ];

    const images = [];
    let allLoaded = false;

    const loadImages = async () => {
      await Promise.all(
        imagePaths.map(
          (path, i) =>
            new Promise((resolve) => {
              const img = new Image();
              img.src = path;
              img.onload = resolve;
              img.onerror = resolve; // ignore errors
              images[i] = img;
            })
        )
      );
      allLoaded = true;
    };

    let z = 0;
    const zoomSpeed = 0.01;
    const visibleSteps = 2;
    const tileW = 1600;
    const tileH = 1200;
    let elementW, elementH;
    let animationId;

    const calcDimensions = () => {
      if (width / height > tileW / tileH) {
        elementW = width;
        elementH = width * (tileH / tileW);
      } else {
        elementW = height * (tileW / tileH);
        elementH = height;
      }
    };
    calcDimensions();

    const draw = () => {
      if (!allLoaded) return;
      ctx.clearRect(0, 0, width, height);

      const stepImgs = [];
      for (let i = 0; i < visibleSteps; i++) {
        stepImgs.push(images[(Math.floor(z) + i) % images.length]);
      }

      let scale = Math.pow(2, z % 1);
      const cx = width / 2;
      const cy = height / 2;

      for (let i = 0; i < stepImgs.length; i++) {
        const x = cx - (elementW / 2) * scale;
        const y = cy - (elementH / 2) * scale;
        const w = elementW * scale;
        const h = elementH * scale;

        if (stepImgs[i]?.complete) ctx.drawImage(stepImgs[i], x, y, w, h);
        scale *= 0.5;
      }

      z += zoomSpeed;
      if (z >= images.length) z = 0;

      animationId = requestAnimationFrame(draw);
    };

    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      calcDimensions();
    };

    loadImages().then(draw);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // ✅ Simplified fullscreen toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          background: "#000",
        }}
      />
      <button
        onClick={toggleFullscreen}
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          padding: "10px 15px",
          backgroundColor: "rgba(0,0,0,0.7)",
          color: "white",
          border: "1px solid white",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "14px",
          zIndex: 1000,
        }}
      >
        {isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
      </button>
    </div>
  );
};

export default ImageZoom;
