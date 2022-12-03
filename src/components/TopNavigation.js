import React from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Box, Button, Typography } from "@mui/material";

const TopNavigation = () => {
  return (
    <Box
      sx={{
        display: "flex",
        mx: "24px",
        mt: "10px",
        mb: "36px",
        justifyContent: "space-between",
        alignItems: "center",
        height: "36px",
      }}
    >
      <Button sx={{ p: "9px", color: "#FFF" }}>
        <NavigateBeforeIcon />
      </Button>
      <Typography
        variant="h2"
        sx={{ fontSize: 16, fontWeight: "bold", letterSpacing: "2px" }}
        color="primary.contrastText"
      >
        Search
      </Typography>
      <Button sx={{ p: "9px", color: "#FFF" }}>
        <InfoOutlinedIcon />
      </Button>
    </Box>
  );
};

export default TopNavigation;
