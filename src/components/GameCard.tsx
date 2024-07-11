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
import optimizeImage from "../services/optimizeImage";

type Props = {
  game: Game;
};

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image
        src={optimizeImage(game.background_image)}
        alt="Green double couch with wooden legs"
      />
      <CardBody>
        <HStack justifyContent="space-between" mb={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading size="md">{game.name}</Heading>
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
