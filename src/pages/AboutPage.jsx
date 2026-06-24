export default function AboutPage({ isActive }) {
    return (<section className="page page-about">
      <div className="noise"/>
      <div className="about-wrap">
        <div className="acol">
          <div className={`stag av${isActive ? ' in' : ''}`}>About me</div>
          <h2 className={`btitle av${isActive ? ' in' : ''}`} style={{ fontSize: 'clamp(3rem,5.5vw,5rem)', marginBottom: '1.8rem', transitionDelay: '65ms' }}>
            Building<br />things that<br /><em>scale.</em>
          </h2>
          <div className={`stat-grid av${isActive ? ' in' : ''}`} style={{ transitionDelay: '130ms' }}>
            <div className="sc">
              <div className="sn">96<span style={{ fontSize: '1.8rem' }}>%</span></div>
              <div className="sl">SSLC Score</div>
            </div>
            <div className="sc">
              <div className="sn">83<span style={{ fontSize: '1.8rem' }}>%</span></div>
              <div className="sl">HSE Score</div>
            </div>
            <div className="sc">
              <div className="sn">500<span style={{ fontSize: '1.8rem' }}>+</span></div>
              <div className="sl">DSA problems</div>
            </div>
            <div className="sc">
              <div className="sn">8.3</div>
              <div className="sl">CGPA / 10</div>
            </div>
          </div>
        </div>

        <div className="acol">
          <p className={`btext av${isActive ? ' in' : ''}`}>
            I'm a <strong>Computer Science graduate (2026)</strong> from Vel Tech, Chennai — passionate about engineering software that solves real problems, not just software that runs.
          </p>
          <p className={`btext av${isActive ? ' in' : ''}`} style={{ marginTop: '0.9rem', transitionDelay: '65ms' }}>
            My work spans the full stack: from React UIs to Spring Boot backends, MySQL geospatial indexing to YOLO-based computer vision pipelines, and LangChain RAG systems to TensorFlow CNNs.
          </p>
          <p className={`btext av${isActive ? ' in' : ''}`} style={{ marginTop: '0.9rem', transitionDelay: '130ms' }}>
            At <strong>Accent Techno Soft</strong>, I shipped responsive React components that reduced task completion steps by 30%. My TinyTrail project won the <strong>Best Innovative Project Award</strong> from VTHT's IIC in 2026.
          </p>
          <p className={`btext av${isActive ? ' in' : ''}`} style={{ marginTop: '0.9rem', fontStyle: 'italic', color: 'rgba(255,140,0,0.6)', transitionDelay: '195ms' }}>
            Clean architecture and deliberate craftsmanship are the difference between code that ships and code that lasts.
          </p>
        </div>
      </div>
    </section>);
}
