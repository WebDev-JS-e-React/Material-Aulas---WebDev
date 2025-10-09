import Navbar from "./components/NavBar";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="p-6">
        <p className="text-center">Lista de Repositórios </p>
      </main>
    </div>
  );
}
