import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClien";
import { FetchResponse, Genre } from "../types/type";
import genres from "../data/genres";

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
