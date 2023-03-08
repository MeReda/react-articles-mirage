import "./App.css";
import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Articles from "./components/Articles";
import ArticleDetail from "./components/Articles/ArticleDetail";
import Layout from "./components/Layout";
import Evenements from "./components/Evenements";
import EvenementDetail from "./components/Evenements/EvenementDetail.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
          <Route path="/evenements" element={<Evenements />} />
          <Route path="/evenements/:id" element={<EvenementDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
