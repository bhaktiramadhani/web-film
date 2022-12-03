import { Box, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import theme from "../../theme";
import BottomMenu from "../../components/BottomMenu";
import HeroCard from "./HeroCard";
import MovieMenu from "./MovieMenu";
import SearchField from "../../components/SearchField";

const HomePage = ({ movieLists }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Box
          sx={{
            width: 1,
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: "18px",
              fontWeight: "bold",
              pt: "26px",
              px: "24px",
            }}
            color="primary.contrastText"
          >
            What do you want to watch?
          </Typography>
          <SearchField />
        </Box>
        <HeroCard movieLists={movieLists} />
        <MovieMenu movieLists={movieLists} />
        <BottomMenu />
      </Box>
    </ThemeProvider>
  );
};

export default HomePage;
