export default function Eyebrow({ children, dark = false, className = '' }) {
  return (
    <div className={`eyebrow inline-flex items-center gap-2 ${dark ? 'text-ivory/70' : 'text-carmesi'} ${className}`}>
      <span className={`h-px w-6 ${dark ? 'bg-ivory/40' : 'bg-carmesi/50'}`} />
      {children}
    </div>
  );
}
