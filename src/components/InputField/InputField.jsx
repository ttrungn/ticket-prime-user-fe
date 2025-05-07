const InputField = ({ label, icon, type, value, onChange, onBlur, error }) => (
  <>
    <label className="text-sm font-medium mb-1">{label}</label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pb-2 text-gray-400 pointer-events-none">
        {icon}
      </div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`border rounded pl-10 pr-4 py-2 mb-2 w-full ${error ? 'border-red-500' : ''}`}
      />
    </div>
    <p className={`text-sm ${error ? 'text-red-500' : 'text-white'} mb-2`}>{error || ' '}</p>
  </>
);

export default InputField;
