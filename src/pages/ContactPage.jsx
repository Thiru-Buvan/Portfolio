const contactLinks = [
  {
    href: 'mailto:thirubuvan17@gmail.com',
    label: 'thirubuvan17@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 6.5h16a1 1 0 0 1 1 1v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 16.5v-9a1 1 0 0 1 1-1Z" fill="none" stroke="currentColor" strokeWidth="1.7"/>
        <path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    href: 'tel:+918608598123',
    label: '+91 8608598123',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7.2 4.8h3.1l1 4-2.1 1.8a15.2 15.2 0 0 0 4.2 4.2l1.8-2.1 4 1v3.1a1.5 1.5 0 0 1-1.6 1.5A13.9 13.9 0 0 1 5.7 6.4 1.5 1.5 0 0 1 7.2 4.8Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    href: 'https://github.com/Thiru-Buvan',
    label: 'GitHub',
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3.8a8.5 8.5 0 0 0-2.7 16.6c.4.1.5-.2.5-.4v-1.6c-2.2.5-2.7-.9-2.7-.9-.3-.8-.8-1-1-1.1-.8-.5.1-.5.1-.5.9.1 1.3.9 1.3.9.8 1.3 2.1.9 2.6.7.1-.6.3-1 .6-1.2-1.8-.2-3.7-.9-3.7-4a3.1 3.1 0 0 1 .8-2.2 2.9 2.9 0 0 1 .1-2.2s.7-.2 2.3.8a8 8 0 0 1 4.2 0c1.6-1 2.3-.8 2.3-.8a2.9 2.9 0 0 1 .1 2.2 3.1 3.1 0 0 1 .8 2.2c0 3.1-1.9 3.8-3.7 4 .3.2.6.8.6 1.6V20c0 .2.1.5.5.4A8.5 8.5 0 0 0 12 3.8Z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    href: 'https://linkedin.com/in/thirumurugan-b',
    label: 'LinkedIn',
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.8 8.8a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6Zm-1.1 2.1h2.3V18H5.7v-7.1Zm5.1 0H13v1c.4-.7 1.2-1.2 2.4-1.2 2 0 2.9 1.2 2.9 3.5V18H16v-3.5c0-1-.4-1.7-1.3-1.7s-1.5.6-1.5 1.7V18h-2.4v-7.1Z" fill="currentColor"/>
        <path d="M4.8 4.8h14.4a.4.4 0 0 1 .4.4v13.6a.4.4 0 0 1-.4.4H4.8a.4.4 0 0 1-.4-.4V5.2a.4.4 0 0 1 .4-.4Z" fill="none" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
  },
  {
    href: 'https://leetcode.com/u/Thiru-buvan',
    label: 'LeetCode',
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.8 6.2 9 12l5.8 5.8" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.7 4.4 6 9.1a4 4 0 0 0 0 5.7l4.7 4.8" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11.8 12H19" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function ContactPage({ isActive }) {
    return (<section className="page page-contact">
      <div className="noise"/>
      <div className="ring1"/>
      <div className="ring2"/>

      <div className="cinner">
        <div className={`cpre av${isActive ? ' in' : ''}`}>Let's work together</div>
        <div className={`cbig av${isActive ? ' in' : ''}`} style={{ transitionDelay: '65ms' }}>
          <span className="c1">Let's build</span>
          <span className="c2">something.</span>
        </div>

        <div className={`clinks av${isActive ? ' in' : ''}`} style={{ transitionDelay: '130ms' }}>
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="cla"
            >
              <span className="cla-ico">{link.icon}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </div>

        <p className={`footer-note av${isActive ? ' in' : ''}`} style={{ transitionDelay: '195ms' }}>
          B.E. CSE · Vel Tech, Chennai · 2022 – 2026
        </p>
      </div>
    </section>);
}
