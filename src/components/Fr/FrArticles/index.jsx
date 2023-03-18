import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../../../api";

const FrArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function ladData() {
      const data = await getArticles();
      setArticles(data);
    }
    ladData();
  }, []);

  return (
    <>
      <h1 className="text-center mt-5">Articles</h1>

      <div className="container">
        <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-4 g-4 mt-5">
          {articles.map((e) => (
            <div key={e.id} className="col text-center">
              <Link to={`${e.id}`}>
                <div className="card border-primary mb-3 h-100">
                  <div className="card-body d-flex flex-column justify-content-center text-primary">
                    <h5 className="card-title">{e.title}</h5>
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

export default FrArticles;
