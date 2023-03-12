import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ArEvenementDetail = () => {
  const params = useParams();
  const [evenement, setEvenement] = useState([]);

  useEffect(() => {
    fetch(`/api/evenements/${params.id}`)
      .then((res) => res.json())
      .then((data) => setEvenement(data.evenements));
  }, []);

  return (
    <>
      <Link className="p-3 pt-1 d-block" to="./..">
        &rarr; العودة
      </Link>
      {evenement ? (
        <>
          <div className="img-placeholder w-100 bg-secondary">
            <h1 className="text-light">{evenement.image}</h1>
          </div>
          <div className="container pt-3">
            <h1 className="text-center">{evenement.title_ar}</h1>
            <p className="text-center mb-0">{evenement.date}</p>
            <p className="text-center">{evenement.location_ar}</p>
            <p className="mt-4">{evenement.description_ar}</p>
          </div>
        </>
      ) : (
        <h2 className="text-center">Loading ...</h2>
      )}
    </>
  );
};

export default ArEvenementDetail;
