import "./App.css";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// import MovieDetailsPage from "./components/MovieDetailsPage/MovieDetailsPage.jsx";
// import MoviesPage from "./pages/MoviePage/MoviesPage.jsx";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const MoviesPage = lazy(()=> import('./pages/MoviePage/MoviesPage.jsx'))
// const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage.jsx"));
// const MoviesPage = lazy(() => import("./pages/MoviesPage.jsx"));
// const NotFound = lazy(() => import("./pages/NotFound.jsx"));
const Navigation = lazy(()=>import('./components/Navigation/Navigation'))


function App() {
  return (
    <>
      <Suspense fallback={<div>Зачекайте...</div>}>
      <Navigation/>
        <Routes>
          
          <Route path="/" element={<HomePage />} >
          </Route>
          <Route path="/movies" element={<MoviesPage/>}>
            
          </Route>
          {/* <Route path="/details" element={<MovieDetailsPage />} /> */}
          {/* <Route path="/movie" element={<MoviesPage />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
