export default function Card({ icon: Icon, title, description }) {
  return (
    <div className="flex flex-col items-center p-6 w-48 rounded-lg shadow-md bg-white hover:shadow-lg transition">
      <Icon className="text-4xl text-blue-500 mb-3" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-500 text-center">{description}</p>
    </div>
  );
}
