import { Genre } from "../types/type";
import APIClient from "./apiClient";

export default new APIClient<Genre>("/genres");
