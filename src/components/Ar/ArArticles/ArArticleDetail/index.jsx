import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ArArticleDetail = () => {
  const params = useParams();
  const [article, setArticle] = useState([]);

  useEffect(() => {
    fetch(`/api/articles/${params.id}`)
      .then((res) => res.json())
      .then((data) => setArticle(data.articles));
  }, []);

  return (
    <>
      <Link className="p-3 pt-1 d-block" to="./..">
        &rarr; العودة
      </Link>
      {article ? (
        <>
          <div className="img-placeholder w-100 bg-secondary">
            <h1 className="text-light">{article.image}</h1>
          </div>
          <div className="container pt-3">
            <h1 className="text-center">{article.title_ar}</h1>
            <p className="text-center">{article.date}</p>
            <p className="mt-4">{article.body_ar}</p>
          </div>
        </>
      ) : (
        <h2 className="text-center">Loading ...</h2>
      )}
    </>
  );
};

export default ArArticleDetail;
