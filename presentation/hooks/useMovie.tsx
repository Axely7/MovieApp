import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getMovieByIdAction } from "@/core/actions/movie/get-movie-by-id-action";
import { getCreditsByIdAction } from "@/core/actions/cast/get-credits-by-id-action";

export const useMovie = (id: number) => {
  const movieQuery = useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovieByIdAction(id),
    staleTime: 1000 * 60 * 60 * 24,
  });

  const castQuery = useQuery({
    queryKey: ["cast", id],
    queryFn: () => getCreditsByIdAction(id),
    staleTime: 1000 * 60 * 60 * 24,
  });

  return {
    movieQuery,
    castQuery,
  };
};
