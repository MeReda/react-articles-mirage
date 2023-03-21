import axios from "axios";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const API_BASE_URL = "/api";

export const loader = async ({ params }) => {
  const response = await axios.get(`${API_BASE_URL}/articles`);
  return response.data.articles;
};

const FrArticles = () => {
  const [data, setData] = useState(useLoaderData());

  const articles = data;

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
