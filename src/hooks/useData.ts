import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/apiClien";

type FetchResponse<T> = {
  count: number;
  results: T[];
};

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const getData = async () => {
      try {
        setLoading(true);
        const res = await apiClient.get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
        });
        setData(res.data.results);
      } catch (error) {
        if (error instanceof CanceledError) return;
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    getData();

    return () => controller.abort();
  }, []);

  return { data, error, isLoading };
};

export default useData;
