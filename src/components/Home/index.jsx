import { useState, useEffect } from "react";

const Home = () => {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    fetch("/api/articles")
      .then((res) => res.json())
      .then((d) => setMyData(d));
  }, []);

  console.log(myData);

  return (
    <>
      <h1 className="text-center">Home</h1>
      <div className="container">
        <p className="text-center">
          this is a test to clearify how articles should work and :
        </p>
        <ul>
          <li>data needed</li>
          <li>try react router</li>
          <li>test mirageJs</li>
          <li>
            to get the source code{" "}
            <a
              href="https://github.com/MeReda/react-articles-mirage/tree/master"
              target="_blank"
            >
              click here
            </a>
          </li>
        </ul>
        <h2>the data in mirageJs is :</h2>
        <span className="text-secondary">
          (the image should be presented as "/path/image1.png" or any other
          extention "jpg/jpeg/webp...")
        </span>
        <pre>{JSON.stringify(myData, null, 2)}</pre>
      </div>
    </>
  );
};

export default Home;
