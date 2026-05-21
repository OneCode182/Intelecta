import { FadeIn, StaggerGroup, StaggerItem } from './ui/Animations';
import Eyebrow from './ui/Eyebrow';

const PILLARS = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-carmesi dark:text-carmesi-200">
        <rect x="3" y="9" width="6" height="13" stroke="currentColor" strokeWidth="1.5" />
        <rect x="11" y="5" width="6" height="17" stroke="currentColor" strokeWidth="1.5" />
        <rect x="19" y="12" width="6" height="10" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    eyebrow: 'Segmento foco',
    title: 'Empresas en expansión',
    body: 'Diseñado para organizaciones de 50–500 empleados en tecnología, fintech, agencias creativas y manufactura especializada.',
    meta: '50 – 500 empleados',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-carmesi dark:text-carmesi-200">
        <path d="M14 3L24 8V14C24 19 19.5 23 14 25C8.5 23 4 19 4 14V8L14 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M10 14L13 17L18 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    eyebrow: 'Preservación',
    title: 'Capital intelectual blindado',
    body: 'Mitigamos riesgos operativos preservando el conocimiento, las relaciones y el criterio que ya viven dentro de su empresa.',
    meta: 'Mitigación de riesgo',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-carmesi dark:text-carmesi-200">
        <path d="M4 22L11 15L15 19L24 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 8H24V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    eyebrow: 'Impacto financiero',
    title: 'Ahorros medibles',
    body: 'Hasta $45.000 USD anuales al evitar la rotación de perfiles directivos. Tasa de retorno verificable trimestre a trimestre.',
    meta: '$45.000 USD / año',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-carmesi dark:text-carmesi-200">
        <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="14" cy="14" r="6" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="14" cy="14" r="1.7" fill="currentColor" />
      </svg>
    ),
    eyebrow: 'Método',
    title: 'Decisiones basadas en datos',
    body: 'Un roadmap de transformación construido sobre métricas y procesos —no en dinámicas superficiales ni recetas genéricas.',
    meta: 'Data + procesos',
  },
];

export default function Value() {
  return (
    <section className="py-24 md:py-32 relative dark:bg-ink">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-end mb-16">
          <div>
            <FadeIn blur={false}>
              <Eyebrow>Propuesta de valor</Eyebrow>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="h-display text-[40px] md:text-[52px] mt-5 text-ink dark:text-ivory text-balance leading-[1.05]">
                Cuatro pilares que <em className="italic font-normal text-carmesi dark:text-carmesi-200">cambian</em> la conversación con su
                comité directivo.
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <p className="text-[16px] md:text-[17px] text-ink/65 dark:text-ivory/65 leading-relaxed lg:pb-3">
              No vendemos talleres. Diseñamos infraestructura humana medible, alineada a su P&L, que vuelve a su
              organización resistente a la rotación y al ruido del mercado.
            </p>
          </FadeIn>
        </div>

        <StaggerGroup className="grid md:grid-cols-2 gap-px bg-ink/8 dark:bg-ivory/8 border border-ink/8 dark:border-ivory/8 rounded-3xl overflow-hidden">
          {PILLARS.map((p, i) => (
            <StaggerItem key={i} as="article" className="bg-ivory dark:bg-ink-800 p-9 md:p-10 lift relative">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-carmesi/8 dark:bg-carmesi-200/8 grid place-items-center">{p.icon}</div>
                <span className="eyebrow text-mist">{p.eyebrow}</span>
              </div>
              <h3 className="h-display text-[26px] md:text-[28px] mt-7 text-ink dark:text-ivory leading-tight">{p.title}</h3>
              <p className="text-ink/70 dark:text-ivory/70 text-[15px] mt-3 leading-relaxed">{p.body}</p>
              <div className="mt-6 pt-5 border-t border-ink/8 dark:border-ivory/8 flex items-center justify-between">
                <span className="text-[12px] text-carmesi dark:text-carmesi-200 font-semibold tracking-wide">{p.meta}</span>
                <span className="phase-num text-mist/40 text-[28px] leading-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
