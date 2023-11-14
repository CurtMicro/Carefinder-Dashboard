import { Box, CircularProgress, Grid } from "@mui/material";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hospital from "./Hospital";
import { useGetHospitalsQuery } from "./hospitalsApiSlice";


const Hospitals = () => {
  const queryParams = window.location.search

  const location = useLocation()
  const {
    data: hospitals,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetHospitalsQuery(queryParams, {
    pollingInterval: 0,
  })

  useEffect(() => {
  }, [location])


  let content

  if (isLoading) content = <Box position="absolute" ml="50rem"><CircularProgress /></Box>

  if (isError) {
    content = <Box width="100vw" height="100vh" textAlign="center" alignContent="center">{error?.data?.message}</Box>
  }

  if (isSuccess) {

    const { ids } = hospitals

    const gridContent = ids?.length
      ? ids.map(hospitalId => <Hospital key={hospitalId} hospitalId={hospitalId} />)
      : null

    content = (
      <Grid
        container
        ml="16rem"
        width="auto"
        justifyContent="space-evenly"
        alignContent="center"
        direction="row"
        spacing={4}
      >
        {gridContent}
      </Grid>
    )
  }

  return content
}

export default Hospitals;
