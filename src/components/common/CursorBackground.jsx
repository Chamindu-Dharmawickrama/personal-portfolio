import { useEffect, useRef } from "react";

export const CursorBackground = () => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    const smoothMouseRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    const ripplesRef = useRef([]);
    const lastPosRef = useRef({ x: -999, y: -999 });
    const targetOpacityRef = useRef(1);
    const currentOpacityRef = useRef(1);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        let animationId;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        // Mouse move handler — spawn ripples as cursor moves
        const handleMouseMove = (e) => {
            mouseRef.current.x = e.clientX;
            mouseRef.current.y = e.clientY;

            // Check if hovering over element that should hide the cursor effect
            const isHidden = e.target.closest('.hide-cursor-effect');
            targetOpacityRef.current = isHidden ? 0 : 1;

            const dx = e.clientX - lastPosRef.current.x;
            const dy = e.clientY - lastPosRef.current.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // Only spawn a new ripple if cursor has moved enough
            if (dist > 18 && !isHidden) {
                ripplesRef.current.push({
                    x: e.clientX,
                    y: e.clientY,
                    radius: 0,
                    maxRadius: 80 + Math.random() * 60,
                    alpha: 0.45,
                    speed: 1.8 + Math.random() * 1.2,
                });
                lastPosRef.current = { x: e.clientX, y: e.clientY };

                // Cap the number of simultaneous ripples for performance
                if (ripplesRef.current.length > 28) {
                    ripplesRef.current.shift();
                }
            }
        };

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Dark background
            ctx.fillStyle = "rgba(10, 10, 10, 1)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Smooth cursor follow via linear interpolation (lerp)
            const lerpFactor = 0.09;
            smoothMouseRef.current.x += (mouseRef.current.x - smoothMouseRef.current.x) * lerpFactor;
            smoothMouseRef.current.y += (mouseRef.current.y - smoothMouseRef.current.y) * lerpFactor;

            // Smooth opacity transition for fading out effect
            currentOpacityRef.current += (targetOpacityRef.current - currentOpacityRef.current) * 0.15;
            const opacity = currentOpacityRef.current;

            const sx = smoothMouseRef.current.x;
            const sy = smoothMouseRef.current.y;

            // Ambient cursor glow
            const glow = ctx.createRadialGradient(sx, sy, 0, sx, sy, 140);
            glow.addColorStop(0, `rgba(80, 200, 255, ${0.10 * opacity})`);
            glow.addColorStop(0.5, `rgba(80, 160, 255, ${0.04 * opacity})`);
            glow.addColorStop(1, "rgba(80, 160, 255, 0)");
            ctx.fillStyle = glow;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Update and draw ripples
            ripplesRef.current = ripplesRef.current.filter((ripple) => ripple.alpha > 0.005);

            for (const ripple of ripplesRef.current) {
                // Ease-out expansion: slow down as radius approaches max
                const progress = ripple.radius / ripple.maxRadius;
                const easedSpeed = ripple.speed * (1 - progress * 0.75);
                ripple.radius += Math.max(easedSpeed, 0.3);

                // Fade out proportional to expansion progress
                ripple.alpha *= 0.965;

                const lineAlpha = ripple.alpha * (1 - progress * 0.4);

                // Outer ring
                ctx.beginPath();
                ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
                ctx.strokeStyle = `rgba(80, 200, 255, ${lineAlpha.toFixed(3)})`;
                ctx.lineWidth = 1.2;
                ctx.stroke();

                // Inner softer ring (offset)
                if (ripple.radius > 12) {
                    ctx.beginPath();
                    ctx.arc(ripple.x, ripple.y, ripple.radius * 0.65, 0, Math.PI * 2);
                    ctx.strokeStyle = `rgba(120, 220, 255, ${(lineAlpha * 0.35).toFixed(3)})`;
                    ctx.lineWidth = 0.7;
                    ctx.stroke();
                }
            }

            // Small bright cursor dot
            if (opacity > 0.01) {
                ctx.beginPath();
                ctx.arc(sx, sy, 4, 0, Math.PI * 2);
                const dotGrad = ctx.createRadialGradient(sx, sy, 0, sx, sy, 4);
                dotGrad.addColorStop(0, `rgba(180, 230, 255, ${0.9 * opacity})`);
                dotGrad.addColorStop(1, "rgba(80, 200, 255, 0)");
                ctx.fillStyle = dotGrad;
                ctx.fill();
            }

            animationId = requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", handleMouseMove);
        animate();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
        />
    );
};
