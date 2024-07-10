import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import optimizeImage from "../services/optimizeImage";
import GenreListSkeleton from "./GenreListSkeleton";
import { Genre } from "../types.ts/type";

type Props = {
  onSelectGenre: (genre: Genre) => void;
};

const GenreList = ({ onSelectGenre }: Props) => {
  const { data: genres, isLoading, error } = useGenres();
  if (error) return null;
  return (
    <List>
      {isLoading && <GenreListSkeleton />}
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={optimizeImage(genre.image_background)}
            />
            <Button
              onClick={() => onSelectGenre(genre)}
              variant="link"
              fontSize="lg"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};
export default GenreList;
