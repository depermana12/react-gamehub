import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../types/type";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

type Props = {
  gameQuery: GameQuery;
};
const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();
  const genre = genres?.results.find((genre) => genre.id === gameQuery.genreId);
  const platform = platforms?.results.find(
    (platform) => platform.id === gameQuery.platformId,
  );
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading pl={2} mt={5} as="h2">
      {heading}
    </Heading>
  );
};
export default GameHeading;
