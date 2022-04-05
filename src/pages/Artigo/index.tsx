import faker from "@faker-js/faker";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ArticleView } from "../../components/ArticleView";
import apiClient from "../../services/api-client";

export const ArtigoPage = () => {
  const [article, setArticle] = useState<string>("");
  const [tempoLeitura, setTempoLeitura] = useState<string>("");
  const [autor, setAutor] = useState({
    nome: faker.name.firstName(),
    avatar: faker.image.avatar(),
  });
  const [dataPublicacao, setDataPublicacao] = useState(new Date());
  let { id } = useParams();

  useEffect(() => {
    async function loadArticle() {
      const { data } = await apiClient.get<ArtigoResponseType>(
        `/artigos/${id}`,
      );
      setAutor(data.autor);
      setDataPublicacao(new Date(data.dataPublicacao));
      setArticle(data.conteudo);
      setTempoLeitura(data.tempoDeLeitura);
    }

    loadArticle();
  }, [id]);

  return (
    <div className="m-10">
      <ArticleView
        article={article}
        autor={autor}
        dataPublicacao={dataPublicacao}
        tempoLeitura={tempoLeitura}
      />
    </div>
  );
};

type ArtigoResponseType = {
  id: number;
  autor: AutorResponseType;
  conteudo: string;
  dataAtualizacao: string;
  dataPublicacao: string;
  imagem: string;
  resumo: string;
  tempoDeLeitura: string;
  titulo: string;
};

type AutorResponseType = {
  id: number;
  avatar: string;
  login: string;
  nome: string;
  senha: string;
};
