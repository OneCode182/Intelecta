import { FadeIn, StaggerGroup, StaggerItem, Parallax } from './ui/Animations';
import Eyebrow from './ui/Eyebrow';

function BrandIcon({ className = '', variant = 'light' }) {
  const bar = variant === 'light' ? '#111827' : '#f9faf7';
  const arc = variant === 'light' ? '#5b1e2d' : (variant === 'dark' ? '#e7b6c1' : '#f9faf7');

  return (
    <svg viewBox="0 0 120 140" fill="none" className={className} aria-hidden="true">
      {/* Tall I bar */}
      <rect x="46" y="8" width="22" height="90" rx="1" fill={bar} />
      {/* Swoosh arc — starts bottom-left, wraps right and up */}
      <path
        d="M52 88 C 40 82, 28 68, 30 50 C 32 32, 44 18, 58 14 C 68 11, 80 14, 86 22"
        stroke={arc}
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
      {/* Arrow tip pointing up-right */}
      <path
        d="M80 10 L 90 20 L 78 24 Z"
        fill={arc}
      />
      {/* Text "Intelecta" */}
      <text
        x="60"
        y="125"
        textAnchor="middle"
        fontFamily="'Playfair Display', Georgia, serif"
        fontWeight="600"
        fontSize="20"
        letterSpacing="-0.5"
        fill={bar}
      >
        Intelec<tspan fill={arc}>ta</tspan>
      </text>
    </svg>
  );
}

function BrandMark({ className = '' }) {
  return (
    <svg viewBox="0 0 120 100" fill="none" className={className} aria-hidden="true">
      <rect x="46" y="8" width="22" height="84" rx="1" fill="currentColor" />
      <path
        d="M52 82 C 40 76, 28 62, 30 46 C 32 30, 44 16, 58 12 C 68 9, 80 12, 86 20"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M80 8 L 90 18 L 78 22 Z" fill="currentColor" />
    </svg>
  );
}

function OriginIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-carmesi dark:text-carmesi-200">
      <path d="M14 3L24 8V14C24 19 19.5 23 14 25C8.5 23 4 19 4 14V8L14 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M14 10V16M14 16L11 13M14 16L17 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MethodologyIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-carmesi dark:text-carmesi-200">
      <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 14H19M14 9V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="14" cy="14" r="4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function StrategyIllustration() {
  return (
    <svg viewBox="0 0 200 120" fill="none" className="w-full h-auto text-carmesi dark:text-carmesi-200">
      <rect x="15" y="70" width="22" height="40" rx="2" fill="currentColor" opacity="0.15" />
      <rect x="45" y="50" width="22" height="60" rx="2" fill="currentColor" opacity="0.25" />
      <rect x="75" y="60" width="22" height="50" rx="2" fill="currentColor" opacity="0.2" />
      <rect x="105" y="30" width="22" height="80" rx="2" fill="currentColor" opacity="0.35" />
      <rect x="135" y="15" width="22" height="95" rx="2" fill="currentColor" opacity="0.5" />
      <rect x="165" y="8" width="22" height="102" rx="2" fill="currentColor" />
      <path d="M20 65 L55 45 L85 55 L115 25 L145 10 L175 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4 3" opacity="0.6" />
      <circle cx="175" cy="5" r="4" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

function OrgIllustration() {
  return (
    <svg viewBox="0 0 200 120" fill="none" className="w-full h-auto text-carmesi dark:text-carmesi-200">
      <circle cx="100" cy="22" r="14" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.12" />
      <circle cx="100" cy="22" r="6" fill="currentColor" opacity="0.4" />
      <line x1="100" y1="36" x2="100" y2="50" stroke="currentColor" strokeWidth="1.5" />
      <line x1="50" y1="50" x2="150" y2="50" stroke="currentColor" strokeWidth="1.5" />
      <line x1="50" y1="50" x2="50" y2="62" stroke="currentColor" strokeWidth="1.5" />
      <line x1="100" y1="50" x2="100" y2="62" stroke="currentColor" strokeWidth="1.5" />
      <line x1="150" y1="50" x2="150" y2="62" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="50" cy="74" r="12" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.08" />
      <circle cx="50" cy="74" r="5" fill="currentColor" opacity="0.3" />
      <circle cx="100" cy="74" r="12" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.08" />
      <circle cx="100" cy="74" r="5" fill="currentColor" opacity="0.3" />
      <circle cx="150" cy="74" r="12" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.08" />
      <circle cx="150" cy="74" r="5" fill="currentColor" opacity="0.3" />
      <line x1="30" y1="95" x2="70" y2="95" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <line x1="50" y1="86" x2="50" y2="95" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      {[30, 50, 70].map((x) => (
        <circle key={x} cx={x} cy="102" r="5" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.06" />
      ))}
      <line x1="80" y1="95" x2="120" y2="95" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <line x1="100" y1="86" x2="100" y2="95" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      {[80, 100, 120].map((x) => (
        <circle key={x} cx={x} cy="102" r="5" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.06" />
      ))}
      <line x1="130" y1="95" x2="170" y2="95" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <line x1="150" y1="86" x2="150" y2="95" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      {[130, 150, 170].map((x) => (
        <circle key={x} cx={x} cy="102" r="5" stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.06" />
      ))}
    </svg>
  );
}

export default function AboutUs({ theme }) {
  return (
    <section id="nosotros" className="py-24 md:py-32 relative overflow-hidden dark:bg-ink">
      {/* Decorative brand mark watermark */}
      <Parallax
        speed={0.08}
        className="absolute -right-16 top-32 w-[320px] md:w-[400px] h-[340px] md:h-[420px] text-carmesi/[0.04] dark:text-carmesi-200/[0.02] pointer-events-none hidden md:block"
      >
        <BrandMark className="w-full h-full" />
      </Parallax>

      <Parallax
        speed={0.12}
        className="absolute -left-12 bottom-40 w-[200px] h-[200px] dot-pattern-ivory dark:dot-pattern-light opacity-60 dark:opacity-20 pointer-events-none hidden lg:block"
      />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* ── Header ── */}
        <FadeIn blur={false}>
          <Eyebrow>Quiénes somos</Eyebrow>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="h-display text-[40px] md:text-[52px] mt-5 text-ink dark:text-ivory leading-[1.05] text-balance max-w-[20ch]">
            Sobre <em className="italic font-normal text-carmesi dark:text-carmesi-200">nosotros</em>
          </h2>
        </FadeIn>

        {/* ── Narrative ── */}
        <div className="mt-14 grid lg:grid-cols-2 gap-10 lg:gap-16">
          <FadeIn delay={0.15}>
            <div className="relative">
              <div className="w-14 h-14 rounded-xl bg-carmesi/8 dark:bg-carmesi-200/8 grid place-items-center mb-6">
                <OriginIcon />
              </div>
              <p className="text-[16px] md:text-[17px] text-ink/75 dark:text-ivory/75 leading-relaxed">
                Nacimos al ver una realidad crítica en el mercado colombiano: empresas con gran potencial pero atrapadas
                en el caos operativo, donde los gerentes actúan como{' '}
                <span className="text-ink dark:text-ivory font-semibold">"bomberos"</span> en lugar de estrategas, y el conocimiento
                clave se va con la competencia.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="relative">
              <div className="w-14 h-14 rounded-xl bg-carmesi/8 dark:bg-carmesi-200/8 grid place-items-center mb-6">
                <MethodologyIcon />
              </div>
              <p className="text-[16px] md:text-[17px] text-ink/75 dark:text-ivory/75 leading-relaxed">
                Existimos para cambiar los manuales archivados por sistemas autónomos. Creamos una{' '}
                <span className="text-ink dark:text-ivory font-semibold">metodología técnica</span> que detiene la fuga de talento,
                protege la inteligencia de tu negocio y asegura los márgenes de utilidad para devolverle la libertad al
                líder.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* ── Brand icon showcase ── */}
        <FadeIn delay={0.1}>
          <div className="mt-16 flex justify-center">
            <div className="relative">
              <div className="w-[140px] h-[160px] md:w-[180px] md:h-[200px]">
                <BrandIcon variant={theme === 'dark' ? 'dark' : 'light'} className="w-full h-full drop-shadow-[0_8px_30px_rgba(91,30,45,0.15)] dark:drop-shadow-[0_8px_30px_rgba(0,0,0,0.5)]" />
              </div>
              <div className="absolute -inset-8 rounded-full bg-carmesi/[0.04] dark:bg-carmesi-200/[0.02] blur-2xl -z-10" />
            </div>
          </div>
        </FadeIn>

        {/* ── Team banner (dark accent) ── */}
        <FadeIn delay={0.1}>
          <div className="mt-20 bg-ink dark:bg-ink-800 text-ivory rounded-3xl p-10 md:p-14 relative overflow-hidden transition-all duration-300 dark:ring-1 dark:ring-inset dark:ring-ivory/10 dark:shadow-[0_30px_80px_-40px_rgba(0,0,0,0.4)]">
            <div className="absolute inset-0 dot-pattern-light opacity-30 pointer-events-none" />
            <div className="absolute -right-10 -bottom-10 w-[200px] h-[210px] text-ivory/[0.04] pointer-events-none">
              <BrandMark className="w-full h-full" />
            </div>
            <div className="absolute -left-20 -top-20 w-[300px] h-[300px] rounded-full bg-carmesi/20 blur-3xl pointer-events-none" />

            <div className="relative text-center max-w-[680px] mx-auto">
              <Eyebrow dark>
                <span>Liderazgo y Equipo</span>
              </Eyebrow>
              <h3 className="h-display text-[28px] md:text-[36px] mt-5 text-ivory leading-tight">
                Detrás de esta metodología hay un equipo{' '}
                <em className="italic font-normal" style={{ color: '#e7b6c1' }}>
                  multidisciplinario
                </em>
              </h3>
              <p className="mt-4 text-mist text-[15px] md:text-[16px] leading-relaxed">
                Experto en ingeniería de procesos y gestión del talento, liderado por sus fundadoras:
              </p>
            </div>
          </div>
        </FadeIn>

        {/* ── Founder cards ── */}
        <StaggerGroup className="grid md:grid-cols-2 gap-6 -mt-1 relative z-10 max-w-[1080px] mx-auto">
          {/* Camila */}
          <StaggerItem className="bg-ivory dark:bg-ink border border-ink/8 dark:border-ivory/8 rounded-3xl overflow-hidden lift relative">
            <div className="absolute -top-8 -right-8 w-[140px] h-[148px] text-carmesi/[0.04] dark:text-carmesi-200/[0.02] pointer-events-none z-10">
              <BrandMark className="w-full h-full" />
            </div>

            {/* Photo — horizontal crop */}
            <div className="relative h-[300px] md:h-[360px] overflow-hidden">
              <img
                src="/img/camila.png"
                alt="Camila Soriano"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ivory dark:from-ink via-ivory/20 dark:via-ink/20 to-transparent" />
            </div>

            <div className="p-8 md:p-10 -mt-8 relative">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-ink to-ink-700 text-ivory grid place-items-center shadow-[0_8px_24px_-8px_rgba(17,24,39,0.5)] dark:shadow-none ring-4 ring-ivory dark:ring-ink shrink-0">
                  <span className="h-display text-[20px] italic">CS</span>
                </div>
                <div>
                  <div className="h-display text-[22px] text-ink dark:text-ivory">Camila Soriano</div>
                  <div className="eyebrow text-carmesi dark:text-carmesi-200 mt-1" style={{ fontSize: '10px' }}>
                    Desarrollo Organizacional
                  </div>
                </div>
              </div>

              <p className="text-ink/70 dark:text-ivory/70 text-[15px] leading-relaxed mb-6">
                Experta en liderazgo moderno y en crear estructuras autónomas.
              </p>

              <div className="rounded-xl bg-ivory-100 dark:bg-ink-800 border border-ink/6 dark:border-ivory/6 p-4 transition-colors duration-300">
                <OrgIllustration />
              </div>
            </div>
          </StaggerItem>

          {/* Mariana */}
          <StaggerItem className="bg-ivory dark:bg-ink border border-ink/8 dark:border-ivory/8 rounded-3xl overflow-hidden lift relative">
            <div className="absolute -top-8 -right-8 w-[140px] h-[148px] text-carmesi/[0.04] dark:text-carmesi-200/[0.02] pointer-events-none z-10">
              <BrandMark className="w-full h-full" />
            </div>

            {/* Photo — vertical crop */}
            <div className="relative h-[300px] md:h-[360px] overflow-hidden">
              <img
                src="/img/mariana.png"
                alt="Mariana Pineda"
                className="w-full h-full object-cover object-[center_20%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ivory dark:from-ink via-ivory/20 dark:via-ink/20 to-transparent" />
            </div>

            <div className="p-8 md:p-10 -mt-8 relative">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-carmesi to-carmesi-800 text-ivory grid place-items-center shadow-[0_8px_24px_-8px_rgba(91,30,45,0.5)] dark:shadow-none ring-4 ring-ivory dark:ring-ink shrink-0">
                  <span className="h-display text-[20px] italic">MP</span>
                </div>
                <div>
                  <div className="h-display text-[22px] text-ink dark:text-ivory">Mariana Pineda</div>
                  <div className="eyebrow text-carmesi dark:text-carmesi-200 mt-1" style={{ fontSize: '10px' }}>
                    Estrategia de Negocio
                  </div>
                </div>
              </div>

              <p className="text-ink/70 dark:text-ivory/70 text-[15px] leading-relaxed mb-6">
                Especialista en eliminar fugas de rendimiento y potenciar la rentabilidad.
              </p>

              <div className="rounded-xl bg-ivory-100 dark:bg-ink-800 border border-ink/6 dark:border-ivory/6 p-4 transition-colors duration-300">
                <StrategyIllustration />
              </div>
            </div>
          </StaggerItem>
        </StaggerGroup>

        {/* ── Closing + CTA ── */}
        <FadeIn delay={0.1}>
          <div className="mt-16 text-center">
            <p className="h-display font-normal italic text-[20px] md:text-[24px] text-ink/70 dark:text-ivory/70 leading-relaxed max-w-[48ch] mx-auto">
              Somos las aliadas operativas que tu empresa necesita para crecer con orden.
            </p>
            <a
              href="#hero-form"
              className="btn-primary rounded-full px-8 md:px-10 py-4 md:py-5 text-[14px] md:text-[15px] font-semibold tracking-wide inline-flex items-center gap-3 mt-10"
            >
              Agendar mi Diagnóstico Estratégico
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
