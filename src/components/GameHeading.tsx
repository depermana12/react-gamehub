import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../types.ts/type";

type Props = {
  gameQuery: GameQuery;
};
const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games`;

  return (
    <Heading pl={2} mt={5} as="h2">
      {heading}
    </Heading>
  );
};
export default GameHeading;
