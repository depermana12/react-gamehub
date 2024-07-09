import { useColorMode } from "@chakra-ui/react";
import { Switch } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Switch
      onChange={toggleColorMode}
      colorScheme="teal"
      isChecked={colorMode === "dark"}
    />
  );
};
export default ColorModeSwitch;
