import { useEffect, useState } from "react";
import Card from "../components/Card";
import Section from "../components/Section";

export default function Home() {
  const [reactRepos, setReactRepos] = useState([]);
  const [nodeRepos, setNodeRepos] = useState([]);
  const API = import.meta.env.VITE_GITHUB_API;

  useEffect(()=> {
    fetch(`${API}node&per_page=5`)
    .then(res => res.json())
    .then(data => setReactRepos(data.items))

    fetch(`${API}node&per_page=5`)
    .then(res => res.json())
    .then(data => setNodeRepos(data.items))
  },[])
  
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">GitHub Repositories Explorer</h1>
      <Section titulo="Configurações Gerais">
          {reactRepos.map(pegaItem => (
            <Card {...pegaItem}/>
          ))
        }
      </Section>
    </div>
  );
}
