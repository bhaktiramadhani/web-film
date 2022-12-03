import { Box } from "@mui/material";
import React from "react";
import BottomMenu from "../../components/BottomMenu";
import SearchField from "../../components/SearchField";
import TopNavigation from "../../components/TopNavigation";
import CardList from "../../components/CardList";

const SearchPage = ({ movieLists }) => {
  return (
    <Box sx={{ width: 1, display: "flex", flexDirection: "column" }}>
      <TopNavigation />
      <SearchField />
      <Box
        sx={{
          mt: "24px",
          ml: "29px",
          mr: "39px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          mb: "100px",
        }}
      >
        {movieLists.map((movie) => (
          <CardList key={movie.id} movie={movie} />
        ))}
      </Box>
      <BottomMenu />
    </Box>
  );
};

export default SearchPage;
