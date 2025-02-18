export type Platform = {
  id: number;
  name: string;
  slug: string;
};

export type Game = {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genre: string;
};

export type Genre = {
  id: number;
  name: string;
  slug: string;
  image_background: string;
};

export type GameQuery = {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
};

export type FetchResponse<T> = {
  count: number;
  next: string | null;
  results: T[];
};
