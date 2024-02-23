export default function Card({ cardIcon, title, description }) {
  return (
    <div className="bg-gray-200 p-4 rounded-lg mb-4 w-full lg:flex items-centers sm:justify-start">
      <div className="flex justify-center sm:justify-start">{cardIcon}</div>
      <div className="p-5">
        <h2 className="text-lg font-bold text-blue-900">{title}</h2>
        <p className="text-blue-900">{description}</p>
      </div>
    </div>
  );
}
