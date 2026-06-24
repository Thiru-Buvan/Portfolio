const labels = ['Hero', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];
export default function DotNav({ current, total, goTo }) {
    return (<nav className="dot-nav" aria-label="Page navigation">
      {Array.from({ length: total }).map((_, i) => (<button key={i} className={`dot-btn${current === i ? ' active' : ''}`} onClick={() => goTo(i)} aria-label={labels[i] ?? `Page ${i + 1}`}/>))}
    </nav>);
}
