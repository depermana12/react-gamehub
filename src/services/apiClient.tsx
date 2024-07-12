import axios, { AxiosRequestConfig } from "axios";
import { FetchResponse } from "../types/type";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "21d73512ad214e99b7dbc11c70b8712d",
  },
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) =>
    apiClient
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
}

export default APIClient;
