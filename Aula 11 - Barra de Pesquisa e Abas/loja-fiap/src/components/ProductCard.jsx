import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

export default function ProductCard({ id, title, price, image, rating}) {
  return (
    <div className={`bg-white rounded-lg shadow p-4 hover:scale-105 transition transform`}>
      <img src={image} alt={title} className="w-full h-48 object-contain mb-4"/>
      <h3 className="font-bold text-lg">{title}</h3>

      {rating && (
        <p className="flex items-center text-yellow-400 mt-1">
          <FaStar className="mr-1" />
          {rating.rate} ({rating.count})
        </p>
      )}

      <p className="text-gray-700 mt-2 font-semibold">${price}</p>

      <Link
        to={`/product/${id}`}
        className="mt-3 inline-block bg-yellow-400 font-bold text-black px-3 py-1 rounded hover:bg-yellow-500"
      >
        Ver detalhes
      </Link>
    </div>
  );
}
