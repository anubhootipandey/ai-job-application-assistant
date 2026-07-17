import { useState } from 'react';

const faqs = [
  { q: 'Is my resume stored anywhere?', a: 'No. Resumes are parsed in-session to generate your email and are not persisted or used for model training.' },
  { q: 'What file formats can I upload?', a: 'PDF and plain text are supported today. DOCX is on the roadmap.' },
  { q: 'Can I edit the email before sending?', a: 'Yes — the draft is fully editable in the textarea before you hit send. It is a starting point, not a verdict.' },
  { q: 'Do I need an API key to use the generator?', a: 'No key is needed for the in-app generator. API keys are only for programmatic access.' },
  { q: 'How accurate is the resume parsing?', a: 'It reliably extracts skills, experience, and notable projects. You can always refine the email manually before sending.' },
  { q: 'Is there a free tier?', a: 'Yes — you can generate a limited number of emails free. Sign up to unlock higher limits and saved drafts.' },
];

export default function Docs({ onNavigate }) {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="docs" className="section" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="container-wide">
        <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 48px' }}>
          <p className="eyebrow" style={{ margin: '0 0 12px' }}>Docs</p>
          <h2 className="serif" style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)', fontWeight: 500, margin: 0, letterSpacing: '-0.01em' }}>
            Frequently asked questions
          </h2>
          <p style={{ color: 'var(--muted)', margin: '16px 0 0', lineHeight: 1.6 }}>
            Everything you need to get the most out of Mailflow. Still stuck? Try the generator — it is self-explanatory.
          </p>
        </div>

        <div className="faq">
          {faqs.map((f, i) => (
            <div className="faq-item" key={i}>
              <button
                className={`faq-q ${openIdx === i ? 'open' : ''}`}
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              >
                {f.q}
                <span className="sign">+</span>
              </button>
              {openIdx === i && <div className="faq-a">{f.a}</div>}
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <button className="btn btn-primary" onClick={() => onNavigate('generator')}>Try the generator</button>
        </div>
      </div>
    </section>
  );
}
