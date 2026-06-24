import { useState, useEffect, useRef, useCallback } from 'react';
import CustomCursor from './components/CustomCursor';
import DotNav from './components/DotNav';
import FooterBar from './components/FooterBar';
import ProjectDetail from './components/ProjectDetail';
import HeroPage from './pages/HeroPage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import ExperiencePage from './pages/ExperiencePage';
import ContactPage from './pages/ContactPage';
const TOTAL = 6;
export default function App() {
    const [current, setCurrent] = useState(0);
    const [revealed, setRevealed] = useState([true, false, false, false, false, false]);
    const [selectedProject, setSelectedProject] = useState(null);
    const blocking = useRef(false);
    const touchY = useRef(0);
    const touchX = useRef(0);
    const goTo = useCallback((idx) => {
        if (idx < 0 || idx >= TOTAL)
            return;
        setCurrent(idx);
        setRevealed(prev => {
            const next = [...prev];
            next[idx] = true;
            return next;
        });
    }, []);
    // Wheel navigation — respect internal scroll before advancing pages
    useEffect(() => {
        const onWheel = (e) => {
            if (blocking.current || selectedProject)
                return;
            // If the event originates inside a scrollable container, let it scroll
            // naturally until it hits the boundary, then advance pages.
            const scrollable = e.target.closest('.sk-list, .exp-scroll-wrap, .exp-inner');
            if (scrollable) {
                const atBottom = scrollable.scrollTop + scrollable.clientHeight >= scrollable.scrollHeight - 4;
                const atTop = scrollable.scrollTop <= 4;
                if (e.deltaY > 0 && !atBottom)
                    return;
                if (e.deltaY < 0 && !atTop)
                    return;
            }
            blocking.current = true;
            if (e.deltaY > 0)
                goTo(current + 1);
            else
                goTo(current - 1);
            setTimeout(() => { blocking.current = false; }, 950);
        };
        window.addEventListener('wheel', onWheel, { passive: true });
        return () => window.removeEventListener('wheel', onWheel);
    }, [current, goTo, selectedProject]);
    // Touch navigation
    useEffect(() => {
        const onStart = (e) => {
            touchY.current = e.touches[0].clientY;
            touchX.current = e.touches[0].clientX;
        };
        const onEnd = (e) => {
            if (selectedProject)
                return;
            const dy = touchY.current - e.changedTouches[0].clientY;
            const dx = Math.abs(touchX.current - e.changedTouches[0].clientX);
            if (Math.abs(dy) > 45 && Math.abs(dy) > dx) {
                if (dy > 0)
                    goTo(current + 1);
                else
                    goTo(current - 1);
            }
        };
        window.addEventListener('touchstart', onStart, { passive: true });
        window.addEventListener('touchend', onEnd, { passive: true });
        return () => {
            window.removeEventListener('touchstart', onStart);
            window.removeEventListener('touchend', onEnd);
        };
    }, [current, goTo, selectedProject]);
    // Keyboard navigation
    useEffect(() => {
        const onKey = (e) => {
            if (selectedProject)
                return;
            if (e.key === 'ArrowDown' || e.key === 'PageDown')
                goTo(current + 1);
            if (e.key === 'ArrowUp' || e.key === 'PageUp')
                goTo(current - 1);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [current, goTo, selectedProject]);
    const pagesTransform = `translateY(-${current * 100}vh)`;
    return (<>
      <CustomCursor />

      <DotNav current={current} total={TOTAL} goTo={goTo}/>

      <FooterBar current={current} total={TOTAL}/>

      <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)}/>

      <div className="pages" style={{ transform: pagesTransform }}>
        <HeroPage isActive={revealed[0]} goTo={goTo}/>
        <AboutPage isActive={revealed[1]}/>
        <SkillsPage isActive={revealed[2]}/>
        <ProjectsPage isActive={revealed[3]} onOpen={setSelectedProject}/>
        <ExperiencePage isActive={revealed[4]}/>
        <ContactPage isActive={revealed[5]}/>
      </div>
    </>);
}
