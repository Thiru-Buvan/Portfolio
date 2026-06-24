import { PROJECTS } from '../data/projects';
export default function ProjectsPage({ isActive, onOpen }) {
    return (<section className="page page-projects">
      <div className="noise"/>
      <div className="proj-hdr">
        <div>
          <div className={`stag av${isActive ? ' in' : ''}`}>Selected work</div>
          <h2 className={`btitle av${isActive ? ' in' : ''}`} style={{ fontSize: 'clamp(2.2rem,4.5vw,4rem)', marginBottom: 0, transitionDelay: '65ms' }}>
            Things I've <em>built.</em>
          </h2>
        </div>
        <div className={`proj-cnt av${isActive ? ' in' : ''}`} style={{ transitionDelay: '130ms' }}>
          {String(PROJECTS.length).padStart(2, '0')}
        </div>
      </div>

      <div className="proj-grid">
        {PROJECTS.map((p, i) => (<div key={p.num} className={`pcard av${isActive ? ' in' : ''}`} style={{ transitionDelay: `${i * 65}ms` }} onClick={() => onOpen(p)}>
            <span className="parr">↗</span>
            <div className="pnum">{p.num}</div>
            <div className="ptyp">{p.type}</div>
            <div className="ptit">{p.title}</div>
            <p className="psub">{p.subtitle === 'Hyperlocal Digital Marketplace'
                ? 'Hyperlocal digital marketplace with real-time geospatial vendor discovery, JWT auth, RBAC, and YOLO computer vision for kitchen hygiene detection.'
                : p.subtitle === 'RAG-Powered Document Intelligence'
                    ? 'Production-ready RAG assistant for context-aware document Q&A over enterprise knowledge bases with semantic search and AI email drafting.'
                    : 'CNN classifier trained on 5,000 real & synthetic images to detect AI-generated media with OpenCV preprocessing and systematic hyperparameter tuning.'}</p>
            <div className="pmets">
              {p.metrics.slice(0, 2).map((m, mi) => (<span key={mi} className="pm">{m.val} {m.lab}</span>))}
            </div>
            <div className="ptags">
              {p.tags.slice(0, 6).map((t) => (<span key={t} className="ptag">{t}</span>))}
            </div>
          </div>))}
      </div>

      <div className="click-hint">Click any project card to view full details</div>
    </section>);
}
