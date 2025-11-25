import React, { useRef, useEffect } from "react";

function MouseStarTrail({ maxStars = 120 }) {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const starsRef = useRef([]);
  const mouseRef = useRef({
    x: typeof window !== "undefined" ? window.innerWidth / 2 : 0,
    y: typeof window !== "undefined" ? window.innerHeight / 2 : 0,
  });
  const sizeRef = useRef({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const resize = () => {
      sizeRef.current = { width: window.innerWidth, height: window.innerHeight };
      canvas.width = sizeRef.current.width;
      canvas.height = sizeRef.current.height;
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;

      // Spawn a few stars at the cursor position
      spawnStars(mouseRef.current.x, mouseRef.current.y, 4);
    };

    const spawnStars = (x, y, count) => {
      for (let i = 0; i < count; i++) {
        if (starsRef.current.length >= maxStars) {
          starsRef.current.shift(); // remove oldest
        }

        const angle = Math.random() * Math.PI * 2;
        const speed = 0.5 + Math.random() * 1.2;

        starsRef.current.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: 1.5 + Math.random() * 2.5,
          life: 1, // 1 -> 0
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.25,
        });
      }
    };

    const drawStarShape = (context, cx, cy, spikes, outerRadius, innerRadius, rotation) => {
      let rot = rotation;
      let step = Math.PI / spikes;

      context.beginPath();
      context.moveTo(
        cx + Math.cos(rot) * outerRadius,
        cy + Math.sin(rot) * outerRadius
      );

      for (let i = 0; i < spikes; i++) {
        rot += step;
        context.lineTo(
          cx + Math.cos(rot) * innerRadius,
          cy + Math.sin(rot) * innerRadius
        );
        rot += step;
        context.lineTo(
          cx + Math.cos(rot) * outerRadius,
          cy + Math.sin(rot) * outerRadius
        );
      }

      context.closePath();
    };

    const draw = () => {
      const { width, height } = sizeRef.current;
      ctx.clearRect(0, 0, width, height);

      // Draw and update stars
      for (let i = starsRef.current.length - 1; i >= 0; i--) {
        const star = starsRef.current[i];

        star.x += star.vx;
        star.y += star.vy;
        star.rotation += star.rotationSpeed;
        star.life -= 0.02; // fade speed

        if (star.life <= 0) {
          starsRef.current.splice(i, 1);
          continue;
        }

        const alpha = star.life;
        const glowColor = "255, 255, 255"; // white; change to purple if you want

        ctx.save();
        ctx.translate(star.x, star.y);

        ctx.shadowBlur = 12;
        ctx.shadowColor = `rgba(${glowColor}, ${alpha})`;

        ctx.fillStyle = `rgba(${glowColor}, ${alpha})`;
        drawStarShape(
          ctx,
          0,
          0,
          5,
          star.size,
          star.size * 0.45,
          star.rotation
        );
        ctx.fill();
        ctx.restore();
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    window.addEventListener("mousemove", handleMouseMove);
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [maxStars]);

  return (
    <canvas
      ref={canvasRef}
      className="mouse-star-trail-canvas"
    />
  );
}

export default MouseStarTrail;
