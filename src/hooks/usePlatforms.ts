import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../data/platforms";
import platformservice from "../services/platformservice";

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: platformservice.getAll,
    staleTime: ms("24h"),
    initialData: platforms,
  });

export default usePlatforms;
