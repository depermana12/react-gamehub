import { Badge } from "@chakra-ui/react";

type Props = {
  score: number;
};

const CriticScore = ({ score }: Props) => {
  return (
    <Badge colorScheme={score <= 80 ? "red" : "green"} paddingX={2}>
      {score}
    </Badge>
  );
};
export default CriticScore;
