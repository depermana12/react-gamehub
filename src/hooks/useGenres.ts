import { useQuery } from "@tanstack/react-query";
import genreService from "../services/genreService";
import genres from "../data/genres";

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: genreService.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
