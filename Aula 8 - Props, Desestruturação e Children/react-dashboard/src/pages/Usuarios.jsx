import { TabelaUsuarios } from "@/components/TabelaUsuarios";

export default function Usuarios() {
  return (
    <div className="p-6 flex-1 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Usuários</h1>
      <TabelaUsuarios />
    </div>
  );
}
