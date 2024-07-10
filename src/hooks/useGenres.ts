import { Genre } from "../types.ts/type";
import useData from "./useData";

const useGenres = () => useData<Genre>("/genres");

export default useGenres;
