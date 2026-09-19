export default function SectionHeading({ eyebrow, title, children, align = 'left', id }) {
  return <div className={`section-heading section-heading-${align}`}><span className="eyebrow">{eyebrow}</span><h2 className="section-title" id={id}>{title}</h2>{children && <p className="lead">{children}</p>}</div>;
}
