import { useEffect, useState } from "react";
import RepoCard from "../components/RepoCard";
import SectionContainer from "../components/SectionContainer";

export default function Home() {
  const [reactRepos, setReactRepos] = useState([]);
  const [nodeRepos, setNodeRepos] = useState([]);
  const [pythonRepos, setPythonRepos] = useState([]);

  const API = import.meta.env.VITE_GITHUB_API;
  const token = import.meta.env.VITE_API_TOKEN;

  useEffect(() => {
     fetch(`${API}react&per_page=5`, {  // Monta a URL: API + termo de busca 'react' + limite de 5 resultados
         headers: {
            Authorization: `token ${token}`
  }
    })
      .then(res => res.json())
      .then(data => { setReactRepos(data.items) })
      .catch(err => console.error(err));

    fetch(`${API}node&per_page=5`, {
         headers: {
            Authorization: `token ${token}`
  }
    })
      .then(res => res.json())
      .then(data => setNodeRepos(data.items))
      .catch(err => console.error(err));

    fetch(`${API}python&per_page=5`, {
         headers: {
            Authorization: `token ${token}`
  }
    })
      .then(res => res.json())
      .then(data => setPythonRepos(data.items))
      .catch(err => console.error(err));
  }, [API]);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">GitHub Repositories Explorer</h1>

      <SectionContainer title="React Repositories">
        <>
        {reactRepos.map(repo => (
          <RepoCard
            key={repo.id} // Identificador único de cada card para o React
            {...repo}
          />
        ))}
        </>
      </SectionContainer>

      <SectionContainer title="Node.js Repositories">
        <>
        {nodeRepos.map(repo => (
          <RepoCard
            key={repo.id}
            {...repo}
          />
        ))}
        </>
      </SectionContainer>

      <SectionContainer title="Python Repositories">
        <>
        {pythonRepos.map(repo => (
          <RepoCard
            key={repo.id}
            {...repo}
          />
        ))}
        </>
      </SectionContainer>
    </div>
  );
}