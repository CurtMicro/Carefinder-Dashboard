import { Box, Button } from "@mui/material";
import { useDispatch } from "react-redux";

const ButtonContainer = (props) => {
  const dispatch = useDispatch();
  const action = props.action;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button variant="text" onClick={() => dispatch(action)}>
        <h3>{props.call}</h3>
      </Button>
    </Box>
  );
};

export default ButtonContainer;
