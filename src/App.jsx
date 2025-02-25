import "./App.css";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage.jsx"));
const MoviesPage = lazy(() => import("./pages/MoviesPage.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));
function App() {
  return (
    <>
      <Suspense fallback={<div>Зачекайте...</div>}>
        <Routes>
          
          <Route path="/" element={<HomePage />} />
          <Route path="/details" element={<MovieDetailsPage />} />
          <Route path="/movie" element={<MoviesPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
