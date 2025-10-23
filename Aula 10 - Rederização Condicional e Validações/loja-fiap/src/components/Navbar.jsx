import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-yellow-400 text-black px-6 py-4 flex justify-between items-center">
      <Link to="/"><h1 className="font-bold text-xl">FIAP Store</h1></Link>
      <div className="flex gap-4">
        <Link to="/profile" className="hover:underline">Perfil</Link>
        <Link to="/cart" className="hover:underline">Carrinho</Link>
      </div>
    </nav>
  );
}
