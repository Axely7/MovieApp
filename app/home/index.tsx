import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { useMovies } from "../../presentation/hooks/useMovies";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MainSlideshow from "@/presentation/hooks/components/movies/MainSlideshow";
import MovieHorizontalList from "@/presentation/hooks/components/movies/MovieHorizontalList";

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();

  const { nowPlayingQuery, popularQuery } = useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator color={"purple"} size={40} />
      </View>
    );
  }

  return (
    <View
      className="mt-2"
      style={{
        paddingTop: safeArea.top,
      }}
    >
      <Text className="text-3xl font-bold px-4 mb-2">Movies App</Text>
      <MainSlideshow movies={nowPlayingQuery.data ?? []} />
      <MovieHorizontalList title="Populares" movies={popularQuery.data ?? []} />
    </View>
  );
};

export default HomeScreen;
