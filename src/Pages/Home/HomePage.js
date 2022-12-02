import { Search } from "@mui/icons-material";
import {
  Box,
  InputAdornment,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import theme from "../../theme";
import { getMovieList } from "../../utils/api";
import BottomMenu from "./BottomMenu";
import HeroCard from "./HeroCard";
import MovieMenu from "./MovieMenu";

const HomePage = () => {
  const [movieLists, setMovieLists] = useState([]);

  useEffect(() => {
    getMovieList().then((movie) => {
      setMovieLists(movie);
    });
  }, []);
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
          <TextField
            label="Search"
            variant="outlined"
            color="secondary"
            sx={{
              mx: "24px",
              ".MuiInputBase-root": {
                borderRadius: "16px",
                backgroundColor: theme.palette.background.input,
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start" color="secondary.contrastText">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <HeroCard movieLists={movieLists} />
        <MovieMenu movieLists={movieLists} />
        <BottomMenu />
      </Box>
    </ThemeProvider>
  );
};

export default HomePage;
