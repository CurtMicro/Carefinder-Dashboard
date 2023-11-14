import { Grid } from "@mui/material";
import Hopsital from "./Hospital/Hopsital";

const Hospitals = (props) => {
  const hospitals = props.hospitals.hospitals;
  return (
    <Grid
      container
      justifyContent="space-evenly"
      alignContent="center"
      direction="row"
      spacing={10}
    >
      {hospitals.map((hospital) => (
        <Grid item>
          <Hopsital hospital={hospital} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Hospitals;
