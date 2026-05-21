import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import Logo from './ui/Logo';

const NAV_LINKS = [
  ['#problema', 'El problema'],
  ['#metodo', 'Método'],
  ['#entregables', 'Entregables'],
  ['#prueba', 'Resultados'],
  ['#nosotros', 'Nosotros'],
  ['#faq', 'Preguntas'],
];

export default function Nav({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [openM, setOpenM] = useState(false);
  const { scrollYProgress } = useScroll();
  const scrollScale = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 });

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
          ? 'bg-ivory/85 dark:bg-ink/85 glass-nav border-b border-ink/5 dark:border-ivory/5 shadow-[0_1px_20px_-6px_rgba(17,24,39,0.08)] dark:shadow-[0_1px_20px_-6px_rgba(249,250,247,0.04)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 h-[76px] flex items-center justify-between">
        <a href="#top" className="flex items-center">
          <Logo dark={theme === 'dark'} size={26} withTagline />
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map(([href, label]) => (
            <a key={href} href={href} className="text-sm text-ink/75 dark:text-ivory/75 hover:text-carmesi dark:hover:text-carmesi-200 btn-ghost relative group transition-colors duration-200">
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-carmesi dark:bg-carmesi-200 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle w-10 h-10 grid place-items-center rounded-full border border-ink/15 dark:border-ivory/15 text-ink dark:text-ivory hover:bg-ink/5 dark:hover:bg-ivory/5 transition duration-200"
            aria-label={theme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema nocturno'}
            aria-pressed={theme === 'dark'}
          >
            {theme === 'dark' ? (
              // Sun icon
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="18.36" x2="5.64" y2="16.93" />
                <line x1="18.36" y1="4.22" x2="19.78" y2="5.64" />
              </svg>
            ) : (
              // Moon icon
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <a
            href="#hero-form"
            className="hidden md:inline-flex btn-primary rounded-full px-5 py-2.5 text-[13px] font-semibold tracking-wide"
          >
            Agendar Diagnóstico
          </a>
          <button
            onClick={() => setOpenM((o) => !o)}
            className="lg:hidden w-10 h-10 grid place-items-center rounded-full border border-ink/15 dark:border-ivory/15"
          >
            <span className="block w-4 h-px bg-ink dark:bg-ivory mb-1.5" />
            <span className="block w-4 h-px bg-ink dark:bg-ivory" />
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
            className="lg:hidden bg-ivory dark:bg-ink border-t border-ink/10 dark:border-ivory/10 overflow-hidden"
          >
            <div className="px-6 py-5">
              {NAV_LINKS.map(([href, label]) => (
                <a key={href} href={href} onClick={() => setOpenM(false)} className="block py-2 text-ink/80 dark:text-ivory/80 hover:text-carmesi dark:hover:text-carmesi-200">
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
      <motion.div
        aria-hidden="true"
        style={{ scaleX: scrollScale }}
        className="absolute left-0 bottom-0 h-[2px] w-full origin-left bg-gradient-to-r from-transparent via-carmesi to-transparent dark:via-carmesi-200"
      />
    </motion.header>
  );
}
