import React from 'react';
import { User, Code, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="w-full bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex items-center gap-3">
          <div className="rounded-lg bg-emerald-500/20 p-2">
            <User className="h-5 w-5 text-emerald-400" />
          </div>
          <h2 className="text-2xl font-semibold">About Me</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="mb-2 text-lg font-medium">Who I am</h3>
            <p className="text-sm text-slate-300">
              I’m a front-end engineer with a passion for crafting polished, accessible interfaces. I love bridging the gap between design and engineering to ship thoughtful products.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="mb-2 flex items-center gap-2 text-lg font-medium">
              <Code className="h-4 w-4 text-emerald-400" />
              Tech I enjoy
            </h3>
            <ul className="mt-2 grid grid-cols-2 gap-2 text-sm text-slate-300">
              <li className="rounded-md border border-slate-800 bg-slate-900/60 px-2 py-1">React</li>
              <li className="rounded-md border border-slate-800 bg-slate-900/60 px-2 py-1">Next.js</li>
              <li className="rounded-md border border-slate-800 bg-slate-900/60 px-2 py-1">TypeScript</li>
              <li className="rounded-md border border-slate-800 bg-slate-900/60 px-2 py-1">Node.js</li>
              <li className="rounded-md border border-slate-800 bg-slate-900/60 px-2 py-1">Tailwind</li>
              <li className="rounded-md border border-slate-800 bg-slate-900/60 px-2 py-1">Framer Motion</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="mb-2 flex items-center gap-2 text-lg font-medium">
              <Rocket className="h-4 w-4 text-emerald-400" />
              What I deliver
            </h3>
            <p className="text-sm text-slate-300">
              High-quality, responsive web apps, component libraries, and design systems. I care deeply about performance, accessibility, and elegant developer experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
