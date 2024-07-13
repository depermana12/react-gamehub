import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import platformservice from "../services/platformservice";

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: platformservice.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: platforms,
  });

export default usePlatforms;
