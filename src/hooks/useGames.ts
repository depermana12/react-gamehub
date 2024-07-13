import { useInfiniteQuery } from "@tanstack/react-query";
import { FetchResponse, Game, GameQuery } from "../types/type";
import gameService from "../services/gameService";
import ms from "ms";

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      gameService.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage ? allPages.length + 1 : null;
    },
    staleTime: ms("24"),
  });

export default useGames;
