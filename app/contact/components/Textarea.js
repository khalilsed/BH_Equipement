export default function Textarea({ label, id, placeholder }) {
    return (
      <div className="w-full flex flex-col my-6">
        <label htmlFor={id} className="block mb-2 text-sm font-medium">
          {label}
        </label>
        <textarea
          id={id}
          className=" p-3 bg-gray-50 rounded-lg border w-full"
          placeholder={placeholder}
        />
      </div>
    );
  }