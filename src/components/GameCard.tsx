import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Image,
  Heading,
} from "@chakra-ui/react";

type Game = {
  id: number;
  name: string;
  background_image: string;
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
