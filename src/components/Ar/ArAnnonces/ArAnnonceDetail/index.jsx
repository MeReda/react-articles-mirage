import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ArAnnonceDetail = () => {
  const params = useParams();
  const [annonce, setAnnonce] = useState([]);

  useEffect(() => {
    fetch(`/api/annonces/${params.id}`)
      .then((res) => res.json())
      .then((data) => setAnnonce(data.annonces));
  }, []);

  return (
    <>
      <Link className="p-3 pt-1 d-block" to="./..">
        &rarr; العودة
      </Link>
      {annonce.length > 0 ? (
        <>
          <div className="img-placeholder w-100 bg-secondary">
            <h1 className="text-light">{annonce.image}</h1>
          </div>
          <div className="container pt-3">
            <h1 className="text-center">{annonce.title_ar}</h1>
            <p className="text-center">{annonce.date}</p>
            <p className="mt-4">{annonce.body_ar}</p>
          </div>
        </>
      ) : (
        <h2 className="text-center">Loading ...</h2>
      )}
    </>
  );
};

export default ArAnnonceDetail;
