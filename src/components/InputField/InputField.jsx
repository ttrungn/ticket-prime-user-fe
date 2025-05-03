const InputField = ({ label, type, value, onChange, onBlur, error }) => (
  <>
    <label className="text-sm font-medium mb-1">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className={`border rounded px-4 py-2 mb-2 ${error ? 'border-red-500' : ''}`}
    />
    <p className={`text-sm ${error ? 'text-red-500' : 'text-white'} mb-4`}>{error || ' '}</p>
  </>
);

export default InputField;
