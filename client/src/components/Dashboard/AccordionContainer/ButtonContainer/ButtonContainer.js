import { Box, Button } from "@mui/material";

const ButtonContainer = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "0.375rem",
          background: "#272730",
          boxShadow:
            "0rem 0.125rem 0.375rem -0.065rem #212129,0rem 0.125rem 0.25rem -0.0625rem #2d2d37",
      }}
    >
      <Button variant="text" onClick={props.navigation}>
        <h3>{props.call}</h3>
      </Button>
    </Box>
  );
};

export default ButtonContainer;
