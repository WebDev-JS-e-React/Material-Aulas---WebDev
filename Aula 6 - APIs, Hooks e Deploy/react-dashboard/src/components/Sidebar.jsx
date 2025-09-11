import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-56 bg-gray-800 text-white h-screen p-5 flex flex-col">
      <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
      <nav className="flex flex-col gap-3">
        <Link to="/" className="hover:bg-gray-700 p-2 rounded">Home</Link>
        <Link to="usuarios" className="hover:bg-gray-700 p-2 rounded">Usuários</Link>
        <Link to="relatorios" className="hover:bg-gray-700 p-2 rounded">Relatórios</Link>
        <Link to="configuracoes" className="hover:bg-gray-700 p-2 rounded">Configurações</Link>
      </nav>
    </aside>
  );
}
