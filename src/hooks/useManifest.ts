import { useEffect, useState } from "react";

// Sem a barra extra, pois BASE_URL já inclui '/' no final
const manifestFile = `${import.meta.env.BASE_URL}/manifest.json?v=${Date.now()}`;

// Dica: crie uma interface para o seu manifest em vez de usar 'any'
interface ManifestData {
  solvers?: any[];
  // adicione as outras propriedades do seu manifest.json aqui
}

export default function useManifest() {
  const [manifestContent, setManifestContent] = useState<ManifestData | null>(null);

  useEffect(() => {
    async function executeFetch() {
      try {
        const response = await fetch(manifestFile);
        const data: ManifestData = await response.json();
        setManifestContent(data); // Agora sim salvando os dados resolvidos!
      } catch (error) {
        console.error("Erro ao carregar o manifest.json:", error);
      }
    }

    executeFetch();
  }, []);

  return {
    manifest: manifestContent,
    solvers: manifestContent?.solvers,
    articles: [],
    categories: [],
  };
}