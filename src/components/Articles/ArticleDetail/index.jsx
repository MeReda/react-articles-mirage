import { useEffect, useState } from "react";
import { useParams } from "react-router";

const ArticleDetail = () => {
  const params = useParams();
  const [article, setArticle] = useState([]);

  useEffect(() => {
    fetch(`/api/articles/${params.id}`)
      .then((res) => res.json())
      .then((data) => setArticle(data.articles));
  }, []);

  return (
    <>
      {article ? (
        <>
          <div className="img-placeholder w-100 bg-secondary">
            <h1 className="text-light">{article.image}</h1>
          </div>
          <div className="container pt-3">
            <h1 className="text-center">{article.title}</h1>
            <p className="text-center">{article.date}</p>
            <p className="mt-4">{article.body}</p>
          </div>
        </>
      ) : (
        <h2 className="text-center">Loading ...</h2>
      )}
    </>
  );
};

export default ArticleDetail;
