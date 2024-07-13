import { useQuery } from "@tanstack/react-query";
import genreService from "../services/genreService";
import genres from "../data/genres";
import { FetchResponse, Genre } from "../types/type";

const useGenres = () =>
  useQuery<FetchResponse<Genre>>({
    queryKey: ["genres"],
    queryFn: genreService.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: genres,
  });

export default useGenres;
