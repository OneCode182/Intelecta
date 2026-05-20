import { FadeIn, StaggerGroup, StaggerItem } from './ui/Animations';
import Eyebrow from './ui/Eyebrow';

const QA = [
  {
    q: '¿Tiempo de implementación?',
    a: 'El Roadmap de Transformación está diseñado para ejecutarse en un plan de acción de 90 días, donde se establecen dueños de procesos, métricas e instalan rituales de feedback con cadencia semanal y mensual.',
  },
  {
    q: '¿Cuánto tarda el servicio completo?',
    a: 'El proceso completo tiene una duración de 12 semanas, divididas en tres etapas: Diagnóstico (4 semanas), Arquitectura (3 semanas) y Roadmap (5 semanas). Posterior a ello, scorecards mensuales mantienen el seguimiento.',
  },
  {
    q: '¿Funciona en mi territorio?',
    a: 'Nuestra operación inicial es en Bogotá, Colombia, con total capacidad de expansión a ciudades con alta densidad de hubs tecnológicos, parques industriales y distritos financieros. Trabajamos en formato híbrido o remoto cuando se requiere.',
  },
  {
    q: '¿Cuánto cuesta el programa?',
    a: 'La inversión oscila entre los $12.000 y $18.000 USD dependiendo de la problemática específica diagnosticada y de los servicios especializados requeridos por su organización. El diagnóstico inicial no tiene costo.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 relative">
      <div className="max-w-[1080px] mx-auto px-6 md:px-10">
        <div className="text-center max-w-[640px] mx-auto">
          <FadeIn blur={false}>
            <Eyebrow className="justify-center">
              <span>Preguntas frecuentes</span>
            </Eyebrow>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="h-display text-[40px] md:text-[52px] mt-5 text-ink leading-[1.05] text-balance">
              Las dudas más comunes <em className="italic font-normal text-carmesi">del comité</em> directivo.
            </h2>
          </FadeIn>
        </div>

        <StaggerGroup className="mt-14 divide-y divide-ink/10 border-y border-ink/10">
          {QA.map((it, i) => (
            <StaggerItem key={i}>
              <details className="group py-2">
                <summary className="flex items-start justify-between gap-6 py-6 md:py-7">
                  <div className="flex items-start gap-5 md:gap-7">
                    <span className="phase-num text-carmesi text-[20px] md:text-[24px] num pt-0.5">
                      0{i + 1}
                    </span>
                    <h3 className="h-display text-[22px] md:text-[26px] text-ink leading-snug">{it.q}</h3>
                  </div>
                  <span className="acc-icon w-10 h-10 rounded-full border border-ink/15 grid place-items-center text-carmesi shrink-0 group-hover:border-carmesi/40 transition">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <div className="acc-body pl-0 md:pl-14 pb-7 pr-14">
                  <p className="text-ink/70 text-[15.5px] leading-relaxed max-w-[68ch]">{it.a}</p>
                </div>
              </details>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
