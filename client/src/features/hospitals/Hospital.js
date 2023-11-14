import { Grid, Paper, Box, Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { selectHospitalById } from "./hospitalsApiSlice";
import EditIcon from '@mui/icons-material/Edit';
import useAuth from "../../hooks/useAuth";

const Hopsital = ({ hospitalId }) => {
  const { isManager, isAdmin } = useAuth()

  const hospital = useSelector(state => selectHospitalById(state, hospitalId))

  if (!hospital) {
    return null
  }

  return (
    <Grid item>
      <Paper
        variant="elevation"
        elevation={3}
        sx={{
          color: "white",
          height: "16rem",
          width: "30rem",
          borderRadius: "0.5rem",
          background: "#272730",
          boxShadow:
            "0rem 0.125rem 0.375rem -0.065rem #212129,0rem 0.125rem 0.25rem -0.0625rem #2d2d37",
        }}
      >

        <Box height="4rem" width="100%" display="flex" sx={{ borderBottom: "1px solid white" }} justifyContent="space-between" alignContent="center" p="0.5rem">
          <Box textAlign="center" alignSelf="center" width="20%" >{hospital.provider_id} </Box>
          <Typography variant="h6" textAlign="center" sx={{ borderLeft: "1px solid white", borderRight: "1px solid white" }} alignSelf="center" width="90%" >{hospital.hospital_name}</Typography>
          {(isManager || isAdmin) && <Button width="20%"  ><EditIcon /></Button>}
        </Box>
        <Box height="auto" width="100%" p="0.5rem" sx={{ outline: "1px solid red" }}>
          <Typography variant="p">{hospital.address} </Typography>
          <Typography variant="p">{hospital.city} </Typography>
          <Typography variant="p">{hospital.state} </Typography>
          <Typography variant="p">{hospital.zip_code} </Typography>
          <Typography variant="p">{hospital.county_name} </Typography>
          <Typography variant="p">{hospital.phone_number} </Typography>
        </Box>

      </Paper>
    </Grid>
  )
}

export default Hopsital;
