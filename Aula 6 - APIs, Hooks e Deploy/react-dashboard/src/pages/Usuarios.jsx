import { useEffect, useState } from "react";

export default function Usuarios() {

  const[usuarios, setUsuarios] = useState([])

  useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => setUsuarios(data))
  .catch(erro => console.log(erro))
  .finally(console.log("Carregamento finalizado!"))
  },[]) 

  return (
    <div className="p-6 flex-1 bg-gray-100">
      <h1 className="text-2xl font-bold">Usuários</h1>
      {usuarios.map(pegaItem => (
        <p>{pegaItem.name}</p>
      )

      )}
    </div>
  );
}
