import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav nav"
                 "main main"
                 "footer footer"`,
          lg: `"nav nav"
               "aside main"
               "footer footer"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
        gap="1"
      >
        <GridItem pl="2" bg="orange.300" area={"nav"}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem paddingX={5} bg="pink.300" area={"aside"}>
            <GenreList />
          </GridItem>
        </Show>
        <GridItem pl="2" bg="green.300" area={"main"}>
          <GameGrid />
        </GridItem>
        <GridItem pl="2" bg="blue.300" area={"footer"}>
          Footer
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
