import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../types/type";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

type Props = {
  gameQuery: GameQuery;
};
const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading pl={2} mt={5} as="h2">
      {heading}
    </Heading>
  );
};
export default GameHeading;
