import { useState } from 'react';
import { Loader2, ArrowRight } from 'lucide-react';
import { instance, endpoints } from '../api';
import emailjs from '@emailjs/browser';

export default function EmailGenerator() {
  const [resumeText, setResumeText] = useState('');
  const [jobPosition, setJobPosition] = useState('');
  const [to, setTo] = useState('');
  const [email, setEmail] = useState({ subject: '', body: '' });
  const [hasEmail, setHasEmail] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState(null);
  const [fileName, setFileName] = useState('');

  const flash = (msg, ok = true) => {
    setToast({ msg, ok });
    setTimeout(() => setToast(null), 3000);
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setFileName(file.name);
    const formData = new FormData();
    formData.append('file', file);
    try {
      const res = await instance.post(endpoints.UPLOAD_RESUME, formData);
      setResumeText(res.data.resume_text);
    } catch (err) {
      console.log(err);
      flash('Upload failed — check your connection.', false);
    }
  };

  const generateEmail = async () => {
    setGenerating(true);
    try {
      const res = await instance.post(endpoints.GENERATE_EMAIL, {
        resume_text: resumeText,
        job_position: jobPosition,
      });
      setEmail(res.data);
      setHasEmail(true);
    } catch (err) {
      console.log(err);
      flash('Generation failed — try again.', false);
    } finally {
      setGenerating(false);
    }
  };

  const sendEmail = () => {
    setSending(true);
    const templateParameters = {
      subject: email.subject,
      message: email.body,
      email: to,
    };
    emailjs
      .send('service_8jb4qnt', 'template_nvy04o2', templateParameters, '2lKlXhf97CcEfwpjq')
      .then(() => {
        flash('Email sent.');
        setSending(false);
      })
      .catch((err) => {
        console.log(err);
        flash('Send failed — try again.', false);
        setSending(false);
      });
  };

  return (
    <section className="gen-wrap" id="generator">
      <div className="container-wide">
        <div style={{ maxWidth: 620, margin: '0 auto 40px', textAlign: 'center' }}>
          <p className="eyebrow" style={{ margin: '0 0 12px' }}>Generator</p>
          <h2 className="serif" style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.3rem)', fontWeight: 500, margin: '0 0 10px', letterSpacing: '-0.01em' }}>
            Create your cold email
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.6, margin: 0 }}>
            Upload your resume, set the role, and let AI draft a personalized recruiter outreach.
          </p>
        </div>

        <div className="gen-grid">
          <div className="gen-card">
            <div className="step-tag">Step 1</div>
            <h2>Your details</h2>

            <div className="input-group">
              <label>Upload resume</label>
              <input type="file" onChange={(e) => handleFileUpload(e)} />
              {fileName && <div className="gen-filehint">{fileName} · ready</div>}
            </div>

            <div className="input-group">
              <label>Job position</label>
              <input
                type="text"
                placeholder="Frontend Developer"
                value={jobPosition}
                onChange={(e) => setJobPosition(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label>HR email</label>
              <input
                type="text"
                placeholder="hr@company.com"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              />
            </div>

            <button
              className="btn btn-primary"
              style={{ width: '100%' }}
              disabled={!fileName || generating}
              onClick={generateEmail}
            >
              {generating ? <><Loader2 size={15} className="spin" /> Generating…</> : <>Generate email <ArrowRight size={15} /></>}
            </button>
          </div>

          <div className="gen-card">
            <div className="step-tag">Step 2</div>
            <h2>Generated email</h2>

            {hasEmail ? (
              <>
                <div className="email-subj-line"><strong>Subject:</strong> {email.subject}</div>
                <textarea
                  value={email.body}
                  onChange={(e) => setEmail({ ...email, body: e.target.value })}
                />
                <button
                  className="btn btn-primary"
                  style={{ marginTop: 16 }}
                  disabled={sending}
                  onClick={sendEmail}
                >
                  {sending ? <><Loader2 size={15} className="spin" /> Sending…</> : <>Send email <ArrowRight size={15} /></>}
                </button>
              </>
            ) : (
              <div className="empty-state">
                <div className="es-title">Your draft will appear here</div>
                <div className="es-sub">Upload a resume and hit generate to get started.</div>
              </div>
            )}
          </div>
        </div>

        {toast && (
          <div className={`toast ${toast.ok ? '' : 'err'}`}>
            <span className="dot" />
            {toast.msg}
          </div>
        )}
      </div>
    </section>
  );
}
