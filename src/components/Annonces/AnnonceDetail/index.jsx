import { useEffect, useState } from "react";
import { useParams } from "react-router";

const AnnonceDetail = () => {
  const params = useParams();
  const [annonce, setAnnonce] = useState([]);

  useEffect(() => {
    fetch(`/api/annonces/${params.id}`)
      .then((res) => res.json())
      .then((data) => setAnnonce(data.annonces));
  }, []);

  return (
    <>
      {annonce ? (
        <>
          <div className="img-placeholder w-100 bg-secondary">
            <h1 className="text-light">{annonce.image}</h1>
          </div>
          <div className="container pt-3">
            <h1 className="text-center">{annonce.title}</h1>
            <p className="text-center">{annonce.date}</p>
            <p className="mt-4">{annonce.body}</p>
          </div>
        </>
      ) : (
        <h2 className="text-center">Loading ...</h2>
      )}
    </>
  );
};

export default AnnonceDetail;
