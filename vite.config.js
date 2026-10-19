import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/* The page is drawn by React, so a crawler that does not run JavaScript, an applicant-tracking parser or a link
   unfurler would see an empty page. This puts the same words, as plain semantic HTML, inside #root. React replaces
   it the moment the app starts, so visitors never see two versions. */
function crawlableContent() {
  return {
    name: 'crawlable-content',
    async transformIndexHtml(html) {
      const c = await import('./src/content.js');
      const figure = (p) => `${p.prefix || ''}${Number(p.value).toFixed(p.decimals || 0)}${p.suffix || ''} ${p.label}`;
      const li = (items) => `<ul>${items.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>`;
      const body = `
<main class="seo">
  <h1>Karthik Bindumon: ${esc(c.HEADLINE.join(' '))}</h1>
  <p>Game producer and AI workflow lead in Mumbai, India. Leads teams of 50+, has shipped 30+ games, and takes products from concept and prototype to launch and live operations.</p>
  <h2>Role and strengths</h2>
  ${c.fit.map((f) => `<h3>${esc(f.t)}</h3><p>${esc(f.line)}</p><p>Roles: ${esc(f.maps.join(', '))}</p>`).join('')}
  <h2>Results</h2>
  ${li(c.proof.map(figure))}
  <h2>Held to a number, in writing</h2>
  <ol>${c.hold.map((h) => `<li><strong>${esc(h.t)}.</strong> ${esc(h.p)}</li>`).join('')}</ol>
  <h2>Work</h2>
  ${c.projects
    .map(
      (p) => `<h3>${esc(p.title)}</h3><p>${esc(p.org)}, ${esc(p.period)}. ${esc(p.role)}.</p><p>${esc(p.blurb)}</p><p>${esc(p.problem)}</p>${li(p.approach)}${li(p.outcome)}`
    )
    .join('')}
  <h2>Experience</h2>
  ${li(c.roles.map((r) => `${r.when} ${r.org}, ${r.role}. ${r.line}`))}
  <h2>Education and certification</h2>
  ${li(c.school.map((s) => s.join(', ')))}
  <h2>Questions</h2>
  ${c.faq.map((f) => `<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`).join('')}
  <h2>Contact</h2>
  <p><a href="mailto:${c.EMAIL}">${c.EMAIL}</a> · <a href="https://www.linkedin.com/in/karthikbindumon11">LinkedIn</a> · <a href="assets/Karthik-Bindumon-Resume.pdf">Résumé (PDF)</a></p>
</main>`;
      return html.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
    },
  };
}

export default defineConfig({ base: './', plugins: [react(), crawlableContent()], server: { port: 5174 } });
