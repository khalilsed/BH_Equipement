export default function Input({ label, id, isRequired, placeholder, type }) {
    return (
      <div className="w-full flex flex-col my-3">
        <label htmlFor={id} className="block mb-2 text-sm font-medium ">
          {label}
          {isRequired && <span style={{ color: "red" }}> *</span>}
        </label>
        <input
          type={type}
          id={id}
          className="p-2 bg-gray-50 rounded-lg border "
          required={isRequired ? "required" : undefined}
          placeholder={placeholder}
        />
      </div>
    );
  }