import "./App.css";
import React from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import FrHome from "./components/Fr/FrHome";
import FrArticles from "./components/Fr/FrArticles";
import FrArticleDetail from "./components/Fr/FrArticles/FrArticleDetail";
import FrLayout from "./components/Fr/FrLayout";
import FrEvenements from "./components/Fr/FrEvenements";
import FrEvenementDetail from "./components/Fr/FrEvenements/FrEvenementDetail";
import FrAnnonces from "./components/Fr/FrAnnonces";
import FrAnnonceDetail from "./components/Fr/FrAnnonces/FrAnnonceDetail";

import ArHome from "./components/Ar/ArHome";
import ArArticles from "./components/Ar/ArArticles";
import ArArticleDetail from "./components/Ar/ArArticles/ArArticleDetail";
import ArLayout from "./components/Ar/ArLayout";
import ArEvenements from "./components/Ar/ArEvenements";
import ArEvenementDetail from "./components/Ar/ArEvenements/ArEvenementDetail";
import ArAnnonces from "./components/Ar/ArAnnonces";
import ArAnnonceDetail from "./components/Ar/ArAnnonces/ArAnnonceDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/fr" replace />} />
        <Route path="*" element={<Navigate to="/fr" replace />} />

        <Route path="/" element={<Outlet />}>
          <Route path="fr" element={<FrLayout />}>
            <Route index element={<FrHome />} />
            <Route path="articles" element={<FrArticles />} />
            <Route path="articles/:id" element={<FrArticleDetail />} />
            <Route path="evenements" element={<FrEvenements />} />
            <Route path="evenements/:id" element={<FrEvenementDetail />} />
            <Route path="annonces" element={<FrAnnonces />} />
            <Route path="annonces/:id" element={<FrAnnonceDetail />} />

            <Route
              path="*"
              element={<h1 className="text-center">Error 404</h1>}
            />
          </Route>

          <Route path="ar" element={<ArLayout />}>
            <Route index element={<ArHome />} />
            <Route path="articles" element={<ArArticles />} />
            <Route path="articles/:id" element={<ArArticleDetail />} />
            <Route path="evenements" element={<ArEvenements />} />
            <Route path="evenements/:id" element={<ArEvenementDetail />} />
            <Route path="annonces" element={<ArAnnonces />} />
            <Route path="annonces/:id" element={<ArAnnonceDetail />} />

            <Route
              path="*"
              element={<h1 className="text-center">خطأ 404</h1>}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
