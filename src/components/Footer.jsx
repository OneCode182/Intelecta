import { FadeIn } from './ui/Animations';
import Logo from './ui/Logo';

function FooterCol({ title, items }) {
  return (
    <div>
      <div className="eyebrow text-ivory/70">{title}</div>
      <ul className="mt-5 space-y-3">
        {items.map((it, i) => (
          <li key={i}>
            <a href="#" className="text-[14px] text-mist hover:text-ivory transition">
              {it}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory border-t border-ivory/8">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-16">
        <FadeIn>
          <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 md:gap-14">
            <div>
              <Logo dark size={28} withTagline />
              <p className="mt-5 text-mist text-[14px] leading-relaxed max-w-[40ch]">
                Consultoría en retención de talento crítico, seguridad psicológica y cultura de alto rendimiento para
                empresas en expansión.
              </p>
            </div>
            <FooterCol
              title="Servicios"
              items={['Diagnóstico de Riesgos', 'Arquitectura organizacional', 'Roadmap 90 días', 'Scorecards mensuales']}
            />
            <FooterCol
              title="Compañía"
              items={['El método', 'Casos de uso', 'Manual de marca', 'Privacidad']}
            />
            <FooterCol
              title="Contacto"
              items={['hola@intelecta.co', '+57 (1) 000 0000', 'Bogotá, Colombia']}
            />
          </div>
        </FadeIn>

        <div className="rule-dark my-12" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-[12px] text-mist">
            © 2026 Intelecta Business Consulting · Todos los derechos reservados.
          </div>
          <div className="text-[12px] text-mist flex gap-6">
            <a href="#" className="hover:text-ivory">Términos</a>
            <a href="#" className="hover:text-ivory">Privacidad</a>
            <a href="#" className="hover:text-ivory">Aviso legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
