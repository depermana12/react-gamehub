import {
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  Kbd,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em">
        <FaSearch color="gray.300" />
      </InputLeftElement>
      <Input boxShadow="base" variant="filled" placeholder="Search games..." />
      <InputRightElement paddingRight={10}>
        <Kbd>Ctrl</Kbd> + <Kbd>K</Kbd>
      </InputRightElement>
    </InputGroup>
  );
};
export default SearchInput;
