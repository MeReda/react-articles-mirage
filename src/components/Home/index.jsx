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
        </ul>
        <h2>the data in mirageJs is :</h2>
        <pre>{JSON.stringify(myData, null, 2)}</pre>
      </div>
    </>
  );
};

export default Home;
