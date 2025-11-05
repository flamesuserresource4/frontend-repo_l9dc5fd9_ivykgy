import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="w-full bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">Let’s work together</h2>
          <p className="mt-2 text-sm text-slate-300">
            Have a project in mind, or just want to say hi? I’m always open to new opportunities.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="mailto:you@example.com"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 font-medium text-slate-950 transition hover:bg-emerald-400"
          >
            <Mail className="h-4 w-4" />
            you@example.com
          </a>
          <a
            href="https://github.com/yourhandle"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/60 px-5 py-3 text-white transition hover:border-emerald-600/50 hover:bg-slate-800"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/yourhandle/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/60 px-5 py-3 text-white transition hover:border-emerald-600/50 hover:bg-slate-800"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
        <p className="mt-10 text-xs text-slate-500">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Contact;
