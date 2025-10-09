import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-red-600">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Página não encontrada</h2>
        <p className="text-gray-700 mb-4">
          Desculpe, a página que você está procurando não existe.
        </p>
        <Link
          to="/"
          className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Voltar para Home
        </Link>
      </div>
    </div>
  );
}
