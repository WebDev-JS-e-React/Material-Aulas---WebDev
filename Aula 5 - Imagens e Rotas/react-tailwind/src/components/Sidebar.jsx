export default function Sidebar() {
  return (
    <aside className="w-56 bg-gray-800 text-white h-screen p-5 flex flex-col">
      <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
      <nav className="flex flex-col gap-3">
        <a href="#" className="hover:bg-gray-700 p-2 rounded">Home</a>
        <a href="#" className="hover:bg-gray-700 p-2 rounded">Usuários</a>
        <a href="#" className="hover:bg-gray-700 p-2 rounded">Relatórios</a>
        <a href="#" className="hover:bg-gray-700 p-2 rounded">Configurações</a>
      </nav>
    </aside>
  );
}
