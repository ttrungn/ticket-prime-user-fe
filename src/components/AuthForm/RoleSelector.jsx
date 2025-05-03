const RoleSelector = ({ onSelect }) => (
  <>
    <h2 className="mb-4 text-lg font-semibold text-center">Please choose your role</h2>
    <div className="flex flex-col gap-4">
      {['customer', 'organizer'].map(role => (
        <button
          key={role}
          type="button"
          onClick={() => onSelect(role)}
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors duration-200 font-semibold"
        >
          {role.charAt(0).toUpperCase() + role.slice(1)}
        </button>
      ))}
    </div>
  </>
);

export default RoleSelector;
