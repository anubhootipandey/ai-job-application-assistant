import { useState } from 'react'
import './App.css'
import { instance, endpoints } from './api.jsx';
import emailjs from '@emailjs/browser';

function App() {
  const [resumeText, setResumeText] = useState("");
  const [jobPosition,setJobPosition] = useState("");
  const [to, setTo] = useState("");
  const [email, setEmail] = useState({subject: "", body: ""});

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData()
    formData.append('file', file);
    await instance.post(endpoints.UPLOAD_RESUME, formData)
            .then(res => setResumeText(res.data.resume_text))
            .catch(err => console.log(err))
  }

  const generateEmail = async () => {
    await instance.post(endpoints.GENERATE_EMAIL,{"resume_text":resumeText, job_position:jobPosition})
            .then(res=>setEmail(res.data))
            .catch(err => console.log(err))
  }

  const sendEmail = () => {
    const templateParameters={
      "subject":email.subject,
      "message":email.body,
      "email":to
    }
    emailjs.send("service_8jb4qnt", "template_nvy04o2", templateParameters,"2lKlXhf97CcEfwpjq")
          .then(res=>alert("Email has been sent"))
          .catch(err => console.log(err))
  }

  return (
  <div className="app">
  <div className="container">

    <div className="hero">
      <h1>AI Job Application Assistant</h1>
      <p>
        Generate personalized cold emails for recruiters using AI and your resume.
      </p>
    </div>

    <div className="dashboard">

      <div className="card">
        <h2>Create Email</h2>

        <div className="input-group">
          <label>Upload Resume</label>
          <input
            type="file"
            onChange={(e) => handleFileUpload(e)}
          />
        </div>

        <div className="input-group">
          <label>Job Position</label>
          <input
            type="text"
            placeholder="Frontend Developer"
            onChange={(e) => setJobPosition(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>HR Email</label>
          <input
            type="text"
            placeholder="hr@company.com"
            onChange={(e) => setTo(e.target.value)}
          />
        </div>

        <button
          className="generate-btn"
          disabled={!resumeText}
          onClick={generateEmail}
        >
          Generate AI Email
        </button>
      </div>

      {email && (
        <div className="email-card">
          <h2>Generated Email</h2>

          <textarea
            value={email?.body}
            onChange={(e) =>
              setEmail({
                ...email,
                body: e.target.value,
              })
            }
          />

          <button
            className="send-btn"
            onClick={sendEmail}
          >
            Send Email
          </button>
        </div>
      )}

    </div>
  </div>
</div>
)
}

export default App
