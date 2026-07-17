export default function About({ onNavigate }) {
  return (
    <section id="about" className="section" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="container-wide">
        <div className="about-grid">
          <div>
            <p className="eyebrow" style={{ margin: '0 0 16px' }}>About</p>
            <p className="about-statement">
              We built the thing we wished existed during our own job searches.
            </p>
          </div>

          <div className="about-body">
            <p>
              Cold emailing works — when the email is actually good. Most job seekers either skip it or send something so generic it gets ignored. The ones who do it well spend an evening per email.
            </p>
            <p>
              Mailflow bridges that gap. Your real experience, paired with an AI that understands what recruiters actually care about, produces outreach that gets opened instead of archived.
            </p>

            <blockquote className="about-quote">
              "I landed three interviews in my first week. The emails felt personal in a way my handwritten ones never did."
              <cite>— Jordan M., Backend Engineer</cite>
            </blockquote>

            <div style={{ marginTop: 28 }}>
              <button className="btn btn-primary" onClick={() => onNavigate('generator')}>Start generating</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
