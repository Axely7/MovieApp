import { View, Text, FlatList } from "react-native";
import React from "react";
import { Movie } from "@/infrastructure/interfaces/movie.interface";
import MoviePoster from "./MoviePoster";

interface Props {
  title?: string;
  movies: Movie[];
}

const MovieHorizontalList = ({ title, movies }: Props) => {
  return (
    <View>
      {title && <Text className="text-3xl font-bold px-4 mb-2">{title}</Text>}

      <FlatList
        horizontal
        data={movies}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster />
        )}
        keyExtractor={(item) => `${item.id}`}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default MovieHorizontalList;