import { Route, Routes } from "react-router";
import MovieList from "src/features/movies/MovieList";
import MovieDetails from "src/features/movies/MovieDetails";

import Layout from "src/common/ui/Layout";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MovieList />} />
          <Route path="movies/:movieId" element={<MovieDetails />} />
        </Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
