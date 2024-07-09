import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "21d73512ad214e99b7dbc11c70b8712d",
  },
});

export default apiClient;
