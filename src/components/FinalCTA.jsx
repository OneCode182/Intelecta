import { FadeIn, Parallax } from './ui/Animations';
import Eyebrow from './ui/Eyebrow';

export default function FinalCTA() {
  return (
    <section className="relative">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="relative overflow-hidden bg-ink text-ivory rounded-[28px] p-10 md:p-16 lg:p-20 grain">
          <div className="absolute inset-0 dot-pattern-light opacity-40" />
          <Parallax speed={0.15} className="absolute -right-40 -top-40 w-[520px] h-[520px] rounded-full bg-carmesi/25 blur-3xl" />
          <Parallax speed={0.1} className="absolute -left-20 -bottom-32 w-[360px] h-[360px] rounded-full bg-carmesi/15 blur-3xl" />

          <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-10 items-end">
            <div>
              <FadeIn blur={false}>
                <Eyebrow dark>El siguiente paso</Eyebrow>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="h-display text-[42px] md:text-[64px] lg:text-[72px] mt-5 leading-[1.02] text-ivory text-balance">
                  Lo que cuesta{' '}
                  <em className="italic font-normal" style={{ color: '#e7b6c1' }}>
                    esperar
                  </em>{' '}
                  es siempre más caro que lo que cuesta{' '}
                  <span className="underline decoration-carmesi decoration-4 underline-offset-8">empezar</span>.
                </h2>
              </FadeIn>
              <FadeIn delay={0.25}>
                <p className="mt-7 text-mist text-[16px] md:text-[17px] leading-relaxed max-w-[55ch]">
                  Reserve una de las 6 sesiones trimestrales de diagnóstico ejecutivo. Identificaremos sus tres riesgos
                  de rotación más críticos en una sola sesión confidencial.
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={0.3} direction="right">
              <div className="flex flex-col items-start lg:items-end gap-5">
                <a
                  href="#hero-form"
                  className="btn-primary rounded-full px-8 md:px-10 py-5 md:py-6 text-[15px] md:text-[16px] font-semibold tracking-wide inline-flex items-center gap-3 text-ivory"
                >
                  Agendar Diagnóstico de Riesgos
                  <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <div className="text-[12px] text-mist max-w-[28ch] lg:text-right">
                  Sin costo · Sin compromiso
                  <br />
                  Sesión confidencial de 60 minutos
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
