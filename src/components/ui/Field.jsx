export default function Field({ label, value, onChange, type = 'text', placeholder, err }) {
  return (
    <label className="block">
      <span className="eyebrow text-ink/60 block mb-1.5" style={{ fontSize: '10px' }}>
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`field w-full bg-ivory/70 border ${err ? 'border-carmesi' : 'border-ink/12'} rounded-xl px-4 py-3 text-[14px] text-ink placeholder:text-mist/80`}
      />
      {err && <span className="text-[11px] text-carmesi mt-1 block">{err}</span>}
    </label>
  );
}
