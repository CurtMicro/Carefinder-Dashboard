import { Box, Typography, Paper, Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useGetHospitalsQuery } from "./hospitalsApiSlice";


const SingleHospital = () => {
  const { isAdmin, isManager } = useAuth()
  const queryParams = window.location.search
  const { providerId } = useParams()

  const location = useLocation()

  const { hospital } = useGetHospitalsQuery(queryParams, {
    selectFromResult: ({ data }) => ({
      hospital: data?.find(hospital => hospital.provider_id === providerId)
    }),
  })

  useEffect(() => {
  }, [location])//reload/refetch on query change


  let content


  if (!hospital) {
    content = (<Typography>No Hospitals Found</Typography>)
  } else {
    content = (<Paper
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

    </Paper>)
  }

  return (
    <Box
      ml="16rem"
      width="auto"
      justifyContent="space-evenly"
      alignContent="center"
    >
      {content}
    </Box>
  )
}

export default SingleHospital;
