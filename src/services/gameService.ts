import { Game } from "../types/type";
import APIClient from "./apiClient";

export default new APIClient<Game>("/games");
