import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Box, Divider, IconButton, Stack } from "@mui/material";

import ButtonContainer from "./AccordionContainer/ButtonContainer/ButtonContainer";
import AccordionContainer from "./AccordionContainer/AccordionContainer";

const SideBar = () => {
  return (
    <Box
      width="20rem"
      sx={{
        position: "fixed",
        height: "100vh",
      }}
    >
      <Stack
        bgcolor="#252729"
        direction="column"
        width="85%"
        height="90vh"
        sx={{
          color: "white",
          alignItems: "center",
          m: "auto",
          mt: "5vh",
          p: "1rem",
          borderRadius: "0.375rem",
          background: "#272730",
          boxShadow:
            "0rem 0.125rem 0.375rem -0.065rem #212129,0rem 0.125rem 0.25rem -0.0625rem #2d2d37",
        }}
      >
        <h1> Navigation</h1>
        <Divider
          sx={{
            height: "1px",
            width: "90%",
            backgroundColor: "Grey",
          }}
        />
        <IconButton>
          <HomeOutlinedIcon
            sx={{
              color: "white",
              fontSize: "large",
            }}
          />
          <ButtonContainer call="Home" />
        </IconButton>
        <AccordionContainer />
      </Stack>
    </Box>
  );
};

export default SideBar;
