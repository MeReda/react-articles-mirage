import { useEffect, useState } from "react";
import { useParams } from "react-router";

const EvenementDetail = () => {
  const params = useParams();
  const [evenement, setEvenement] = useState([]);

  useEffect(() => {
    fetch(`/api/evenements/${params.id}`)
      .then((res) => res.json())
      .then((data) => setEvenement(data.evenements));
  }, []);

  return (
    <>
      {evenement ? (
        <>
          <div className="img-placeholder w-100 bg-secondary">
            <h1 className="text-light">{evenement.image}</h1>
          </div>
          <div className="container pt-3">
            <h1 className="text-center">{evenement.title}</h1>
            <p className="text-center mb-0">{evenement.date}</p>
            <p className="text-center">{evenement.location}</p>
            <p className="mt-4">{evenement.description}</p>
          </div>
        </>
      ) : (
        <h2 className="text-center">Loading ...</h2>
      )}
    </>
  );
};

export default EvenementDetail;
