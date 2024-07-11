import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

type Props = {
  onSearch: (searchText: string) => void;
};

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack paddingX="10px" boxShadow="md">
      <Image src={logo} boxSize="60px" alt="gamehub logo" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};
export default NavBar;
