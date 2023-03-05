import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("/api/articles")
      .then((res) => res.json())
      .then((data) => setArticles(data.articles));
  }, []);

  return (
    <>
      <h1 className="text-center mt-5">Articles</h1>

      <div className="container">
        <div className="row mt-5">
          {articles.map((e) => (
            <div key={e.id} className="col-md-3 col-sm-4 col-6 text-center">
              <Link to={`/articles/${e.id}`}>
                <div className="card border-primary mb-3">
                  <div className="card-body text-primary">
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

export default Articles;
