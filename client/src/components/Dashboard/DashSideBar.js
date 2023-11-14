import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSendLogoutMutation } from "../../features/auth/authApiSlice";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Box, Button, CircularProgress, Divider, IconButton, Stack, Typography } from "@mui/material";
import AccordionContainer from "./AccordionContainer/AccordionContainer";
import LogoutIcon from '@mui/icons-material/Logout';

const DashSideBar = () => {

  const navigate = useNavigate()
  const onHomeClicked = () => navigate('/dash')

  const [sendLogout, {
    isLoading,
    isSuccess,
    isError,
    error
  }] = useSendLogoutMutation()

  useEffect(() => {
    if (isSuccess) navigate('/')
  }, [isSuccess, navigate])

  if (isLoading) return <CircularProgress />

  if (isError) return <p>Error: {error.data?.message}</p>

  const logoutButton = (
    <Button
      mt="auto"
      title="Logout"
      onClick={sendLogout}
      sx={{ transform: "scale(2)" }}>
      <LogoutIcon />
    </Button>
  )

  const content = (
    <Box
      width="20rem"
      sx={{
        position: "fixed",
        height: "100vh",
        top: 0,
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
        <IconButton onClick={onHomeClicked}>
          <HomeOutlinedIcon
            sx={{
              fill: "white",
            }}
          />
          <Typography variant="h6" color="white">Home</Typography>
        </IconButton>
        <AccordionContainer />
        <Box mt="auto">
          {logoutButton}
        </Box>
      </Stack>
    </Box>
  )
  return content
}

export default DashSideBar;
