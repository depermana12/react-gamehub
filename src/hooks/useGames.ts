import { useState, useEffect } from "react";
import apiClient from "../services/apiClien";
import { CanceledError } from "axios";

type Game = {
  id: number;
  name: string;
};

type FetchGamesResponse = {
  count: number;
  results: Game[];
};

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const getGames = async () => {
      try {
        const res = await apiClient.get<FetchGamesResponse>("/games", {
          signal: controller.signal,
        });
        setGames(res.data.results);
      } catch (error) {
        if (error instanceof CanceledError) return;
        setError((error as Error).message);
      }
    };

    getGames();

    return () => controller.abort();
  }, []);

  return { games, error };
};
export default useGames;
