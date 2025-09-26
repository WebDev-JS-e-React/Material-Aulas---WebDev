import { GraficoPizza } from "@/assets/GraficoPizza";
import { GraficoBarras } from "@/components/GraficoBarras";
import { Button } from "@/components/ui/button"
export default function Relatorios() {

  function handleClick(){
    alert("clicou!")
  }
  return (
    <div className="p-6 flex-1 bg-gray-100">
      <h1 className="text-2xl font-bold">Relatórios</h1>
      <Button onClick={handleClick}>Click me</Button>
      <div class="grid grid-cols-2"><GraficoBarras/>
      <GraficoPizza/></div>
      
    </div>
  );
}
