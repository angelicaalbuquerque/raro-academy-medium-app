import apiClient from "../../services/api-client";
import { useEffect, useState } from "react";

import { ArticleList } from "../../components/ArticleList";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";

export const MeusArtigosPage = () => {
  async function buscaMeusArtigos() {
    const token = localStorage.getItem("access_token");

    // ! Response sem 'tempoDeLeitura' ou 'tempoLeitura'
    const response = await apiClient.get<ArticleThumbnailProps[]>(
      "/artigos/meus-artigos",
    );

    setArticles(response.data);
  }

  useEffect(() => {
    buscaMeusArtigos();
  }, []);

  const [articles, setArticles] = useState<ArticleThumbnailProps[]>([]);

  return (
    <div className="my-30">
      <ArticleList articles={articles} />
    </div>
  );
};
