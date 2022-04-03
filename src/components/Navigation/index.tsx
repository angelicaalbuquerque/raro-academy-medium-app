import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    setAuthenticated(localStorage.getItem("access_token") !== null);
  }, []);

  if (!isAuthenticated) {
    return (
      <>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </>
    );
  }

  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/artigos">Meus Artigos</Link>
      <Link to="/artigos/novo">Novo Artigo</Link>
      <Link to="/login">Login</Link>
      <Link to="/">Sair</Link>
    </>
  );
};
