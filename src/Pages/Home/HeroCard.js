import { Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const imgUrl = process.env.REACT_APP_BASEIMGURL;

const HeroCard = ({ movieLists }) => {
  console.log(movieLists);
  return (
    <Box
      sx={{
        mt: "21px",
        pb: "32px",
        mb: "32px",
        display: "flex",
        gap: "30px",
        overflowX: "scroll",
        scrollbarWidth: "none",
        ">div:first-of-type": {
          pl: "34px",
        },
        ">div:last-of-type": {
          pr: "34px",
        },
      }}
    >
      {movieLists.map((movie) => (
        <Box key={movie.id}>
          <Button
            component={Link}
            to={`/movies/${movie.id}`}
            sx={{ p: 0, borderRadius: "16px" }}
          >
            <Box
              component="img"
              src={`${imgUrl}/${movie.poster_path}`}
              height={210}
              width={145}
              sx={{ borderRadius: "16px" }}
            />
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default HeroCard;
