import React, { useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Section from './components/Section';
import { lessons } from './data/lessons';

function App() {
  useEffect(() => {
    // Re-implement the progress bar logic if needed
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const progressBar = document.getElementById("progress-bar");
      if (progressBar) {
        progressBar.style.width = scrolled + "%";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <div id="progress-container">
        <div id="progress-bar"></div>
      </div>

      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-8 p-4 md:p-8 min-h-screen">
        <Sidebar />

        <div className="flex-1 bg-white shadow-2xl rounded-[40px] overflow-hidden border border-slate-100">
          <Header />

          <main className="p-6 md:p-12">
            {lessons.map((lesson) => (
              <Section key={lesson.id} content={lesson.content} />
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
