import { Box } from "@mui/material";

import Header from "./Header/Header";
import Content from "./Content/Content";

const Main = () => {
  return (
    <Box
      sx={{
        ml: "20rem",
        width: "95%",
        p: "1rem",
        height: "max-content",
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Content />
    </Box>
  );
};

export default Main;
