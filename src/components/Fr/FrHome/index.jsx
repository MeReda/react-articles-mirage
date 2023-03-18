import { useState, useEffect } from "react";
import { getArticles } from "../../../api";

const FrHome = () => {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    async function ladData() {
      try {
        const data = await getArticles();
        setMyData(data);
      } catch (error) {
        console.log(error);
      }
    }
    ladData();
  }, []);

  return (
    <>
      <h1 className="text-center m-5">Home</h1>
      <div className="container">
        <p className="text-center">
          Ceci est un test pour clarifier comment les articles fonctionneront et
          :
        </p>
        <ul className="pt-3">
          <li>Détecter les données nécessaires pour les articles</li>
          <li>Essayer React Router</li>
          <li>Test mirageJs</li>
        </ul>
        <p>
          Pour obtenir le code source{" "}
          <a
            href="https://github.com/MeReda/react-articles-mirage/tree/master"
            target="_blank"
          >
            cliquez ici
          </a>
        </p>
        <h2 className="mt-5 pt-5">Les données dans MirageJs sont:</h2>
        <span className="text-secondary">
          (les images doivent être présentées sous la forme de "
          /chemin/image1.png " ou toute autre extension " jpg/jpeg/webp... ")
        </span>
        <pre>{JSON.stringify(myData, null, 2)}</pre>
      </div>
    </>
  );
};

export default FrHome;
