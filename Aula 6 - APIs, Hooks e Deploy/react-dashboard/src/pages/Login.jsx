import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulação de autenticação
    if (username === "admin" && password === "1234") {
      navigate("/admin/dashboard"); // redireciona após login
    } else {
      setError("Usuário ou senha inválidos");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm "
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <img src={Logo} alt="Logo" className="mb-6 max-w-1/2 my-0 mx-auto" />
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Usuário</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-400"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Senha</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-400"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition cursor-pointer"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
