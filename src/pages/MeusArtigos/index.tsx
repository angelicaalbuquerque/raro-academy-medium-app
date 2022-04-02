import apiClient from "../../services/api-client";
import { useEffect, useState } from "react";

import { ArticleList } from "../../components/ArticleList";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";
import { geraArtigos } from "../../stories/helpers/gerador-artigos";

export const MeusArtigosPage = () => {
  async function buscaMeusArtigos() {
    const token = localStorage.getItem("access_token");

    const response = await apiClient.get<ArticleThumbnailProps[]>(
      "/artigos/meus-artigos",
    );

    setArticles(response.data);
  }

  useEffect(() => {
    buscaMeusArtigos();
  }, []);

  const [articles, setArticles] = useState<ArticleThumbnailProps[]>([]);

  useEffect(() => {
    setArticles(
      geraArtigos(5).map((artigo) => ({ ...artigo, editavel: true })),
    );
  }, []);

  return (
    <div className="my-30">
      <ArticleList articles={articles} />
    </div>
  );
};
