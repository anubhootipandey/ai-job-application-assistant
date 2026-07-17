import { ArrowRight } from 'lucide-react';

export default function Hero({ onNavigate }) {
  return (
    <section className="hero">
      <div className="container-wide">
        <div className="hero-grid">
          <div>
            <p className="eyebrow" style={{ margin: '0 0 20px' }}>Cold email, without the dread</p>
            <h1 className="serif">
              Stop writing recruiters<br />
              from <span className="under-accent">scratch.</span>
            </h1>
            <p className="lead">
              Upload your resume, name the role, and Mailflow drafts a personal,
              recruiter-ready email in seconds. Edit it, then send — no copy-paste, no blank page.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => onNavigate('generator')}>
                Try the generator <ArrowRight size={15} />
              </button>
              <button className="btn btn-ghost" onClick={() => onNavigate('how')}>
                See how it works
              </button>
            </div>
            <div className="hero-meta">
              <span><b>12,400+</b> emails sent</span>
              <span style={{ width: 1, height: 14, background: 'var(--line-2)' }} />
              <span><b>3.2×</b> avg. reply rate</span>
              <span style={{ width: 1, height: 14, background: 'var(--line-2)' }} />
              <span>Free to start</span>
            </div>
          </div>

          <div className="preview">
            <div className="preview-head">
              <span className="preview-dot" />
              <span className="preview-dot" />
              <span className="preview-dot" />
              <span className="preview-title">mailflow.app/new</span>
            </div>

            <div className="preview-row">
              <span className="preview-label">Resume</span>
              <span className="preview-text">bob_resume.pdf<span style={{ color: 'var(--green)' }}> · parsed</span></span>
            </div>
            <div className="preview-row">
              <span className="preview-label">Role</span>
              <span className="preview-text">Senior Frontend Engineer</span>
            </div>
            <div className="preview-row">
              <span className="preview-label">To</span>
              <span className="preview-text">hiring@stripe.com</span>
            </div>

            <div className="preview-email">
              <div className="subj">Re: Frontend opportunity at Stripe</div>
              Hi Alice — I saw Stripe is hiring senior frontend engineers. I've spent the last four years building React design systems at Linear, and the checkout-UX work your team is doing is exactly the kind of problem I left my last role to find<span className="cursor-blink" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
