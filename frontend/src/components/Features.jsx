const steps = [
  { n: '01', title: 'Upload your resume', body: 'PDF or text. We parse your skills, projects, and experience — no manual tagging, no filling out forms.' },
  { n: '02', title: 'Name the role', body: 'Type the job title you are targeting. The draft adapts its tone and which of your wins it leads with.' },
  { n: '03', title: 'Review and send', body: 'You get a human-sounding email in seconds. Tweak it in the editor, then send straight to the recruiter.' },
];

const features = [
  { h: 'Resume parsing that gets it', p: 'Pulls out the projects and metrics you forgot were impressive, and leads with them.' },
  { h: 'Role-aware tone', p: 'A staff engineer email and a junior email should not sound the same. They don\'t here.' },
  { h: 'Drafts in under 10 seconds', p: 'From upload to a polished email, faster than your email client opens.' },
  { h: 'Editable by default', p: 'Every draft is a starting point, not a verdict. Change a word or rewrite it entirely.' },
  { h: '1-click send', p: 'Send to any recruiter inbox directly — no copy-paste, no switching tabs.' },
  { h: 'Private by default', p: 'Resumes are processed in-session and never stored or used to train models.' },
];

export default function Features({ onNavigate }) {
  return (
    <section id="how" className="section" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="container-wide">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap', marginBottom: 52 }}>
          <div>
            <p className="eyebrow" style={{ margin: '0 0 12px' }}>How it works</p>
            <h2 className="serif" style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)', fontWeight: 500, margin: 0, letterSpacing: '-0.01em', lineHeight: 1.15 }}>
              Three steps, one good email.
            </h2>
          </div>
          <button className="btn btn-outline" onClick={() => onNavigate('generator')}>Try it now</button>
        </div>

        <div className="steps">
          {steps.map((s) => (
            <div className="step" key={s.n}>
              <div className="step-num serif">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>

        <hr className="rule" style={{ margin: '56px 0 0' }} />

        <div className="feat-list">
          {features.map((f) => (
            <div className="feat-item" key={f.h}>
              <h4>{f.h}</h4>
              <p>{f.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
