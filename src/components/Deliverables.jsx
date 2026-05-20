import { FadeIn, StaggerGroup, StaggerItem } from './ui/Animations';
import Eyebrow from './ui/Eyebrow';

const ITEMS = [
  {
    tag: 'Dashboard',
    title: 'Dashboard de Toxicidad',
    body: 'Visualice el índice de engagement de su organización en tiempo real, con alertas tempranas por área y por líder.',
    viz: (
      <svg viewBox="0 0 220 110" className="w-full">
        <defs>
          <linearGradient id="d1" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#5b1e2d" stopOpacity="0.35" />
            <stop offset="1" stopColor="#5b1e2d" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 90 L20 80 L40 84 L60 60 L80 64 L100 40 L120 50 L140 28 L160 36 L180 18 L200 24 L220 14 L220 110 L0 110 Z"
          fill="url(#d1)"
        />
        <path
          d="M0 90 L20 80 L40 84 L60 60 L80 64 L100 40 L120 50 L140 28 L160 36 L180 18 L200 24 L220 14"
          stroke="#5b1e2d"
          strokeWidth="1.6"
          fill="none"
        />
        {[20, 60, 100, 140, 180].map((x, i) => (
          <circle key={i} cx={x} cy={[80, 60, 40, 28, 18][i]} r="2.5" fill="#5b1e2d" />
        ))}
      </svg>
    ),
  },
  {
    tag: 'Reporte',
    title: 'Reporte de Costos Ocultos',
    body: 'Sepa exactamente cuánto dinero pierde por cada renuncia: pérdidas indirectas, reposición, curva de aprendizaje y oportunidad.',
    viz: (
      <svg viewBox="0 0 220 110" className="w-full">
        <g>
          {[
            { x: 10, h: 42, l: 'Salida' },
            { x: 50, h: 58, l: 'Reemp.' },
            { x: 90, h: 36, l: 'Curva' },
            { x: 130, h: 74, l: 'Oport.' },
            { x: 170, h: 50, l: 'Cliente' },
          ].map((b, i) => (
            <g key={i}>
              <rect x={b.x} y={100 - b.h} width="32" height={b.h} fill={i === 3 ? '#5b1e2d' : '#5b1e2d33'} rx="2" />
            </g>
          ))}
          <line x1="0" y1="100" x2="220" y2="100" stroke="#11182722" strokeWidth="1" />
        </g>
      </svg>
    ),
  },
  {
    tag: 'Matriz',
    title: 'Matriz de Competencias',
    body: 'Mapa detallado de las habilidades críticas de su organización, mostrando concentraciones de riesgo y brechas de cobertura.',
    viz: (
      <svg viewBox="0 0 220 110" className="w-full">
        {Array.from({ length: 5 }).map((_, r) =>
          Array.from({ length: 9 }).map((_, c) => {
            const v = (Math.sin((r * 9 + c) * 0.7) + 1) / 2;
            return (
              <rect
                key={`${r}-${c}`}
                x={10 + c * 22}
                y={10 + r * 18}
                width="18"
                height="14"
                fill="#5b1e2d"
                opacity={0.12 + v * 0.55}
                rx="1.5"
              />
            );
          })
        )}
      </svg>
    ),
  },
  {
    tag: 'Manual',
    title: 'Manual de Rituales',
    body: 'Guía práctica para liderar reuniones efectivas, dar feedback continuo y cerrar ciclos de desempeño sin fricción.',
    viz: (
      <svg viewBox="0 0 220 110" className="w-full">
        <rect x="35" y="14" width="140" height="84" rx="3" fill="#fff" stroke="#11182722" />
        <rect x="35" y="14" width="140" height="14" fill="#5b1e2d" />
        {[40, 52, 64, 76, 88].map((y, i) => (
          <rect
            key={i}
            x="48"
            y={y - 5 + 3}
            width={i === 1 ? 70 : i === 3 ? 80 : 100}
            height="3"
            fill="#11182722"
            rx="1.5"
          />
        ))}
        <circle cx="155" cy="86" r="6" fill="none" stroke="#5b1e2d" strokeWidth="1.5" />
        <path d="M152 86l2 2 4-4" stroke="#5b1e2d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Deliverables() {
  return (
    <section id="entregables" className="py-24 md:py-32 relative">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <FadeIn blur={false}>
              <Eyebrow>Valor agregado · Entregables</Eyebrow>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="h-display text-[40px] md:text-[52px] mt-5 text-ink leading-[1.05] text-balance">
                Cuatro artefactos que <em className="italic font-normal text-carmesi">quedan</em>
                <br />
                en su organización.
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <p className="md:max-w-[34ch] text-ink/65 leading-relaxed">
              Cada uno es propiedad intelectual de su empresa al cierre del programa. No dependen de Intelecta para
              seguir produciendo valor.
            </p>
          </FadeIn>
        </div>

        <StaggerGroup className="grid md:grid-cols-2 gap-6">
          {ITEMS.map((it, i) => (
            <StaggerItem key={i} as="article" className="bg-ivory border border-ink/8 rounded-3xl p-7 md:p-9 lift">
              <div className="flex items-center justify-between">
                <span className="eyebrow text-carmesi">{it.tag}</span>
                <span className="phase-num text-mist/40 text-[24px]">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="h-display text-[26px] md:text-[28px] mt-4 text-ink leading-tight">{it.title}</h3>
              <p className="text-ink/65 text-[14.5px] mt-3 leading-relaxed">{it.body}</p>
              <div className="mt-7 rounded-xl bg-ivory-100 border border-ink/6 p-5">{it.viz}</div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
