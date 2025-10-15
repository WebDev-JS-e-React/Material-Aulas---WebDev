import { Link } from "react-router-dom";

export default function RepoCard({ name, description, html_url, stargazers_count, topics =[], id}) {
  return (
    <div className={`flex items-center justify-between border rounded-lg p-4 border-red-700 shadow hover:scale-102 transition transform duration-200`}>
      <div className="p-1.5">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-gray-400 mt-2">{description}</p>
        <p className="text-sm text-white mt-1 font-bold">⭐ {stargazers_count}</p>
        {topics.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
            {topics.map((topic) => (
                <span
                key={topic}
                className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full"
                >
                {topic}
                </span>
            ))}
            </div>
        )}
       </div>
       <div>
            <a 
                href={html_url} 
                target="_blank" 
                rel="noopener noreferrer" 
            >
                <div className="text-center mt-4 p-2 bg-white rounded text-red-700 font-medium ">
                        Ver no GitHub
                </div>
            </a>
            <Link
                to={`/repo/${id}`}
                >
                <div className="text-center mt-4 p-2 bg-white rounded text-red-700 font-medium ">
                    Ver detalhes
                </div>
            </Link>
        </div>
    </div>
  );
}