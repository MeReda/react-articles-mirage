import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ArEvenements = () => {
  const [Evenements, setEvenements] = useState([]);

  useEffect(() => {
    fetch("/api/evenements")
      .then((res) => res.json())
      .then((data) => setEvenements(data.evenements));
  }, []);

  return (
    <>
      <h1 className="text-center mt-5">مناسبات</h1>

      <div className="container">
        <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-4 g-4 mt-5">
          {Evenements.map((e) => (
            <div key={e.id} className="col text-center">
              <Link to={`${e.id}`}>
                <div className="card border-primary mb-3 h-100">
                  <div className="card-body d-flex flex-column justify-content-center text-primary">
                    <h5 className="card-title">{e.title_ar}</h5>
                    <p className="card-text">{e.date}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ArEvenements;
