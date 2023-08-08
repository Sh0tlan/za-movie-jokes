import { MOVIEDB_IMAGES_URL } from "src/common/constants";
import MovieCard from "./MovieCard";
import { Heading, SimpleGrid } from "@chakra-ui/layout";
import { useSelector } from "react-redux";
import { selectAllMovies } from "./moviesSlice";

function MovieList() {
  const movies = useSelector(selectAllMovies);
  console.log(movies);

  return (
    <>
      <Heading textAlign="center" size="xl" mb={4}>
        Trending Movies
      </Heading>
      <SimpleGrid spacing={4} columns={{ sm: 1, md: 3, lg: 4 }}>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster={`${MOVIEDB_IMAGES_URL}/${movie.poster_path}`}
            overview={movie.overview}
          />
        ))}
      </SimpleGrid>
    </>
  );
}

export default MovieList;
