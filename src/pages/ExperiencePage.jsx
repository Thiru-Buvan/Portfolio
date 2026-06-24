export default function ExperiencePage({ isActive }) {
    return (<section className="page page-exp">
      <div className="noise"/>
      <div className="exp-scroll-wrap">
        <div className="exp-inner">
          <div className="eleft">
            <div className={`stag av${isActive ? ' in' : ''}`}>Experience</div>
            <h2 className={`btitle av${isActive ? ' in' : ''}`} style={{ fontSize: 'clamp(2.4rem,5vw,4.8rem)', transitionDelay: '65ms' }}>
              Where I've<br /><em>worked</em><br />&amp; earned.
            </h2>
            <p className={`btext av${isActive ? ' in' : ''}`} style={{ marginTop: '1.2rem', fontSize: '0.86rem', transitionDelay: '130ms' }}>
              Professional internship plus academic recognition that validated my engineering in real production contexts.
            </p>
          </div>

          <div className="eright">
            <div className={`ecard av${isActive ? ' in' : ''}`}>
              <div className="edate">Dec 2024</div>
              <div className="erole">Frontend Developer Intern</div>
              <div className="eco">Accent Techno Soft</div>
              <div className="eli">Translated Figma &amp; Adobe XD wireframes into responsive React.js components</div>
              <div className="eli">Improved UX navigation, cutting task completion steps by 30%</div>
              <div className="eli">Integrated frontend with REST APIs — seamless across desktop &amp; mobile</div>
            </div>

            <div className={`stag av${isActive ? ' in' : ''}`} style={{ marginTop: '0.2rem', transitionDelay: '65ms' }}>
              Achievements
            </div>

            <div className="ach-list">
              <div className={`ai av${isActive ? ' in' : ''}`} style={{ transitionDelay: '130ms' }}>
                <div className="ai-ico">🏆</div>
                <div>
                  <div className="ai-h">Best Innovative Project — IIC 2026</div>
                  <div className="ai-b">VTHT Institutional Innovation Council award for TinyTrail hyperlocal marketplace</div>
                </div>
              </div>
              <div className={`ai av${isActive ? ' in' : ''}`} style={{ transitionDelay: '195ms' }}>
                <div className="ai-ico">⚡</div>
                <div>
                  <div className="ai-h">500+ LeetCode Problems Solved</div>
                  <div className="ai-b">Arrays, strings, trees, graphs, recursion — also active on GeeksforGeeks</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);
}
