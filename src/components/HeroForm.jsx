import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Eyebrow from './ui/Eyebrow';
import Field from './ui/Field';

export default function HeroForm() {
  const [form, setForm] = useState({ name: '', role: '', email: '' });
  const [err, setErr] = useState({});
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (!form.name.trim()) er.name = 'Ingrese su nombre';
    if (!form.role.trim()) er.role = 'Ingrese su cargo';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) er.email = 'Correo empresarial inválido';
    setErr(er);
    if (Object.keys(er).length === 0) setSent(true);
  };

  return (
    <AnimatePresence mode="wait">
      {sent ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(8px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white dark:bg-ink-800 border border-ink/10 dark:border-ivory/10 rounded-2xl p-8 md:p-9 shadow-[0_30px_80px_-40px_rgba(17,24,39,0.25)] dark:shadow-[0_30px_80px_-40px_rgba(0,0,0,0.4)]"
        >
          <Eyebrow>Solicitud recibida</Eyebrow>
          <h3 className="h-display text-[28px] mt-3 text-ink dark:text-ivory">Gracias, {form.name.split(' ')[0]}.</h3>
          <p className="text-ink/70 dark:text-ivory/70 mt-2 leading-relaxed">
            Un consultor senior se pondrá en contacto en menos de 24 horas hábiles para coordinar su{' '}
            <span className="text-carmesi dark:text-carmesi-200 font-semibold">Diagnóstico de Riesgos</span>.
          </p>
          <div className="rule my-6" />
          <div className="text-sm text-mist">
            Mientras tanto, conozca cómo trabajamos en{' '}
            <a href="#metodo" className="text-carmesi dark:text-carmesi-200 font-semibold hover:underline">
              nuestro método de 12 semanas →
            </a>
          </div>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          exit={{ opacity: 0, scale: 0.95, filter: 'blur(8px)' }}
          transition={{ duration: 0.3 }}
          onSubmit={submit}
          id="hero-form"
          className="bg-white dark:bg-ink-800 border border-ink/10 dark:border-ivory/10 rounded-2xl p-7 md:p-8 shadow-[0_30px_80px_-40px_rgba(17,24,39,0.25)] dark:shadow-[0_30px_80px_-40px_rgba(0,0,0,0.4)] relative"
        >
          <div className="absolute -top-3 left-7 bg-carmesi dark:bg-carmesi-200 text-ivory dark:text-ink eyebrow px-3 py-1.5 rounded-full transition-colors duration-300">
            Diagnóstico sin costo
          </div>
          <h3 className="h-display text-[26px] md:text-[28px] text-ink dark:text-ivory leading-tight">
            Agende su <em className="font-normal italic text-carmesi dark:text-carmesi-200">diagnóstico</em> ejecutivo
          </h3>
          <p className="text-sm text-ink/60 dark:text-ivory/60 mt-2 mb-6 leading-relaxed">
            Reservamos sólo 6 sesiones por trimestre. Confidencialidad garantizada.
          </p>

          <div className="space-y-4">
            <Field label="Nombre completo" value={form.name} onChange={set('name')} placeholder="María Fernanda López" err={err.name} />
            <Field label="Cargo en la empresa" value={form.role} onChange={set('role')} placeholder="Director / CEO / Head of People" err={err.role} />
            <Field label="Correo empresarial" value={form.email} onChange={set('email')} type="email" placeholder="nombre@empresa.com" err={err.email} />
          </div>

          <button
            type="submit"
            className="btn-primary w-full mt-6 rounded-xl py-4 text-[14px] font-semibold tracking-wide inline-flex items-center justify-center gap-2"
          >
            Agendar Diagnóstico de Riesgos
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <p className="text-[11px] text-mist text-center mt-4 leading-relaxed">
            Al enviar acepta nuestra política de confidencialidad. No compartimos datos con terceros.
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
