import { useEffect, useRef } from 'react';
export default function CustomCursor() {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const pos = useRef({ cx: 0, cy: 0, rx: 0, ry: 0 });
    const raf = useRef(0);
    useEffect(() => {
        const onMove = (e) => {
            pos.current.cx = e.clientX;
            pos.current.cy = e.clientY;
            if (dotRef.current) {
                dotRef.current.style.left = e.clientX + 'px';
                dotRef.current.style.top = e.clientY + 'px';
            }
        };
        const animRing = () => {
            pos.current.rx += (pos.current.cx - pos.current.rx) * 0.13;
            pos.current.ry += (pos.current.cy - pos.current.ry) * 0.13;
            if (ringRef.current) {
                ringRef.current.style.left = pos.current.rx + 'px';
                ringRef.current.style.top = pos.current.ry + 'px';
            }
            raf.current = requestAnimationFrame(animRing);
        };
        const onOver = (e) => {
            const t = e.target.closest('a,button,.pcard');
            if (dotRef.current && ringRef.current) {
                if (t) {
                    dotRef.current.style.transform = 'translate(-50%,-50%) scale(2)';
                    dotRef.current.style.boxShadow = '0 0 0 2px rgba(255,106,42,0.26), 0 0 24px rgba(255,106,42,0.62)';
                    ringRef.current.style.transform = 'translate(-50%,-50%) scale(1.7)';
                }
                else {
                    dotRef.current.style.transform = 'translate(-50%,-50%) scale(1)';
                    dotRef.current.style.boxShadow = '0 0 0 2px rgba(255,106,42,0.2), 0 0 16px rgba(255,106,42,0.45)';
                    ringRef.current.style.transform = 'translate(-50%,-50%) scale(1)';
                }
            }
        };
        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseover', onOver);
        raf.current = requestAnimationFrame(animRing);
        return () => {
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseover', onOver);
            cancelAnimationFrame(raf.current);
        };
    }, []);
    return (<>
      <div ref={dotRef} className="cursor-dot"/>
      <div ref={ringRef} className="cursor-ring"/>
    </>);
}
