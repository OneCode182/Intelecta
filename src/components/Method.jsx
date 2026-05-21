import { FadeIn, StaggerGroup, StaggerItem, Parallax } from './ui/Animations';
import Eyebrow from './ui/Eyebrow';

const PHASES = [
  {
    tag: 'Fase 1',
    weeks: '4 semanas',
    title: 'Diagnóstico',
    body: 'Auditoría de seguridad psicológica y análisis contable de las pérdidas reales generadas por rotación.',
    bullets: ['Entrevistas confidenciales', 'Mapeo de riesgo por área', 'Cuantificación financiera'],
  },
  {
    tag: 'Fase 2',
    weeks: '3 semanas',
    title: 'Arquitectura',
    body: 'Alineación de las metas de facturación con las habilidades críticas y el diseño organizacional vigente.',
    bullets: ['Matriz de competencias', 'Mapa de dependencias', 'Diseño de roles clave'],
  },
  {
    tag: 'Fase 3',
    weeks: '5 semanas',
    title: 'Roadmap',
    body: 'Plan de acción de 90 días con rituales de feedback, dueños de proceso y cultura de alto rendimiento.',
    bullets: ['Rituales semanales', 'Manual de gestión', 'Scorecards mensuales'],
  },
];

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-1 shrink-0 text-carmesi dark:text-carmesi-200">
      <path d="M2 7L6 11L12 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Method() {
  return (
    <section id="metodo" className="bg-ivory-100 dark:bg-ink-800 py-24 md:py-32 relative overflow-hidden transition-colors duration-300">
      <Parallax speed={0.1} className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[200px] dot-pattern-ivory dark:dot-pattern-light opacity-60 dark:opacity-20 pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="text-center max-w-[760px] mx-auto">
          <FadeIn blur={false}>
            <Eyebrow className="justify-center">
              <span className="mx-auto">El método · 12 semanas</span>
            </Eyebrow>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="h-display text-[40px] md:text-[54px] mt-5 text-ink dark:text-ivory leading-[1.05] text-balance">
              Tres fases. Un sistema. <em className="italic font-normal text-carmesi dark:text-carmesi-200">Resultados medibles</em>.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-ink/65 dark:text-ivory/65 text-[16px] md:text-[17px] leading-relaxed">
              Un proceso estructurado que convierte la incertidumbre cultural en una hoja de ruta operativa con dueños,
              plazos y métricas.
            </p>
          </FadeIn>
        </div>

        <div className="mt-20 relative">
          <div className="hidden md:block absolute top-[42px] left-[8%] right-[8%] h-px bg-ink/15 dark:bg-ivory/15" />
          <div className="hidden md:block absolute top-[39px] left-[8%] w-[60%] h-[7px] bg-gradient-to-r from-carmesi dark:from-carmesi-200 to-carmesi/30 dark:to-carmesi-200/30 rounded-full" />

          <StaggerGroup className="grid md:grid-cols-3 gap-10 md:gap-8 relative">
            {PHASES.map((p, i) => (
              <StaggerItem key={i} className="relative">
                <div className="flex md:justify-center mb-8 md:mb-12 relative z-10">
                  <div className="w-[88px] h-[88px] rounded-full bg-ivory dark:bg-ink-800 border border-ink/10 dark:border-ivory/10 grid place-items-center shadow-[0_18px_40px_-22px_rgba(91,30,45,0.4)] dark:shadow-[0_18px_40px_-22px_rgba(0,0,0,0.6)]">
                    <div className="w-[64px] h-[64px] rounded-full bg-carmesi dark:bg-carmesi-200 text-ivory dark:text-ink grid place-items-center transition-colors duration-300">
                      <div className="text-center leading-none">
                        <div className="phase-num text-[28px] italic">{String(i + 1).padStart(2, '0')}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-ivory dark:bg-ink border border-ink/8 dark:border-ivory/8 rounded-2xl p-7 md:p-8 lift">
                  <div className="flex items-center justify-between">
                    <span className="eyebrow text-carmesi dark:text-carmesi-200">{p.tag}</span>
                    <span className="text-[12px] text-mist font-medium">{p.weeks}</span>
                  </div>
                  <h3 className="h-display text-[28px] md:text-[30px] mt-4 text-ink dark:text-ivory">{p.title}</h3>
                  <p className="text-ink/65 dark:text-ivory/65 text-[14.5px] mt-3 leading-relaxed">{p.body}</p>

                  <ul className="mt-6 space-y-2.5">
                    {p.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3 text-[14px] text-ink/80 dark:text-ivory/80">
                        <CheckIcon />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        <FadeIn delay={0.1}>
          <div className="mt-16 bg-ink text-ivory rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 relative overflow-hidden">
            <div className="absolute inset-0 dot-pattern-light opacity-30 pointer-events-none" />
            <div className="relative w-14 h-14 rounded-xl bg-carmesi/30 border border-carmesi/40 grid place-items-center shrink-0">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                <rect x="3" y="5" width="20" height="16" rx="2" stroke="#f9faf7" strokeWidth="1.5" />
                <path d="M3 10H23M8 14H14M8 17H17" stroke="#f9faf7" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <div className="relative flex-1">
              <div className="eyebrow" style={{ color: '#d49aa6' }}>
                Continuidad post-roadmap
              </div>
              <h4 className="h-display text-[24px] md:text-[28px] mt-2 leading-tight text-ivory">
                Scorecards mensuales para medir el avance del talento, mucho después del cierre del proyecto.
              </h4>
            </div>
            <a
              href="#hero-form"
              className="relative btn-primary px-6 py-3 rounded-full text-[13px] font-semibold tracking-wide whitespace-nowrap"
            >
              Ver detalle →
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
