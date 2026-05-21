import { FadeIn, Parallax } from './ui/Animations';
import Eyebrow from './ui/Eyebrow';
import HeroForm from './HeroForm';

function Stat({ num, label }) {
  return (
    <div>
      <div className="h-display text-[34px] text-ink dark:text-ivory num leading-none">{num}</div>
      <div className="text-[12px] text-mist mt-1.5 max-w-[20ch] leading-snug">{label}</div>
    </div>
  );
}

function Divider() {
  return <div className="hidden md:block h-10 w-px bg-ink/10 dark:bg-ivory/10" />;
}

export default function Hero() {
  return (
    <section id="top" className="relative pt-[110px] pb-20 md:pb-28 overflow-hidden dark:bg-ink">
      <Parallax speed={0.08} className="absolute top-[80px] right-[-60px] w-[440px] h-[260px] dot-pattern-ivory dark:dot-pattern-light opacity-90 dark:opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-carmesi to-transparent dark:via-carmesi-200/55 opacity-40" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-start">
        <div className="pt-4 lg:pt-10">
          <FadeIn delay={0.1} blur={false}>
            <Eyebrow>Consultoría · Retención · Cultura</Eyebrow>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="h-display text-[42px] sm:text-[54px] lg:text-[64px] mt-5 text-ink dark:text-ivory text-balance">
              Frenamos la <em className="italic font-normal text-carmesi dark:text-carmesi-200">rotación</em> de talento crítico y elevamos el{' '}
              <span className="relative inline-block">
                rendimiento
                <svg className="absolute -bottom-2 left-0 w-full text-carmesi dark:text-carmesi-200" viewBox="0 0 220 10" preserveAspectRatio="none" height="8">
                  <path d="M2 7 C 60 1, 160 1, 218 6" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                </svg>
              </span>{' '}
              de su equipo.
            </h1>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p className="mt-7 text-[17px] md:text-[18px] leading-relaxed text-ink/70 dark:text-ivory/70 max-w-[58ch]">
              Transformamos su organización en un entorno de alto rendimiento mediante un sistema probado de retención y
              cultura organizacional —donde el capital intelectual se preserva como el activo más valioso de su empresa.
            </p>
          </FadeIn>

          <FadeIn delay={0.45}>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Stat num="$45K" label="USD ahorro anual proyectado" />
              <Divider />
              <Stat num="12" label="semanas, plan completo" />
              <Divider />
              <Stat num="50–500" label="empleados, segmento foco" />
            </div>
          </FadeIn>

          <FadeIn delay={0.55}>
            <div className="mt-10 flex items-center gap-3 text-[12px] text-mist">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-carmesi dark:text-carmesi-200">
                <path d="M8 1L10 6L15 6L11 9L13 14L8 11L3 14L5 9L1 6L6 6Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
              </svg>
              <span>
                Metodología desarrollada con la{' '}
                <span className="text-ink/80 dark:text-ivory/80 font-semibold">Escuela Colombiana de Ingeniería Julio Garavito</span>
              </span>
            </div>
          </FadeIn>
        </div>

        <div className="relative">
          <Parallax speed={0.05} className="absolute -top-8 -right-8 w-[180px] h-[180px] dot-pattern-ivory dark:dot-pattern-light opacity-70 dark:opacity-30 rounded-2xl pointer-events-none hidden md:block" />
          <FadeIn delay={0.3} direction="right">
            <HeroForm />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
