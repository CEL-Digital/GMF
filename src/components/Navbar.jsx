import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className="flex h-min-screen w-full">
      <nav className="flex w-full justify-between font-bold p-5 mx-10">
        <Link to={"/"}>Logo</Link>
        <div className="flex gap-8">
            <Link to={"/"}>
                Home 
            </Link>
            <Link to={"/sobre"}>
                Sobre
            </Link>
            <Link to={"/areas-de-atuacao"}>
                Áreas de atuação
            </Link>
            <Link to={"/contato"}>
                Contato
            </Link>
        </div>
      </nav>
    </div>
  );
}
