export default function Input({ label, invalid, ...props }) {
  let defaultLabelClasses = "block mb-2 text-xs font-bold tracking-wide uppercase ";
  let defaultInputClasses = "w-full px-3 py-2 leading-tight border rounded shadow ";

  defaultLabelClasses += invalid ? "text-red-400 " : "text-stone-300 ";
  defaultInputClasses += invalid ? "text-red-500 bg-red-100 border-red-300" : "text-gray-700 bg-stone-300 ";
  return <p>
    <label className={defaultLabelClasses}>{label}</label>
    <input className={defaultInputClasses} {...props} />
  </p>
}