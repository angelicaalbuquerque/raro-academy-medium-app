import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ActivableLink } from "../ActivableLink";

export const Navigation = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    setAuthenticated(localStorage.getItem("access_token") !== null);
  }, []);

  function logout() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("id");
    setAuthenticated(false);
    navigate("/");
  }

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
      <ActivableLink to="/">Home</ActivableLink>
      <ActivableLink to="/artigos">Meus Artigos</ActivableLink>
      <ActivableLink to="/artigos/novo">Novo Artigo</ActivableLink>
      <ActivableLink to="/" type="button" onClick={logout}>
        Logout
      </ActivableLink>
    </>
  );
};
