import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Layout } from "./components/Layout";
import { LoginPage } from "./pages/Login";
import { ArtigosPage } from "./pages/Artigos";
import { NotFoundPage } from "./pages/NotFound";
import { EditarArquivoPage } from "./pages/EditarArquivo";
import { MeusArtigosPage } from "./pages/MeusArtigos";
import { ArtigoPage } from "./pages/Artigo";
import { RequireAuth } from "./components/RequireAuth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<ArtigosPage />} />
          <Route path="/artigo/:id" element={<ArtigoPage />} />

          <Route element={<RequireAuth />}>
            <Route path="/artigos" element={<MeusArtigosPage />} />
            <Route path="/artigo/editar/:id" element={<EditarArquivoPage />} />
            <Route path="/artigos/novo" element={<EditarArquivoPage />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
