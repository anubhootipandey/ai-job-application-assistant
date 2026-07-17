import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

export default function Auth({ mode, onNavigate }) {
  const [showPass, setShowPass] = useState(false);
  const isSignup = mode === 'signup';

  return (
    <div className="auth-wrap">
      <div className="auth-card">
        <button className="auth-back" onClick={() => onNavigate('home')}>
          <ArrowLeft size={14} /> Back to home
        </button>

        <h1 className="serif">{isSignup ? 'Create your account' : 'Welcome back'}</h1>
        <p className="sub">{isSignup ? 'No credit card required. Free forever to start.' : 'Sign in to access your drafts and history.'}</p>

        {/* <div className="social-row" style={{ marginBottom: 8 }}>
          <button className="social-btn" onClick={(e) => e.preventDefault()}>Google</button>
          <button className="social-btn" onClick={(e) => e.preventDefault()}>GitHub</button>
        </div>

        <div className="auth-divider">or with email</div> */}

        <form onSubmit={(e) => e.preventDefault()}>
          {isSignup && (
            <div className="input-group">
              <label>Full name</label>
              <input type="text" placeholder="Jordan Martinez" />
            </div>
          )}

          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" />
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="input-with-icon">
              <input
                type={showPass ? 'text' : 'password'}
                placeholder="••••••••"
              />
              <button type="button" className="toggle" onClick={() => setShowPass(!showPass)}>
                {showPass ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          {!isSignup && (
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 18 }}>
              <button type="button" style={{ background: 'none', border: 'none', color: 'var(--green)', fontSize: 13, cursor: 'pointer', padding: 0, fontFamily: 'inherit' }}>
                Forgot password?
              </button>
            </div>
          )}

          <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '12px' }}>
            {isSignup ? 'Create account' : 'Sign in'}
          </button>
        </form>

        <div className="auth-foot">
          {isSignup ? (
            <>Already have an account? <button onClick={() => onNavigate('signin')}>Sign in</button></>
          ) : (
            <>Don't have an account? <button onClick={() => onNavigate('signup')}>Sign up</button></>
          )}
        </div>
      </div>
    </div>
  );
}
