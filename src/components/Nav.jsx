import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './ui/Logo';

const NAV_LINKS = [
  ['#problema', 'El problema'],
  ['#metodo', 'Método'],
  ['#entregables', 'Entregables'],
  ['#prueba', 'Resultados'],
  ['#nosotros', 'Nosotros'],
  ['#faq', 'Preguntas'],
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [openM, setOpenM] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ivory/85 glass-nav border-b border-ink/5 shadow-[0_1px_20px_-6px_rgba(17,24,39,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 h-[76px] flex items-center justify-between">
        <a href="#top" className="flex items-center">
          <Logo size={26} withTagline />
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map(([href, label]) => (
            <a key={href} href={href} className="text-sm text-ink/75 hover:text-carmesi btn-ghost relative group">
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-carmesi transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#hero-form"
            className="hidden md:inline-flex btn-primary rounded-full px-5 py-2.5 text-[13px] font-semibold tracking-wide"
          >
            Agendar Diagnóstico
          </a>
          <button
            onClick={() => setOpenM((o) => !o)}
            className="lg:hidden w-10 h-10 grid place-items-center rounded-full border border-ink/15"
          >
            <span className="block w-4 h-px bg-ink mb-1.5" />
            <span className="block w-4 h-px bg-ink" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {openM && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-ivory border-t border-ink/10 overflow-hidden"
          >
            <div className="px-6 py-5">
              {NAV_LINKS.map(([href, label]) => (
                <a key={href} href={href} onClick={() => setOpenM(false)} className="block py-2 text-ink/80">
                  {label}
                </a>
              ))}
              <a
                href="#hero-form"
                onClick={() => setOpenM(false)}
                className="mt-3 inline-flex btn-primary rounded-full px-5 py-2.5 text-sm"
              >
                Agendar Diagnóstico
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
