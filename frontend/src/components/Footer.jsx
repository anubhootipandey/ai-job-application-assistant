const cols = [
  {
    title: 'Product',
    links: [
      { label: 'How it works', id: 'how' },
      { label: 'Generator', id: 'generator' },
      { label: 'Docs', id: 'docs' },
      { label: 'Pricing', id: 'how' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', id: 'about' },
      { label: 'Blog', id: 'about' },
    ],
  },
  {
    title: 'Account',
    links: [
      { label: 'Sign in', id: 'signin' },
      { label: 'Sign up', id: 'signup' },
    ],
  },
];

export default function Footer({ onNavigate }) {
  return (
    <footer style={{ borderTop: '1px solid var(--line)', padding: '48px 0 36px', background: 'var(--bg)' }}>
      <div className="container-wide">
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: 40 }} className="footer-grid">
          <div>
            <div className="serif" style={{ fontWeight: 600, fontSize: 20, marginBottom: 10 }}>Mailflow</div>
            <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.6, margin: '0 0 18px', maxWidth: 280 }}>
              AI-powered cold email generation that turns your resume into recruiter-ready outreach in seconds.
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink)', margin: '0 0 14px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{c.title}</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
                {c.links.map((l) => (
                  <li key={l.label}>
                    <button onClick={() => onNavigate(l.id)} style={{ background: 'none', border: 'none', color: 'var(--muted)', fontSize: 14, cursor: 'pointer', padding: 0, fontFamily: 'inherit' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ink)')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}>
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 36, paddingTop: 20, borderTop: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ color: 'var(--faint)', fontSize: 13, margin: 0 }}>© 2025 Mailflow. All rights reserved.</p>
          <p style={{ color: 'var(--faint)', fontSize: 13, margin: 0 }}>Made for job seekers, by job seekers.</p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 28px !important; } }
        @media (max-width: 480px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
