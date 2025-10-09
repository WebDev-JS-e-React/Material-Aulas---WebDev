import { GraficoBarras } from "@/components/GraficoBarras";
import { GraficoPizza } from "@/components/GraficoPizza";

export default function Dashboard() {

  return (
    <div className="p-6 flex-1 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Bem-vindo ao Dashboard</h1>
       <div className="grid grid-cols-2 gap-2">
          <GraficoBarras />
          <GraficoPizza />
       </div>

    </div>
  );
}
