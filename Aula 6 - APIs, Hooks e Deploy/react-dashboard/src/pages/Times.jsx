import { useEffect, useState } from "react";

const [times, setTimes] = useState([]);

export default function Times() {
  useEffect(() => {
    fetch("https://v3.football.api-sports.io/teams?league=74&season=2023", {
      headers: {
        "x-apisports-key": "93661f9333b69bfe5b5ed3712546e190",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data.response))
      .catch((erro) => console.error("Erro ao buscar times:", erro));
  }, []);

  return (
    <div className="p-6 flex-1 bg-gray-100">
      <h1 className="text-2xl font-bold">Times</h1>
      <p className="mt-2 text-gray-600">Página de times.</p>
    </div>
  );
}
