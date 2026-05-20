import { FadeIn, StaggerGroup, StaggerItem } from './ui/Animations';
import Eyebrow from './ui/Eyebrow';

function Mini({ num, label, dark }) {
  return (
    <div>
      <div className={`h-display text-[32px] num leading-none ${dark ? 'text-ivory' : 'text-ink'}`}>{num}</div>
      <div className={`text-[12px] mt-1.5 max-w-[18ch] leading-snug ${dark ? 'text-mist' : 'text-ink/60'}`}>
        {label}
      </div>
    </div>
  );
}

function onMove(e) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty('--mx', e.clientX - r.left + 'px');
  el.style.setProperty('--my', e.clientY - r.top + 'px');
}

export default function Bento() {
  return (
    <section id="prueba" className="py-24 md:py-32 bg-ivory-100 relative">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <FadeIn blur={false}>
          <Eyebrow>Resultados &amp; respaldo</Eyebrow>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="h-display text-[40px] md:text-[52px] mt-5 text-ink leading-[1.05] text-balance max-w-[24ch]">
            Lo que sostiene la <em className="italic font-normal text-carmesi">credibilidad</em> de Intelecta.
          </h2>
        </FadeIn>

        <StaggerGroup className="mt-14 grid md:grid-cols-12 gap-5">
          {/* Big saving block */}
          <StaggerItem
            onMouseMove={onMove}
            className="bento md:col-span-8 bg-ink text-ivory rounded-3xl p-10 md:p-12 relative overflow-hidden"
          >
            <div className="absolute -right-20 -bottom-32 w-[460px] h-[460px] rounded-full bg-carmesi/30 blur-3xl animate-pulse-glow" />
            <div className="absolute top-6 right-6 dot-pattern-light w-[240px] h-[120px] opacity-50 rounded-lg" />
            <Eyebrow dark>Ahorro operativo verificable</Eyebrow>
            <div className="mt-8 flex items-baseline gap-3 num">
              <span className="h-display text-[80px] md:text-[120px] text-ivory leading-none">$45K</span>
              <span className="text-mist text-[16px]">USD / año</span>
            </div>
            <p className="mt-6 text-[18px] md:text-[20px] text-ivory/85 leading-relaxed max-w-[55ch] h-display font-normal italic">
              "Nuestra metodología puede representar un ahorro directo de hasta{' '}
              <span className="not-italic font-semibold text-ivory">$45.000 USD anuales</span> al prevenir la rotación
              de sólo <span className="not-italic font-semibold text-ivory">3 cargos directivos</span>."
            </p>
            <div className="rule-dark my-8" />
            <div className="grid grid-cols-3 gap-6">
              <Mini num="3×" label="cargos directivos retenidos" dark />
              <Mini num="12w" label="duración del programa" dark />
              <Mini num="90d" label="plan de acción" dark />
            </div>
          </StaggerItem>

          {/* Endorsement */}
          <StaggerItem
            onMouseMove={onMove}
            className="bento md:col-span-4 bg-ivory border border-ink/10 rounded-3xl p-9 md:p-10 relative overflow-hidden flex flex-col"
          >
            <div className="absolute -top-10 -right-10 w-[200px] h-[200px] dot-pattern-ivory opacity-70" />
            <Eyebrow>Aval académico</Eyebrow>
            <h3 className="h-display text-[24px] md:text-[26px] mt-5 text-ink leading-tight">
              Consultoría desarrollada bajo los estándares de{' '}
              <span className="text-carmesi">INTELECTA · Marketing Digital</span> y la{' '}
              <span className="text-carmesi">Escuela Colombiana de Ingeniería Julio Garavito</span>.
            </h3>
            <div className="mt-auto pt-8">
              <div className="rule mb-6" />
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl border border-ink/15 bg-ivory-100 grid place-items-center">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M11 2L20 6L11 10L2 6L11 2Z" stroke="#5b1e2d" strokeWidth="1.5" strokeLinejoin="round" />
                    <path
                      d="M5 8V13C5 13 7.5 16 11 16C14.5 16 17 13 17 13V8"
                      stroke="#5b1e2d"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path d="M20 6V12" stroke="#5b1e2d" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="text-[12px] text-mist leading-tight">
                  Programa con respaldo
                  <br />
                  académico e industrial
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* Metric tiles */}
          <StaggerItem
            onMouseMove={onMove}
            className="bento md:col-span-4 bg-carmesi text-ivory rounded-3xl p-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 dot-pattern-light opacity-25" />
            <Eyebrow dark>Segmento</Eyebrow>
            <div className="h-display text-[48px] md:text-[56px] num mt-4">50–500</div>
            <p className="text-ivory/80 text-[14px] mt-1">
              empleados en empresas de tecnología, fintech, agencias y manufactura especializada.
            </p>
          </StaggerItem>

          <StaggerItem onMouseMove={onMove} className="bento md:col-span-4 bg-ivory border border-ink/10 rounded-3xl p-8">
            <Eyebrow>Inversión</Eyebrow>
            <div className="h-display text-[48px] md:text-[56px] num mt-4 text-ink">$12–18K</div>
            <p className="text-ink/70 text-[14px] mt-1">
              USD según problemática y servicios especializados requeridos.
            </p>
          </StaggerItem>

          <StaggerItem
            onMouseMove={onMove}
            className="bento md:col-span-4 bg-ink text-ivory rounded-3xl p-8 relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 dot-pattern-light w-[200px] h-[200px] opacity-30" />
            <Eyebrow dark>Cobertura</Eyebrow>
            <div className="h-display text-[42px] md:text-[48px] mt-4 leading-tight">
              Bogotá,{' '}
              <em className="italic" style={{ color: '#e7b6c1' }}>
                Colombia
              </em>
            </div>
            <p className="text-mist text-[14px] mt-2">
              Con expansión a hubs tecnológicos, parques industriales y distritos financieros.
            </p>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  );
}
