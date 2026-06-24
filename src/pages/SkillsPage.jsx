import { SKILL_CATEGORIES } from '../data/projects';
export default function SkillsPage({ isActive }) {
    return (<section className="page page-skills">
      <div className="noise"/>
      <div className="skills-wrap">
        <div className="sk-intro">
          <div className={`stag av${isActive ? ' in' : ''}`}>Tech Stack</div>
          <h2 className={`btitle av${isActive ? ' in' : ''}`} style={{ fontSize: 'clamp(3rem,5.5vw,5rem)', marginBottom: '1.6rem', transitionDelay: '65ms' }}>
            Built with<br /><em>precision.</em>
          </h2>
          <p className={`btext av${isActive ? ' in' : ''}`} style={{ maxWidth: '360px', transitionDelay: '130ms' }}>
            A focused toolkit for shipping full-stack products — from interface craft to backend systems and applied AI.
          </p>
        </div>

        <div className="sk-list">
          {SKILL_CATEGORIES.map((cat, i) => (<div key={cat.label} className={`sk-row av${isActive ? ' in' : ''}`} style={{ transitionDelay: `${i * 70 + 65}ms` }}>
              <div className="sk-row-head">
                <span className="sk-index">{String(i + 1).padStart(2, '0')}</span>
                <span className="sk-cat">{cat.label}</span>
              </div>
              <p className="sk-items">{cat.skills.join(' · ')}</p>
            </div>))}
        </div>
      </div>
    </section>);
}
