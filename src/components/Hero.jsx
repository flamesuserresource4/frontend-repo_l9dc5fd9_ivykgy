import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="w-full min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-xs text-slate-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Available for freelance work
            </div>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Hi, I’m <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Your Name</span>
            </h1>
            <p className="max-w-prose text-slate-300">
              I build modern, performant web experiences with a focus on delightful user interfaces and clean, scalable code.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 font-medium text-slate-950 transition hover:bg-emerald-400"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/60 px-5 py-3 font-medium text-white transition hover:bg-slate-800"
              >
                <Download className="h-4 w-4" />
                Get in touch
              </a>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 text-xs text-slate-400">
              <span className="rounded-md border border-slate-800 bg-slate-900/60 px-2 py-1">React</span>
              <span className="rounded-md border border-slate-800 bg-slate-900/60 px-2 py-1">TypeScript</span>
              <span className="rounded-md border border-slate-800 bg-slate-900/60 px-2 py-1">Node.js</span>
              <span className="rounded-md border border-slate-800 bg-slate-900/60 px-2 py-1">UI/UX</span>
            </div>
          </div>

          {/* Spline Scene */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            {/* Decorative gradient that doesn't block interaction */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-950/40 via-transparent to-emerald-500/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
