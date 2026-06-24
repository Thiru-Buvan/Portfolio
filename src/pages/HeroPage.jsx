import NeuralCanvas from '../components/NeuralCanvas';
export default function HeroPage({ isActive, goTo }) {
    return (<section className="page page-hero">
      <div className="noise"/>
      <div className="cm tl"/><div className="cm tr"/>
      <div className="cm bl"/><div className="cm br"/>

      <div className="hero-wrap">
        <div className="hero-left">
          <div className={`badge av${isActive ? ' in' : ''}`}>
            Available for full-time roles
          </div>
          <h1 className={`h1 av${isActive ? ' in' : ''}`} style={{ transitionDelay: '65ms' }}>
            <span className="ln1">Thiru</span>
            <span className="ln2">murugan</span>
            <span className="ln3">Software Engineer</span>
          </h1>
          <p className={`hero-desc av${isActive ? ' in' : ''}`} style={{ transitionDelay: '130ms' }}>
            Full-stack &amp; AI engineer. I build hyperlocal marketplaces, deepfake detectors, and enterprise copilots — systems that scale and code that lasts.
          </p>
          <div className={`hero-ctas av${isActive ? ' in' : ''}`} style={{ transitionDelay: '195ms' }}>
            <button className="ctp" onClick={() => goTo(3)}>View Projects →</button>
            <a href="mailto:thirubuvan17@gmail.com" className="ctg">Contact Me</a>
          </div>
        </div>
        <div className="dna-wrap">
          <NeuralCanvas />
        </div>
      </div>

      <div className="scue">
        <div className="sarr"/>
        <span>Scroll to explore</span>
      </div>
    </section>);
}
