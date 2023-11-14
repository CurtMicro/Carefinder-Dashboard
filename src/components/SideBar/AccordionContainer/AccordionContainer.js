import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import ButtonContainer from "./ButtonContainer/ButtonContainer";

import * as action from "../../../actions/hospitals";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";

const AccordionContainer = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{
          width: "90%",
          background: "none",
          color: "white",
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Hospitals</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ButtonContainer call="All" action={action.getAllHospitals} />
          <ButtonContainer call="By ID" />
          <ButtonContainer call="By City" />
          <ButtonContainer call="By State" />
          <ButtonContainer call="By Count" />
          <ButtonContainer call="By City & State" />
          <ButtonContainer call="By Name" />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        sx={{
          width: "90%",
          background: "none",
          color: "white",
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Law Enforcement</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ButtonContainer call="All" />
          <ButtonContainer call="By ID" />
          <ButtonContainer call="By City" />
          <ButtonContainer call="By State" />
          <ButtonContainer call="By Count" />
          <ButtonContainer call="By City & State" />
          <ButtonContainer call="By Name" />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        sx={{
          width: "90%",
          background: "none",
          color: "white",
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Fire Fighters</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ButtonContainer call="All" />
          <ButtonContainer call="By ID" />
          <ButtonContainer call="By City" />
          <ButtonContainer call="By State" />
          <ButtonContainer call="By Count" />
          <ButtonContainer call="By City & State" />
          <ButtonContainer call="By Name" />
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default AccordionContainer;
