import { FadeIn, StaggerGroup, StaggerItem } from './ui/Animations';
import Eyebrow from './ui/Eyebrow';

const PAINS = [
  {
    k: '01',
    t: 'Cuello de botella ejecutivo',
    d: 'Las decisiones críticas dependen de usted porque no hay un sistema que distribuya criterio en el equipo.',
  },
  {
    k: '02',
    t: 'Pérdida silenciosa de capital',
    d: 'Cada renuncia inesperada se lleva conocimiento, relaciones y entrenamiento que no figuran en ningún balance.',
  },
  {
    k: '03',
    t: 'Cultura reactiva',
    d: 'Apaga incendios en lugar de construir el entorno de alto rendimiento que el negocio necesita para escalar.',
  },
];

export default function Problem() {
  return (
    <section id="problema" className="bg-ink text-ivory relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern-light opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-carmesi/50 to-transparent" />

      <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <FadeIn blur={false}>
          <Eyebrow dark>Diagnóstico · El verdadero costo</Eyebrow>
        </FadeIn>

        <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-12 lg:gap-20 mt-6 items-end">
          <FadeIn>
            <h2 className="h-display text-[36px] md:text-[52px] lg:text-[58px] text-ivory text-balance leading-[1.05]">
              <span className="text-mist">¿Siente que pasa el</span>{' '}
              <span className="text-ivory num">80%</span>{' '}
              <span className="text-mist">de su tiempo resolviendo</span> conflictos internos{' '}
              <span className="text-mist">o buscando reemplazos para</span> gente clave
              <span className="text-carmesi dark:text-carmesi-200">?</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="text-mist text-[15px] md:text-[16px] leading-relaxed max-w-[40ch]">
              La rotación de un solo cargo directivo puede costarle entre{' '}
              <span className="text-ivory font-semibold">9 y 24 meses de salario</span>. Si no lo mide, lo paga.
            </p>
          </FadeIn>
        </div>

        <div className="rule-dark my-16" />

        <StaggerGroup className="grid md:grid-cols-3 gap-px bg-ivory/8">
          {PAINS.map((p) => (
            <StaggerItem key={p.k} className="bg-ink p-8 md:p-10 lift border border-transparent">
              <div className="flex items-baseline gap-4">
                <span className="phase-num text-carmesi dark:text-carmesi-200 text-[44px] leading-none">{p.k}</span>
                <div className="h-px flex-1 bg-ivory/15 translate-y-[-6px]" />
              </div>
              <h3 className="h-display text-[22px] md:text-[24px] mt-6 text-ivory leading-tight">{p.t}</h3>
              <p className="text-mist text-[14px] mt-3 leading-relaxed">{p.d}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
