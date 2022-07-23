import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
  Fade,
  Zoom
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { Component } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuComponent from "./mainComponents/menu";

const darkTheme = createTheme({ palette: { mode: "dark" } });

class FAQ extends Component {
  state = {};

  render() {
    return (
      <ThemeProvider theme={darkTheme}>
        <Zoom in={true} style={{ transitionDelay: "500ms" }}>
          <div style={{ textAlign: "center", paddingTop: "50px" }}>
            <h1
              style={{
                textDecoration: "underline",
                textDecorationColor: "rgba(203, 8, 8, 0.505)",
                color: "gray",
                fontWeight: "bold",
              }}
            >
              Frequently Asked Questions
            </h1>
            Well here are some faqs asked by people. Some are added by me to
            clear confusion. Feel free to ask me any other questions!
          </div>
        </Zoom>
        <Fade in={true} style={{ transitionDelay: "1000ms" }}>
          <Stack direction={"column"} sx={{ padding: "50px" }}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h5>What is a bot?</h5>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  A bot is a computer program that runs on your computer. It can
                  be used to do things like send you messages, play music, or
                  perform other actions.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h5>
                  What is a bot{" "}
                  <u style={{ textDecorationColor: "cyan" }}>in discord</u>?
                </h5>
              </AccordionSummary>
              <AccordionDetails id="whatisbot">
                <p>
                  A discord bot is a bot which performs actions called upon by
                  users on discord. A discord bot has limits but it can perform
                  almost any action that a user can{" "}
                  <span style={{ color: "gray" }}>
                    (except creating servers, etc)
                  </span>
                  .
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h5>
                  What do I take as money, if I do not take the real deal?
                </h5>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  Well, I take money in the form of Discord Nitro, Dank Memer
                  coins or any digital currency or a thing that has value.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h5>
                  What is the price written on the <u style={{ textDecorationColor: "cyan" }}>pricing</u> page?
                </h5>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  <text style={{color:"lightgreen"}}>THAT'S NOT REAL MONEY LOL!</text> That's dank memer or any other digital currency on discord.
                  If you want to pay something else for the bot, contact me!
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h5>
                  What is the minimum time in which i can get the bot?
                </h5>
              </AccordionSummary>
              <AccordionDetails>
                <p>
                  Well, I am not sure how much time as I also have to manage my life and other things. So it really depends on the size of the project.
                </p>
              </AccordionDetails>
            </Accordion>
          </Stack>
        </Fade>
        <MenuComponent />
      </ThemeProvider>
    );
  }
}

export default FAQ;
