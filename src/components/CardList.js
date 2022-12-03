import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import starIcon from "../assets/Star.svg";
import ticketIcon from "../assets/Ticket.svg";
import calendarIcon from "../assets/CalendarBlank.svg";
import clockIcon from "../assets/Clock.svg";

const imgUrl = process.env.REACT_APP_BASEIMGURL;

const CardList = ({ movie }) => {
  return (
    <Box sx={{ width: 1 }}>
      <Button
        component={Link}
        to={`/movies/${movie.id}`}
        sx={{ gap: "12px", width: 1, display: "flex", justifyContent: "start" }}
      >
        <Box>
          <Box
            component="img"
            src={`${imgUrl}/${movie.poster_path}`}
            alt={movie.title}
            height={120}
            width={95}
            sx={{ borderRadius: "16px" }}
          />
        </Box>
        <Box sx={{ textTransform: "capitalize" }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: "16px",
              fontWeight: "400",
              color: "#fff",
              mb: "14px",
              letterSpacing: "2px",
            }}
            textAlign="start"
          >
            {movie.title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "38px",
              gap: "4px",
              color: "#FF8700",
            }}
          >
            <Box component="img" src={starIcon} />
            <Typography
              variant="body1"
              sx={{
                fontSize: "12px",
                letterSpacing: "1px",
              }}
            >
              {movie.vote_average}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "auto",
              gap: "4px",
              color: "#FFF",
            }}
          >
            <Box component="img" src={ticketIcon} />
            <Typography
              variant="body1"
              sx={{ fontSize: "12px", letterSpacing: "1px" }}
            >
              Action
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "auto",
              gap: "4px",
              color: "#FFF",
            }}
          >
            <Box component="img" src={calendarIcon} />
            <Typography
              variant="body1"
              sx={{ fontSize: "12px", letterSpacing: "1px" }}
            >
              {movie.release_date}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "auto",
              gap: "4px",
              color: "#FFF",
            }}
          >
            <Box component="img" src={clockIcon} />
            <Typography
              variant="body1"
              sx={{ fontSize: "12px", letterSpacing: "1px" }}
            >
              139 minutes
            </Typography>
          </Box>
        </Box>
      </Button>
    </Box>
  );
};

export default CardList;
