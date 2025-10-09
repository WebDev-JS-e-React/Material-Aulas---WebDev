export default function Card({ title, value }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:scale-105 transition">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{value}</p>
    </div>
  );
}
