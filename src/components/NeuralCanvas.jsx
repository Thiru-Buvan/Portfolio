import { useEffect, useRef } from 'react';
const MAX_DIST = 130;
const NODE_COUNT = 34;
export default function NeuralCanvas() {
    const canvasRef = useRef(null);
    const rafRef = useRef(0);
    useEffect(() => {
        const c = canvasRef.current;
        if (!c)
            return;
        const ctx = c.getContext('2d');
        if (!ctx)
            return;
        const W = c.width;
        const H = c.height;
        // Init nodes
        const nodes = Array.from({ length: NODE_COUNT }, () => ({
            x: Math.random() * W,
            y: Math.random() * H,
            vx: (Math.random() - 0.5) * 0.45,
            vy: (Math.random() - 0.5) * 0.45,
            r: 2.5 + Math.random() * 3,
            pulse: Math.random() * Math.PI * 2,
            pulseSpeed: 0.025 + Math.random() * 0.02,
        }));
        const packets = [];
        let frameCount = 0;
        const spawnPacket = () => {
            const fromIdx = Math.floor(Math.random() * nodes.length);
            // find a nearby node
            const candidates = [];
            for (let i = 0; i < nodes.length; i++) {
                if (i === fromIdx)
                    continue;
                const dx = nodes[fromIdx].x - nodes[i].x;
                const dy = nodes[fromIdx].y - nodes[i].y;
                if (Math.sqrt(dx * dx + dy * dy) < MAX_DIST)
                    candidates.push(i);
            }
            if (candidates.length === 0)
                return;
            const toIdx = candidates[Math.floor(Math.random() * candidates.length)];
            packets.push({ fromIdx, toIdx, t: 0, speed: 0.012 + Math.random() * 0.01 });
        };
        const draw = () => {
            ctx.clearRect(0, 0, W, H);
            // Move nodes, bounce off walls
            for (const n of nodes) {
                n.x += n.vx;
                n.y += n.vy;
                if (n.x < n.r || n.x > W - n.r)
                    n.vx *= -1;
                if (n.y < n.r || n.y > H - n.r)
                    n.vy *= -1;
                n.pulse += n.pulseSpeed;
            }
            // Draw edges
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < MAX_DIST) {
                        const alpha = (1 - dist / MAX_DIST) * 0.25;
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.strokeStyle = `rgba(255,69,0,${alpha})`;
                        ctx.lineWidth = 0.8;
                        ctx.stroke();
                    }
                }
            }
            // Draw nodes
            for (const n of nodes) {
                const glow = (Math.sin(n.pulse) + 1) / 2;
                const baseAlpha = 0.45 + glow * 0.5;
                const radius = n.r + glow * 1.5;
                // outer glow ring
                ctx.save();
                ctx.shadowBlur = 10 + glow * 14;
                ctx.shadowColor = `rgba(255,69,0,${0.5 + glow * 0.4})`;
                ctx.beginPath();
                ctx.arc(n.x, n.y, radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255,${60 + glow * 80},0,${baseAlpha})`;
                ctx.fill();
                ctx.restore();
                // dot center highlight
                ctx.beginPath();
                ctx.arc(n.x, n.y, radius * 0.45, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255,200,100,${0.5 + glow * 0.4})`;
                ctx.fill();
            }
            // Update & draw data packets
            for (let i = packets.length - 1; i >= 0; i--) {
                const p = packets[i];
                p.t += p.speed;
                if (p.t >= 1) {
                    packets.splice(i, 1);
                    continue;
                }
                const src = nodes[p.fromIdx];
                const dst = nodes[p.toIdx];
                const dx = dst.x - src.x;
                const dy = dst.y - src.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist > MAX_DIST * 1.4) {
                    packets.splice(i, 1);
                    continue;
                }
                const px = src.x + dx * p.t;
                const py = src.y + dy * p.t;
                const alpha = Math.sin(p.t * Math.PI);
                ctx.save();
                ctx.shadowBlur = 12;
                ctx.shadowColor = `rgba(255,140,0,${alpha * 0.9})`;
                ctx.beginPath();
                ctx.arc(px, py, 3, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255,180,60,${alpha})`;
                ctx.fill();
                // trailing tail
                const tailLen = 0.12;
                const t1 = Math.max(0, p.t - tailLen);
                ctx.beginPath();
                ctx.moveTo(src.x + dx * t1, src.y + dy * t1);
                ctx.lineTo(px, py);
                ctx.strokeStyle = `rgba(255,120,0,${alpha * 0.5})`;
                ctx.lineWidth = 1.5;
                ctx.stroke();
                ctx.restore();
            }
            // Spawn packets periodically
            frameCount++;
            if (frameCount % 38 === 0 && packets.length < 12)
                spawnPacket();
            rafRef.current = requestAnimationFrame(draw);
        };
        draw();
        return () => cancelAnimationFrame(rafRef.current);
    }, []);
    return (<canvas ref={canvasRef} width={420} height={500} style={{ display: 'block', maxWidth: '100%', maxHeight: '100%' }}/>);
}
