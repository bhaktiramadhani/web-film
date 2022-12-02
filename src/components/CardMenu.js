import { Box, Button, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const imgUrl = process.env.REACT_APP_BASEIMGURL;

const CardMenu = ({ movieLists }) => {
  return (
    <Grid container spacing={2} sx={{ mb: "35px" }}>
      {movieLists.map((movie) => (
        <Grid item key={movie.id}>
          <Button
            component={Link}
            to={`/movies/${movie.id}`}
            sx={{ p: 0, borderRadius: "16px" }}
          >
            <Box
              component="img"
              src={`${imgUrl}/${movie.poster_path}`}
              height={146}
              width={100}
              sx={{ borderRadius: "16px" }}
            />
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardMenu;
