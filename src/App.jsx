import "./App.css";
import React from "react";
import {
  BrowserRouter,
  Link,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./components/Fr/Home";
import Articles from "./components/Articles";
import ArticleDetail from "./components/Articles/ArticleDetail";
import Layout from "./components/Fr/Layout";
import Evenements from "./components/Evenements";
import EvenementDetail from "./components/Evenements/EvenementDetail";
import Annonces from "./components/Annonces";
import AnnonceDetail from "./components/Annonces/AnnonceDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/fr" replace />} />
        <Route path="/" element={<Outlet />}>
          <Route path="fr" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="articles" element={<Articles />} />
            <Route path="articles/:id" element={<ArticleDetail />} />
            <Route path="evenements" element={<Evenements />} />
            <Route path="evenements/:id" element={<EvenementDetail />} />
            <Route path="annonces" element={<Annonces />} />
            <Route path="annonces/:id" element={<AnnonceDetail />} />
          </Route>

          <Route path="ar" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="articles" element={<Articles />} />
            <Route path="articles/:id" element={<ArticleDetail />} />
            <Route path="evenements" element={<Evenements />} />
            <Route path="evenements/:id" element={<EvenementDetail />} />
            <Route path="annonces" element={<Annonces />} />
            <Route path="annonces/:id" element={<AnnonceDetail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
