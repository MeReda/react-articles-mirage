import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Articles from "./components/Articles";
import "./App.css";
import ArticleDetail from "./components/Articles/ArticleDetail";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/articles">Articles</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<ArticleDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
