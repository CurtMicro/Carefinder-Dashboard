import { Card, CardHeader, Avatar, IconButton, CardMedia } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Hopsital = (props) => {
  return (
    <Card
      square
      sx={{
        color: "white",
        height: "16rem",
        width: "30rem",
        borderRadius: "0.375rem",
        background: "#272730",
        boxShadow:
          "0rem 0.125rem 0.375rem -0.065rem #212129,0rem 0.125rem 0.25rem -0.0625rem #2d2d37",
      }}
    >
      <CardHeader
        avatar={<Avatar aria-label="">Wi</Avatar>}
        action={
          <IconButton aria-label="">
            <CloseIcon />
          </IconButton>
        }
        title="Hospital"
        subheader="WI"
      />
      Card
      <CardMedia title="logo" image="../../../../../images/hospital.png" />
    </Card>
  );
};

export default Hopsital;
