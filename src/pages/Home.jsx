export default function Home() {
  
  const [reactRepos, setReactRepos] = React.useState([]);
  const API = import.meta.env.VITE_GITHUB_API;

  React.useEffect(() => {
    fetch(`${API}react&per_page=5`)
    .then((response) => response.json())
    .then((data) => setReactRepos(data.items))
  }, []);

}

