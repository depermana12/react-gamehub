import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Image,
  Heading,
  HStack,
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

import { Game } from "../types.ts/type";
import CriticScore from "./CriticScore";

type Props = {
  game: Game;
};

const GameCard = ({ game }: Props) => {
  return (
    <Card overflow="hidden">
      <Image
        src={game.background_image}
        alt="Green double couch with wooden legs"
      />
      <CardBody>
        <Heading size="md">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
      <CardFooter>
        <Button variant="solid" colorScheme="blue">
          Details
        </Button>
      </CardFooter>
    </Card>
  );
};
export default GameCard;
