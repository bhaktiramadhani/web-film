import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import SearchPage from "./Pages/Search/SearchPage";
import { getMovieList } from "./utils/api";

const App = () => {
  const [movieLists, setMovieLists] = useState([]);

  useEffect(() => {
    getMovieList().then((movie) => {
      setMovieLists(movie);
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage movieLists={movieLists} />} />
        <Route
          path="/search"
          element={<SearchPage movieLists={movieLists} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
