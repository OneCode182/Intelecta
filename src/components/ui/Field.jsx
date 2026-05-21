export default function Field({ label, value, onChange, type = 'text', placeholder, err }) {
  return (
    <label className="block">
      <span className="eyebrow text-ink/60 dark:text-ivory/60 block mb-1.5" style={{ fontSize: '10px' }}>
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`field w-full bg-ivory/70 dark:bg-ink/50 border ${err ? 'border-carmesi dark:border-carmesi-200' : 'border-ink/12 dark:border-ivory/12'} rounded-xl px-4 py-3 text-[14px] text-ink dark:text-ivory placeholder:text-mist/80 dark:placeholder:text-mist/50`}
      />
      {err && <span className="text-[11px] text-carmesi dark:text-carmesi-200 mt-1 block">{err}</span>}
    </label>
  );
}
