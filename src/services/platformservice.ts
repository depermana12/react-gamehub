import { Platform } from "../types/type";
import APIClient from "./apiClient";

export default new APIClient<Platform>("/platforms/lists/parents");
