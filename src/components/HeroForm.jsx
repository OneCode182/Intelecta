import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Eyebrow from './ui/Eyebrow';
import Field from './ui/Field';

const AUTO_CLOSE_SECONDS = 14;

export default function HeroForm() {
  const [form, setForm] = useState({ name: '', role: '', email: '' });
  const [err, setErr] = useState({});
  const [success, setSuccess] = useState(null);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const closeSuccess = () => setSuccess(null);

  useEffect(() => {
    if (!success) return undefined;

    document.body.classList.add('success-modal-open');
    const timer = window.setTimeout(closeSuccess, AUTO_CLOSE_SECONDS * 1000);
    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeSuccess();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.classList.remove('success-modal-open');
      window.clearTimeout(timer);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [success]);

  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (!form.name.trim()) er.name = 'Ingrese su nombre';
    if (!form.role.trim()) er.role = 'Ingrese su cargo';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) er.email = 'Correo empresarial inválido';
    setErr(er);
    if (Object.keys(er).length === 0) {
      const firstName = form.name.trim().split(/\s+/)[0];
      setSuccess({ firstName, email: form.email.trim() });
      setForm({ name: '', role: '', email: '' });
    }
  };

  return (
    <>
      <motion.form
        key="form"
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

      {createPortal(
        <AnimatePresence>
          {success && (
          <motion.div
            className="fixed inset-0 z-[999] flex min-h-screen items-center justify-center px-5 py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            role="presentation"
          >
            <motion.div
              className="success-alert-backdrop absolute inset-0 bg-ivory/68 dark:bg-ink/68"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeSuccess}
            />
            <motion.div
              role="alertdialog"
              aria-modal="true"
              aria-labelledby="success-title"
              aria-describedby="success-description"
              className="success-alert relative w-full max-w-[560px] overflow-hidden rounded-[24px] bg-white dark:bg-ink-800 p-[1px] shadow-[0_40px_120px_-48px_rgba(17,24,39,0.65)] dark:shadow-[0_40px_120px_-48px_rgba(0,0,0,0.9)]"
              initial={{ opacity: 0, y: 26, scale: 0.94, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: 16, scale: 0.96, filter: 'blur(8px)' }}
              transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                aria-hidden="true"
                className="success-alert-progress absolute inset-0 rounded-[24px]"
                initial={{ '--progress': '0deg' }}
                animate={{ '--progress': '360deg' }}
                transition={{ duration: AUTO_CLOSE_SECONDS, ease: 'linear' }}
              />

              <div className="relative m-[2px] overflow-hidden rounded-[22px] bg-white dark:bg-ink-800 p-7 md:p-9">
                <div className="absolute inset-0 dot-pattern-ivory dark:dot-pattern-light opacity-45 dark:opacity-15" />
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-carmesi/10 dark:bg-carmesi-200/10 blur-3xl" />
                <div className="absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-ink/5 dark:bg-ivory/5 blur-2xl" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex items-center gap-4">
                      <div className="success-icon relative grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-carmesi text-ivory dark:bg-carmesi-200 dark:text-ink shadow-[0_20px_42px_-22px_rgba(91,30,45,0.8)]">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
                          <path d="M7 15.5L12.2 20.6L23 9.8" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div>
                        <Eyebrow>Solicitud recibida</Eyebrow>
                        <h3 id="success-title" className="h-display mt-2 text-[30px] md:text-[34px] leading-tight text-ink dark:text-ivory">
                          Gracias, {success.firstName}.
                        </h3>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={closeSuccess}
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-ink/10 text-ink/55 transition hover:border-carmesi/30 hover:text-carmesi dark:border-ivory/10 dark:text-ivory/60 dark:hover:border-carmesi-200/40 dark:hover:text-carmesi-200"
                      aria-label="Cerrar confirmación"
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M2 2L12 12M12 2L2 12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                      </svg>
                    </button>
                  </div>

                  <p id="success-description" className="mt-6 text-[16px] leading-relaxed text-ink/72 dark:text-ivory/72">
                    Un consultor senior revisará la información y se pondrá en contacto en menos de{' '}
                    <span className="font-semibold text-ink dark:text-ivory">24 horas hábiles</span> para coordinar su{' '}
                    <span className="font-semibold text-carmesi dark:text-carmesi-200">Diagnóstico de Riesgos</span>.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {[
                      ['01', 'Validación', 'Datos recibidos'],
                      ['02', 'Agenda', 'Contacto prioritario'],
                      ['03', 'Diagnóstico', 'Sesión ejecutiva'],
                    ].map(([num, title, body]) => (
                      <div key={num} className="rounded-2xl border border-ink/8 bg-ivory-100/80 p-4 dark:border-ivory/8 dark:bg-ink/70">
                        <div className="phase-num text-[24px] leading-none text-carmesi dark:text-carmesi-200">{num}</div>
                        <div className="mt-3 text-[12px] font-semibold text-ink dark:text-ivory">{title}</div>
                        <div className="mt-1 text-[11px] leading-snug text-mist">{body}</div>
                      </div>
                    ))}
                  </div>

                  <div className="rule my-6 dark:opacity-30" />

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-[12px] leading-relaxed text-mist">
                      El alert se cerrará automáticamente en {AUTO_CLOSE_SECONDS} segundos.
                    </div>
                    <button
                      type="button"
                      onClick={closeSuccess}
                      className="btn-primary inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[13px] font-semibold tracking-wide"
                    >
                      Aceptar
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
