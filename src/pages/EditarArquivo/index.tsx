import apiClient from "../../services/api-client";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ArticleForm } from "../../components/ArticleForm";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";

export const EditarArquivoPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  const [artigo, setArtigo] = useState<ArticleThumbnailProps>();
  useEffect(() => {
    if (id) {
      buscarArtigo();
    }
  }, [id]);

  useEffect(() => {
    if (location.pathname.includes("novo")) {
      setArtigo(undefined);
    }
  }, [location.pathname]);

  async function buscarArtigo() {
    const response = await apiClient.get<ArticleThumbnailProps>(
      `/artigos/${id}`,
    );

    setArtigo(response.data);
  }

  const handleSubmit = async (artigo: ArticleThumbnailProps) => {
    try {
      if (artigo.id) {
        console.log("=====> devo atualizar o artigo");
        await apiClient.patch(`/artigos/${artigo.id}`, artigo);
      } else {
        console.log("=====> devo criar um novo artigo");
        await apiClient.post(`/artigos`, artigo);
      }
      console.log("=====> artigo salvo com sucesso");
      navigate("/artigos");
    } catch (error) {
      console.log("Erro ao salvar artigo", error);
    }
  };

  const handleRemove = async (artigo: ArticleThumbnailProps) => {
    try {
      console.log("=====> devo remover o artigo");
      await apiClient.delete(`/artigos/${artigo.id}`);
      console.log("=====> artigo removido com sucesso");
      navigate("/artigos");
    } catch (error) {
      console.log("Erro ao remover artigo", error);
    }
  };

  return (
    <>
      <div className="items-center justify-center m-10">
        <ArticleForm
          article={artigo}
          onSubmit={handleSubmit}
          onRemove={handleRemove}
        />
      </div>
    </>
  );
};
