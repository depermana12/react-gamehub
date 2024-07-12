import { AxiosRequestConfig, CanceledError } from "axios";
import { useState, useEffect, DependencyList } from "react";
import apiClient from "../services/apiClien";
import { FetchResponse } from "../types.ts/type";

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps: DependencyList = [],
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      const getData = async () => {
        try {
          setLoading(true);
          const res = await apiClient.get<FetchResponse<T>>(endpoint, {
            signal: controller.signal,
            ...requestConfig,
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
    },
    deps ? [...deps] : [],
  );

  return { data, error, isLoading };
};

export default useData;
