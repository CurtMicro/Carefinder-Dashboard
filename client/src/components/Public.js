import { Box, Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

const Public = () => {

    const navigate = useNavigate()

    const navToLogin = () => navigate('/login')

    return (
        <Box display="grid" gap="1rem" mt="auto" mb="auto" textAlign="center" width="100vw">
            <h1>Carefinder</h1>
            <h2>Welcome to the CareFinder Dashboard</h2>
            <p>The Dashboard allows Employees to get Hopsitals.
                <br /> Admins can also manage Users.</p>
            <Button variant="button" onClick={navToLogin} sx={{
                color: "white",
                alignItems: "center",
                m: "auto",
                mt: "2rem",
                p: "1rem 2rem",
                borderRadius: "0.375rem",
                background: "#272730",
                boxShadow:
                    "0rem 0.125rem 0.375rem -0.065rem #212129,0rem 0.125rem 0.25rem -0.0625rem #2d2d37",
                ':hover': {
                    color: "black"
                }

            }}>
                <Typography variant="button" >Login</Typography>
            </Button>
        </Box >)
}

export default Public