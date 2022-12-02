import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  ThemeProvider,
} from "@mui/material";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import theme from "../../theme";

const BottomMenu = () => {
  const [value, setValue] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: 1,
          position: "fixed",
          bottom: 0,
          backgroundColor: theme.palette.background.default,
        }}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, index) => {
            setValue(index);
          }}
          sx={{
            width: 1,
            height: 1,
            backgroundColor: theme.palette.background.default,
          }}
        >
          <BottomNavigationAction
            label="Home"
            icon={<HomeIcon color="textWhite" />}
            sx={{
              gap: "8px",
              backgroundColor: theme.palette.background.default,
              color: "#fff",
              py: 2,
            }}
          />
          <BottomNavigationAction
            label="Search"
            icon={<SearchIcon color="textWhite" />}
            sx={{
              gap: "8px",
              backgroundColor: theme.palette.background.default,
              color: "#fff",
              py: 2,
            }}
          />
          <BottomNavigationAction
            label="Watch list"
            icon={<BookmarkBorderIcon color="textWhite" />}
            sx={{
              gap: "8px",
              backgroundColor: theme.palette.background.default,
              color: "#fff",
              py: 2,
            }}
          />
        </BottomNavigation>
      </Box>
    </ThemeProvider>
  );
};

export default BottomMenu;
