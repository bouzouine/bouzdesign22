// Project: bouziane-portfolio (Vite + React + Tailwind)
// Files below. Create a repo and paste these into the corresponding paths.

// package.json
{
  "name": "bouziane-portfolio",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "vite": "^5.0.0",
    "tailwindcss": "^4.0.0",
    "postcss": "^8.0.0",
    "autoprefixer": "^10.0.0"
  }
}

/* -------------------- index.html -------------------- */
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bouziane Boutouizera — Packaging & Posters</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

/* -------------------- src/main.jsx -------------------- */
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')).render(<App />)

/* -------------------- src/App.jsx -------------------- */
import React from 'react'

const projects = [
  { id: 1, title: 'Luxury Soap Packaging', category: 'Packaging', img: '/assets/p1.jpg' },
  { id: 2, title: 'Chips Poster', category: 'Poster', img: '/assets/p2.jpg' },
  { id: 3, title: 'Toothpaste Box', category: 'Packaging', img: '/assets/p3.jpg' },
  { id: 4, title: 'Social Campaign', category: 'Poster', img: '/assets/p4.jpg' },
  // add more projects here
]

export default function App() {
  const [filter, setFilter] = React.useState('All')
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter)

  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <h1 className="text-2xl font-extrabold tracking-tight">Bouziane Boutouizera</h1>
        <nav className="space-x-4">
          <a href="#projects" className="text-sm opacity-80 hover:opacity-100">Projects</a>
          <a href="#contact" className="text-sm opacity-80 hover:opacity-100">Contact</a>
        </nav>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold">Packaging & Social Media Design Specialist</h2>
          <p className="mt-4 text-lg opacity-80">Crafting tactile identities and scroll-stopping visuals. Black + orange, bold and refined.</p>
          <div className="mt-6 flex gap-4">
            <a href="#projects" className="inline-block px-5 py-3 rounded-2xl border-2 border-orange-500 text-orange-400">See projects</a>
            <a href="#contact" className="inline-block px-5 py-3 rounded-2xl bg-orange-500 text-black font-semibold">Hire me</a>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <div className="bg-gray-900 p-4 rounded-2xl border border-orange-600">
            <img src="/assets/hero.jpg" alt="hero" className="w-full h-56 object-cover rounded" />
          </div>
        </div>
      </section>

      <section id="projects" className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold">Projects</h3>
          <div className="flex gap-2">
            {['All','Packaging','Poster'].map(cat => (
              <button key={cat} onClick={() => setFilter(cat)} className={`px-3 py-1 rounded-full text-sm border ${filter===cat? 'bg-orange-500 text-black border-orange-500' : 'border-gray-700 text-white/80'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map(p => (
            <article key={p.id} className="group bg-[#0b0b0b] rounded-xl overflow-hidden border border-gray-800">
              <div className="relative h-48">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transform group-hover:scale-105 transition" />
                <div className="absolute left-3 bottom-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-sm border border-orange-600">{p.category}</div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold">{p.title}</h4>
                <p className="mt-2 text-sm opacity-70">Short description or materials used — keep it punchy.</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer id="contact" className="max-w-6xl mx-auto px-6 py-12 border-t border-gray-800">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h5 className="text-lg font-bold">Get in touch</h5>
            <p className="opacity-80 mt-2">Email: <a href="mailto:hello@bouziane.com" className="text-orange-400">hello@bouziane.com</a></p>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-sm opacity-80">Behance</a>
            <a href="#" className="text-sm opacity-80">Dribbble</a>
            <a href="#" className="text-sm opacity-80">LinkedIn</a>
          </div>
        </div>
        <p className="mt-6 text-sm opacity-60">© {new Date().getFullYear()} Bouziane Boutouizera — Packaging & Posters</p>
      </footer>
    </div>
  )
}

/* -------------------- src/index.css -------------------- */
@tailwind base;
@tailwind components;
@tailwind utilities;

html, body, #root { height: 100%; }
body { background: #000; }

/* -------------------- tailwind.config.cjs -------------------- */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: {
          500: '#ff7a00'
        }
      }
    }
  },
  plugins: []
}

/* -------------------- assets -------------------- */
// Put your images in /public/assets: hero.jpg, p1.jpg, p2.jpg, p3.jpg, p4.jpg etc.

/* -------------------- Quick notes -------------------- */
// - To run locally: npm install && npm run dev
// - To build: npm run build
// - This is intentionally minimal: replace texts, add pages, connect forms or a CMS as needed.
