import { Box, Button, Typography } from "@mui/material";
import hospital from "../../images/medium-logo.png";
import useAuth from '../../hooks/useAuth'
import { useNavigate } from "react-router-dom";

const DashHeader = () => {

  const navigate = useNavigate()

  const { username } = useAuth()

  const navToHome = () => {
    navigate('/dash')
  }

  const userInfo = (<Typography variant="h4" color="#89cff0">
    Hello {username}
  </Typography>

  )

  const content = (
    <Box
      sx={{
        ml: "20rem",
        mr: "2rem",
        mt: "2rem",
        p: "2rem",
        width: "auto",
        height: "6rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: "0.375rem",
        background: "#272730",
        boxShadow:
          "0rem 0.125rem 0.375rem -0.065rem #212129,0rem 0.125rem 0.25rem -0.0625rem #2d2d37",

      }}
    >
      <Button onClick={navToHome}>
        <img
          src={hospital}

          alt="Carefinder Logo"
          width="60"
          height="60"
        />
      </Button>
      <Typography variant="h3" color="#89cff0">
        CareFinder App
      </Typography>
      {userInfo}

    </Box>)
  return content
};

export default DashHeader;
