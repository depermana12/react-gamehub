import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Image,
  Heading,
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

type Platform = {
  id: number;
  name: string;
  slug: string;
};

type Game = {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
};

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
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
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
