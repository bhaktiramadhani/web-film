import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import CardMenu from "../../components/CardMenu";

const TabPanel = (props) => {
  const { children, value, index } = props;

  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box sx={{ mt: "20px" }}>{children}</Box>}
    </div>
  );
};

const MovieMenu = ({ movieLists }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, index) => {
    setValue(index);
  };
  return (
    <Box sx={{ mx: "24px", mb: "100px" }}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          scrollButtons="auto"
          variant="scrollable"
          sx={{
            ".css-27ec5v-MuiButtonBase-root-MuiTab-root.Mui-selected": {
              color: "#fff",
            },
            ".MuiButtonBase-root": {
              color: "#fff",
              textTransform: "capitalize",
              fontSize: "14px",
              fontWeight: "medium",
            },
          }}
          TabIndicatorProps={{
            style: {
              backgroundColor: "#3A3F47",
              height: "4px",
            },
          }}
        >
          <Tab value={0} label="Now playing" />
          <Tab value={1} label="Upcoming" />
          <Tab value={2} label="Top rated" />
          <Tab value={3} label="Popular" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <CardMenu movieLists={movieLists} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Upcoming
      </TabPanel>
      <TabPanel value={value} index={2}>
        Top rated
      </TabPanel>
      <TabPanel value={value} index={3}>
        Popular
      </TabPanel>
    </Box>
  );
};

export default MovieMenu;
