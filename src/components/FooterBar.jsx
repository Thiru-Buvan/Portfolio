export default function FooterBar({ current, total }) {
    const label = String(current + 1).padStart(2, '0');
    const tot = String(total).padStart(2, '0');
    return (<div className="fbar">
      <span className="fl">THIRUMURUGAN B — SOFTWARE ENGINEER</span>
      <span>{label} / {tot}</span>
    </div>);
}
