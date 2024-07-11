import {
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  Kbd,
} from "@chakra-ui/react";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";

type Props = {
  onSearch: (searchText: string) => void;
};

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          color="gray.300"
          fontSize="1.2em"
        >
          <FaSearch color="gray.300" />
        </InputLeftElement>
        <Input
          ref={ref}
          boxShadow="base"
          variant="filled"
          placeholder="Search games..."
        />
        <InputRightElement paddingRight={10}>
          <Kbd>Ctrl</Kbd> + <Kbd>K</Kbd>
        </InputRightElement>
      </InputGroup>
    </form>
  );
};
export default SearchInput;
