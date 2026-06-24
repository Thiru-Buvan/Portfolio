import { useEffect } from 'react';
export default function ProjectDetail({ project, onClose }) {
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'Escape')
                onClose();
        };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [onClose]);
    return (<div className={`detail-overlay${project ? ' open' : ''}`}>
      <div className="detail-bg" onClick={onClose}/>
      <div className="detail-panel">
        <div className="detail-close">
          <span className="dc-label">Project Detail</span>
          <button className="dc-btn" onClick={onClose}>✕ Close</button>
        </div>
        {project && (<div className="dp-body">
            <div className="dp-num">{project.num}</div>
            <div className="dp-type">{project.type}</div>
            <div className="dp-title">{project.title}</div>

            <div className="dp-section">
              <div className="dp-sh">Overview</div>
              <p className="dp-text">{project.overview}</p>
            </div>

            <div className="dp-section">
              <div className="dp-sh">What I built</div>
              <ul className="dp-bullets">
                {project.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>

            <div className="dp-section">
              <div className="dp-sh">Impact & Metrics</div>
              <div className="dp-metrics">
                {project.metrics.map((m, i) => (<div key={i} className="dp-m">
                    <div>
                      <div className="dp-m-val">{m.val}</div>
                      <div className="dp-m-lab">{m.lab}</div>
                    </div>
                  </div>))}
              </div>
            </div>

            <div className="dp-section">
              <div className="dp-sh">Technologies</div>
              <div className="dp-tags">
                {project.tags.map((t, i) => (<span key={i} className="dp-tag">{t}</span>))}
              </div>
            </div>

            <a href={project.github} target="_blank" rel="noopener noreferrer" className="gh-link">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.96.58.1.79-.25.79-.56v-2c-3.2.69-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.19a11.1 11.1 0 012.9-.39c.98 0 1.97.13 2.9.39 2.2-1.5 3.17-1.19 3.17-1.19.64 1.58.24 2.75.12 3.04.74.8 1.19 1.83 1.19 3.08 0 4.41-2.7 5.38-5.27 5.67.42.36.79 1.06.79 2.14v3.17c0 .31.21.67.8.56C20.22 21.42 23.5 17.1 23.5 12 23.5 5.65 18.35.5 12 .5z"/>
              </svg>
              View on GitHub ↗
            </a>
          </div>)}
      </div>
    </div>);
}
