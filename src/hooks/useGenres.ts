import { useQuery } from "@tanstack/react-query";
import genreService from "../services/genreService";
import ms from "ms";
import genres from "../data/genres";
import { FetchResponse, Genre } from "../types/type";

const useGenres = () =>
  useQuery<FetchResponse<Genre>>({
    queryKey: ["genres"],
    queryFn: genreService.getAll,
    staleTime: ms("24h"),
    initialData: genres,
  });

export default useGenres;
