import { Box, Typography } from "@mui/material";
import hospital from "../../../images/hospital.png";

const Header = () => {
  return (
    <Box
      bgcolor={"background.default"}
      sx={{
        width: "100%",
        height: "6rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h2" color="blue">
        CareFinder App
      </Typography>

      <img
        src={hospital}
        href={"../../App"}
        alt="Carefinder Logo"
        width="60"
        height="60"
      />
    </Box>
  );
};

export default Header;
