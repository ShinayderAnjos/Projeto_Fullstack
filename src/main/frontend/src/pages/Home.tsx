import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="rounded-lg bg-white p-8 text-center shadow">
      <h1 className="mb-2 text-3xl font-bold text-orange-600">Esse não é o tigrinho</h1>
      <p className="mb-6 text-gray-600">Gerencie usuários, permissões e jogos.</p>
      <div className="flex justify-center gap-3">
        <Link to="/usuarios" className="rounded-md bg-orange-600 px-4 py-2 text-white hover:bg-orange-700">Usuários</Link>
        <Link to="/jogos" className="rounded-md bg-gray-600 px-4 py-2 text-white hover:bg-gray-700">Jogos</Link>
      </div>
    </div>
  );
}

export default Home;
