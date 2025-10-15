import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function RepoDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    console.log("ID do repositório:", id);
    async function fetchRepo() {
      const res = await fetch(`https://api.github.com/repositories/${id}`, {
        headers: {
          Authorization: `token ${import.meta.env.VITE_API_TOKEN}`
        }
      });
      const data = await res.json();
      console.log("data", data);
      setDetails(data);
    }
    fetchRepo();
  }, [id]);

  if (!details) return <p>Carregando...</p>;

  return (
    <div className="p-6 mx-auto grid grid-cols-2 text-white shadow rounded">
    <div>
      <h2 className="text-2xl font-bold mb-4">{details.full_name}</h2>
      <p className="mb-2 text-gray-400">{details.description}</p>
      <div className="flex items-center gap-4 mt-6">
        <img src={details.owner.avatar_url} alt={details.owner.login} className="w-16 h-16 rounded-full" />
        <strong>Usuário:</strong> {details.owner.login}
      </div>
    </div>
      <ul className="space-y-2 text-gray-400">
        <li><strong>Linguagem:</strong> {details.language || "Não especificada"}</li>
        <li><strong>Data de criação:</strong> {new Date(details.created_at).toLocaleDateString("pt-BR")}</li>
        <li><strong>Licença:</strong> {details.license ? details.license.name : "Sem licença"}</li>
        <li><strong>Forks:</strong> {details.forks_count}</li>
        <li><strong>Watchers:</strong> {details.watchers_count}</li>
         <a
        href={details.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block border border-red-700 text-red-700 px-4 py-2 rounded"
      >
        Acessar no GitHub ↗
      </a>
      </ul>
    </div>
  );
}