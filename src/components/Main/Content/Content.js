import { Box } from "@mui/material";
import { useSelector } from "react-redux";

import Hospitals from "./Hospitals/Hospitals";

const Content = () => {
  const hospitals = useSelector((state) => state.hospitals);
  return (
    <Box
      sx={{
        width: "auto",
        minHeight: "max-content",
      }}
    >
      {hospitals && <Hospitals hospitals={hospitals} />}
    </Box>
  );
};

export default Content;
