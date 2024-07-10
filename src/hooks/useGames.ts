import { useState, useEffect } from "react";
import apiClient from "../services/apiClien";
import { CanceledError } from "axios";
import { Game } from "../types.ts/type";

type FetchGamesResponse = {
  count: number;
  results: Game[];
};

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const getGames = async () => {
      try {
        setLoading(true);
        const res = await apiClient.get<FetchGamesResponse>("/games", {
          signal: controller.signal,
        });
        setGames(res.data.results);
      } catch (error) {
        if (error instanceof CanceledError) return;
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    getGames();

    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
};
export default useGames;
