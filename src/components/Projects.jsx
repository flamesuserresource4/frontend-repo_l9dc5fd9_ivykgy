import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Interactive 3D Landing',
    description:
      'A playful, modern landing page integrating a real-time 3D scene with smooth interactions and scroll-triggered reveals.',
    tech: ['React', 'Spline', 'Tailwind'],
    live: '#',
    repo: '#',
  },
  {
    title: 'Design System Kit',
    description:
      'Reusable components and tokens with themes, accessibility primitives, and docs site.',
    tech: ['Storybook', 'Radix', 'TypeScript'],
    live: '#',
    repo: '#',
  },
  {
    title: 'Analytics Dashboard',
    description:
      'Responsive dashboard with charts, auth, and dark mode. Focused on performance and data viz.',
    tech: ['Next.js', 'Charts', 'tRPC'],
    live: '#',
    repo: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full bg-gradient-to-b from-slate-950 to-slate-900 text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold">Selected Projects</h2>
          <p className="mt-2 text-sm text-slate-300">
            A few things I’ve shipped recently. More available on request.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-emerald-600/50 hover:bg-slate-900"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-medium">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{p.description}</p>
                </div>
                <div className="flex gap-2">
                  <a
                    href={p.live}
                    aria-label={`Open ${p.title} live`}
                    className="rounded-md border border-slate-700 bg-slate-800/60 p-2 text-slate-300 transition hover:border-emerald-600/50 hover:text-emerald-400"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href={p.repo}
                    aria-label={`Open ${p.title} repo`}
                    className="rounded-md border border-slate-700 bg-slate-800/60 p-2 text-slate-300 transition hover:border-emerald-600/50 hover:text-emerald-400"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-slate-800 bg-slate-900/60 px-2 py-1 text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="pointer-events-none absolute inset-0 -z-0 opacity-0 transition duration-300 group-hover:opacity-100" aria-hidden>
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
