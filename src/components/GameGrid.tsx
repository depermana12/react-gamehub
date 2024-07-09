import { useEffect, useState } from "react";
import apiClient from "../services/apiClien";
import { Text } from "@chakra-ui/react";

type Game = {
  id: number;
  name: string;
};

type FetchGamesResponse = {
  count: number;
  results: Game[];
};

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  const getGames = async () => {
    try {
      const res = await apiClient.get<FetchGamesResponse>("/games");
      setGames(res.data.results);
    } catch (error) {
      setError((error as Error).message);
    }
  };

  useEffect(() => {
    getGames();
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};
export default GameGrid;
