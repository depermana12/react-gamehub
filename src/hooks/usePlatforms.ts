import { useQuery } from "@tanstack/react-query";
import { FetchResponse, Platform } from "../types.ts/type";
import apiClient from "../services/apiClien";
import platforms from "../data/platforms";

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { count: platforms.length, results: platforms },
  });

// useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
