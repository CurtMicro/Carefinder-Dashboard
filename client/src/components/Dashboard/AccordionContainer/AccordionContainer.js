import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import ButtonContainer from "./ButtonContainer/ButtonContainer"

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import HospitalFilterForm from "./HospitalFilterForm";

const AccordionContainer = () => {

  const navigate = useNavigate()

  const { isAdmin } = useAuth()

  const [expanded, setExpanded] = useState(false)

  const onUsersClicked = () => navigate('/dash/users')

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }
  return (
    <>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{
          width: "100%",
          background: "none",
          color: "white",
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white", transform: "scale(1.5)" }} />}>
          <Typography variant="h6">Hospitals</Typography>
        </AccordionSummary>
        <AccordionDetails >
          <HospitalFilterForm />
        </AccordionDetails>
      </Accordion>
      {(isAdmin) &&
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          sx={{
            width: "90%",
            background: "none",
            color: "white",
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white", transform: "scale(1.5)" }} />}>
            <Typography variant="h6">Users</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ButtonContainer call="All" navigation={onUsersClicked} />
            <ButtonContainer call="Update" />
            <ButtonContainer call="Add" />
            <ButtonContainer call="Delete" />
          </AccordionDetails>
        </Accordion>}
    </>
  );
};

export default AccordionContainer;
