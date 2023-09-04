import { MOVIEDB_IMAGES_URL } from "src/common/constants";
import MovieCard from "./MovieCard";
import { Heading, SimpleGrid, Flex } from "@chakra-ui/layout";

import { Spinner } from "@chakra-ui/react";
import { useGetMoviesQuery } from "./moviesApi";

function MovieList() {
  const { data, isError, error, isLoading, isSuccess } = useGetMoviesQuery();

  let content;

  if (isSuccess) {
    content = (
      <SimpleGrid spacing={4} columns={{ sm: 1, md: 3, lg: 4 }}>
        {data.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster={`${MOVIEDB_IMAGES_URL}/${movie.poster_path}`}
            overview={movie.overview}
          />
        ))}
      </SimpleGrid>
    );
  } else if (isLoading) {
    content = (
      <Flex alignItems="center" justifyContent="center" minH="100vh">
        <Spinner text="Loading..." />
      </Flex>
    );
  } else if (isError) {
    content = (
      <Flex alignItems="center" justifyContent="center" minH="100vh">
        {error?.data?.status_message ?? "Something went wrong"}
      </Flex>
    );
  }

  return (
    <>
      <Heading textAlign="center" size="xl" mb={4}>
        Trending Movies
      </Heading>
      {content}
    </>
  );
}

export default MovieList;
