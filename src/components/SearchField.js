import { Search } from "@mui/icons-material";
import { InputAdornment, TextField, ThemeProvider } from "@mui/material";
import React from "react";
import theme from "../theme";

const SearchField = () => {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};

export default SearchField;
