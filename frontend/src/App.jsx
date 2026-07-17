import { useState, useEffect } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Docs from './components/Docs';
import CTA from './components/CTA';
import EmailGenerator from './components/EmailGenerator';
import Auth from './components/Auth';


export default function App() {
  const [page, setPage] = useState('home');

  const navigate = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    document.title = 'Mailflow — AI Cold Email Generator for Job Seekers';
  }, []);

  const isAuthPage = page === 'signin' || page === 'signup';

  return (
    <div>
      <Navbar page={page} onNavigate={navigate} />

      {isAuthPage ? (
        <Auth mode={page} onNavigate={navigate} />
      ) : (
        <>
          {page === 'home' && (
            <>
              <Hero onNavigate={navigate} />
              <Features onNavigate={navigate} />
              <EmailGenerator />
              <About onNavigate={navigate} />
              <Docs onNavigate={navigate} />
              <CTA onNavigate={navigate} />
            </>
          )}
          {page === 'how' && (
            <>
              <div style={{ height: 24 }} />
              <Features onNavigate={navigate} />
              <CTA onNavigate={navigate} />
            </>
          )}
          {page === 'about' && (
            <>
              <div style={{ height: 24 }} />
              <About onNavigate={navigate} />
              <CTA onNavigate={navigate} />
            </>
          )}
          {page === 'docs' && (
            <>
              <div style={{ height: 24 }} />
              <Docs onNavigate={navigate} />
            </>
          )}
          {page === 'generator' && (
            <>
              <div style={{ height: 24 }} />
              <EmailGenerator />
              <Features onNavigate={navigate} />
            </>
          )}
          <Footer onNavigate={navigate} />
        </>
      )}
    </div>
  );
}
