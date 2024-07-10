import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/apiClien";
import { Genre } from "../types.ts/type";

type FetchGenresResponse = {
  count: number;
  results: Genre[];
};

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const getGenres = async () => {
      try {
        setLoading(true);
        const res = await apiClient.get<FetchGenresResponse>("/genres", {
          signal: controller.signal,
        });
        setGenres(res.data.results);
      } catch (error) {
        if (error instanceof CanceledError) return;
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    getGenres();

    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
