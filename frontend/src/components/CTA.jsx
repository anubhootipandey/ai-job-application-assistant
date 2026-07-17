import { ArrowRight } from 'lucide-react';

export default function CTA({ onNavigate }) {
  return (
    <section className="section" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="container-wide">
        <div className="cta-strip">
          <div>
            <h2>Ready to write emails that get replies?</h2>
            <p>Your first email is free. No credit card, no blank page.</p>
          </div>
          <button className="btn btn-primary" onClick={() => onNavigate('signup')} style={{ padding: '13px 24px', fontSize: 15 }}>
            Create free account <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}
