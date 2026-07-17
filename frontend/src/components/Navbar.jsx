import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'how', label: 'How it works' },
  { id: 'about', label: 'About' },
  { id: 'docs', label: 'Docs' },
];

export default function Navbar({ page, onNavigate }) {
  const [open, setOpen] = useState(false);

  const go = (id) => {
    onNavigate(id);
    setOpen(false);
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(250,248,244,0.85)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--line)',
      }}
    >
      <div className="container-wide" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 65 }}>
        <button onClick={() => go('home')} style={{ display: 'flex', alignItems: 'center', gap: 7, background: 'none', border: 'none', cursor: 'pointer' }}>
          <span className="serif" style={{ fontWeight: 600, fontSize: 20, color: 'var(--ink)', letterSpacing: '-0.01em' }}>Mailflow</span>
        </button>

        <nav style={{ display: 'flex', gap: 2 }} className="nav-desktop">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              style={{
                padding: '8px 14px',
                borderRadius: 6,
                background: 'transparent',
                border: 'none',
                color: page === l.id ? 'var(--ink)' : 'var(--muted)',
                fontWeight: 500,
                fontSize: 14,
                cursor: 'pointer',
                transition: 'color 0.15s',
                fontFamily: 'inherit',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ink)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = page === l.id ? 'var(--ink)' : 'var(--muted)')}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }} className="nav-desktop">
          <button className="btn btn-ghost" onClick={() => go('signin')}>Sign in</button>
          <button className="btn btn-primary" onClick={() => go('signup')} style={{ padding: '8px 16px' }}>Get started</button>
        </div>

        <button className="nav-mobile-toggle" onClick={() => setOpen(!open)} aria-label="Menu" style={{ background: 'none', border: 'none', color: 'var(--ink)', cursor: 'pointer' }}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="nav-mobile" style={{ borderTop: '1px solid var(--line)', padding: '14px 28px 18px', display: 'flex', flexDirection: 'column', gap: 4, background: 'var(--paper)' }}>
          {links.map((l) => (
            <button key={l.id} onClick={() => go(l.id)} style={{ textAlign: 'left', padding: '11px 4px', background: 'transparent', border: 'none', color: 'var(--ink)', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 500, fontSize: 15 }}>
              {l.label}
            </button>
          ))}
          <div style={{ height: 1, background: 'var(--line)', margin: '6px 0' }} />
          <button className="btn btn-outline" onClick={() => go('signin')} style={{ width: '100%', marginTop: 4 }}>Sign in</button>
          <button className="btn btn-primary" onClick={() => go('signup')} style={{ width: '100%', marginTop: 4 }}>Get started</button>
        </div>
      )}

      <style>{`
        @media (min-width: 769px) { .nav-mobile-toggle { display: none; } .nav-mobile { display: none !important; } }
        @media (max-width: 768px) { .nav-desktop { display: none !important; } }
      `}</style>
    </header>
  );
}
