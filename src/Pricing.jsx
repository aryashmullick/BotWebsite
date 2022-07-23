import React, { Component } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Stack,
  Slider,
  Button,
  Switch,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
  Zoom,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import WarningIcon from "@mui/icons-material/Warning";
import GitHubIcon from "@mui/icons-material/GitHub";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuComponent from "./mainComponents/menu";
const darkTheme = createTheme({ palette: { mode: "dark" } });

function cardRedirect(type) {
  window.location.href = "https://contact.ar9157.me/checkout?type=" + type;
}

class Pricing extends Component {
  state = {
    github: false,
    hosting: false,
    commercial: false,
    commands: 10,
    slash_commands: 10,
    database: 20,
    dbMore: false,
    dbButtonText: "I need more",
    price: 23000,
    append: "",
    pricingSpeedDial: false,
    client_owned:false,
    dOpen:false,
  };

  dClose = () => {
    this.setState({ dOpen: false });
  }

  calculatePrice = () => {
    let pCmd = this.state.commands * 100;
    let pSlash = this.state.slash_commands * 200;
    let pDb = 0;
    if (!this.state.dbMore) {
      pDb = this.state.database * 1000;
      this.setState({ append: "" });
    } else {
      this.setState({ append: "[Exclusive of database charges]" });
    }
    let pHost = this.state.hosting ? 10000 : 0;
    let pGithub = this.state.github ? 5000 : 0;
    let pCom = this.state.commercial ? 100000 : 0;
    let pClient = this.state.client_owned ? 100000 : 0;
    let pTotal = pCmd + pSlash + pDb + pHost + pGithub + pCom + pClient;
    this.setState({ price: pTotal });
  };

  handleCommandSliderChange = (event, newValue) => {
    this.setState({ commands: newValue }, function () {
      this.calculatePrice();
    });
  };

  paymentRedirect = () => {
    let cmd = this.state.commands;
    let slash = this.state.slash_commands;
    let db;
    if (!this.state.dbMore) {
      db = this.state.database;
    } else {
      db = "more";
    }
    let host = this.state.hosting;
    let github = this.state.github;
    let com = this.state.commercial;
    let linkArgs =
      "cmd=" +
      cmd +
      "&slash=" +
      slash +
      "&db=" +
      db +
      "&host=" +
      host +
      "&github=" +
      github +
      "&com=" +
      com
      + "&client_owned=" + this.state.client_owned;
    window.location.href =
      "https://contact.ar9157.me/checkout/payasyougo?" + linkArgs;
  };

  handleSlashCommandSliderChange = (event, newValue) => {
    this.setState({ slash_commands: newValue }, function () {
      this.calculatePrice();
    });
  };

  handleDbSliderChange = (event, newValue) => {
    this.setState({ database: newValue }, function () {
      this.calculatePrice();
    });
  };

  handleDbButton = () => {
    this.setState({ dbMore: !this.state.dbMore }, function () {
      if (this.state.dbMore === false) {
        this.setState({ dbButtonText: "I need more" });
      } else {
        this.setState({ dbButtonText: "Selected: More than 100 MB" });
      }
      this.calculatePrice();
    });
  };

  handleHostingBtn = () => {
    this.setState({ hosting: !this.state.hosting }, function () {
      this.calculatePrice();
    });
  };

  handleCommercialBtn = () => {
    this.setState({ commercial: !this.state.commercial }, function () {
      this.calculatePrice();
    });
  };

  handleGithubBtn = () => {
    this.setState({ github: !this.state.github }, function () {
      this.calculatePrice();
    });
  };

  handleClientOwnedBtn = () => {
    this.setState({ client_owned: !this.state.client_owned }, function () {
      this.calculatePrice();
    });
  };

  handlePricingSpeedDial = () => {
    this.setState({ pricingSpeedDial: !this.state.pricingSpeedDial });
  };

  render() {
    return (
      <ThemeProvider theme={darkTheme}>
        <h1 style={{ textAlign: "center", paddingTop: "100px" }}>
          <b>Pricing</b>
        </h1>
        <br />
        <p style={{ textAlign: "center" }}>
          Well I am not going to ask for real money <i>yet</i>, but I will take
          some other form of payment. Here are the basic plans
        </p>
        <Stack
          direction="column"
          spacing={4}
          style={{ paddingRight: "40px", paddingLeft: "40px" }}
        >
          <Card varient="outlined" id="freeplan">
            <CardActionArea
                // onClick={() => cardRedirect("free")}>
                onClick={() => this.setState({dOpen:true})}
              >
              <CardHeader title="FREE" />
              <CardContent>
                <Typography variant="body1" color="textSecondary">
                  This is the free plan. It has limited features but its the{" "}
                  <b>recommended</b> plan for new users. The features are as
                  follows:
                </Typography>
                <br />
                <br />
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="span"
                >
                  <CheckIcon style={{ color: "green" }} /> 15 Text Commands{" "}
                  <br />
                  <CheckIcon style={{ color: "green" }} /> 10 Slash Commands{" "}
                  <br />
                  <CheckIcon style={{ color: "green" }} /> Database [{"<"}20MB]
                  <br />
                  <hr />
                  <ClearIcon style={{ color: "red" }} /> No commercial bots{" "}
                  <br />
                  <ClearIcon style={{ color: "red" }} /> Hosting not included{" "}
                  <br />
                  <ClearIcon style={{ color: "red" }} /> No access to Github
                  Repository <br />
                  <ClearIcon style={{ color: "red" }} /> No client owned bots (I will be the owner of the bot according to the Discord API) <br />
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card varient="outlined" id="premiumplan">
            <CardActionArea
                // onClick={() => cardRedirect("premium")}>
              onClick={() => this.setState({dOpen:true})}>
              <CardHeader title="PREMIUM" />
              <CardContent>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="span"
                >
                  This is the recommended plan for serious users. It has all the
                  features of the free plan plus the following:
                </Typography>
                <br />
                <br />
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="span"
                >
                  <AddIcon style={{ color: "green" }} /> 20 Text Commands <br />
                  <AddIcon style={{ color: "green" }} /> 20 Slash Commands{" "}
                  <br />
                  <UpgradeIcon style={{ color: "darkorange" }} /> Database
                  [100MB]*
                  <br />
                  <CheckIcon style={{ color: "green" }} /> Access to the private
                  Github Repository** <br />
                  <CheckIcon style={{ color: "green" }} /> Hosting by me on a
                  virtual machine <br />
                  <CheckIcon style={{ color: "green" }} /> Client Owned Bots
                  <br />
                  <hr />
                  <WarningIcon style={{ color: "gold" }} /> The bot can be
                  commercial, but there are limits.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Accordion varient="rounded" id="payasyougo">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              onClick={this.handlePricingSpeedDial}
            >
              <h4>Pay as you go</h4>
            </AccordionSummary>
            <AccordionDetails>
              <Stack
                spacing={5}
                direction="row"
                alignItems={"center"}
                style={{ paddingRight: "50px", paddingLeft: "50px" }}
              >
                <h6>Commands</h6>
                <Slider
                  value={this.state.commands}
                  onChange={this.handleCommandSliderChange}
                  aria-labelledby="input-slider"
                  min={20}
                  max={50}
                  valueLabelDisplay="auto"
                />
              </Stack>
              <Stack
                spacing={1.5}
                direction="row"
                alignItems={"center"}
                style={{ paddingRight: "50px", paddingLeft: "50px" }}
              >
                <h6>Slash Commands</h6>
                <Slider
                  value={this.state.slash_commands}
                  onChange={this.handleSlashCommandSliderChange}
                  aria-labelledby="input-slider"
                  min={20}
                  max={50}
                  valueLabelDisplay="auto"
                />
              </Stack>
              <Stack
                spacing={6.5}
                direction="row"
                alignItems={"center"}
                style={{ paddingRight: "50px", paddingLeft: "50px" }}
              >
                <h6>Database (mb)</h6>
                {!this.state.dbMore && (
                  <Slider
                    id="databaseSlider"
                    value={this.state.database}
                    onChange={this.handleDbSliderChange}
                    aria-labelledby="input-slider"
                    min={0}
                    max={100}
                    valueLabelDisplay="auto"
                  />
                )}
                <Button
                  variant="raised"
                  id="databaseButton"
                  onClick={this.handleDbButton}
                >
                  {this.state.dbButtonText}
                </Button>
              </Stack>
              <Stack
                spacing={5.5}
                direction="row"
                alignItems={"center"}
                style={{ paddingRight: "50px", paddingLeft: "50px" }}
              >
                <h6>Hosting</h6>
                <Switch onClick={this.handleHostingBtn} />
              </Stack>
              <Stack
                spacing={1.8}
                direction="row"
                alignItems={"center"}
                style={{ paddingRight: "50px", paddingLeft: "50px" }}
              >
                <h6>Commercial</h6>
                <Switch onClick={this.handleCommercialBtn} />
              </Stack>
              <Stack
                spacing={6.4}
                direction="row"
                alignItems={"center"}
                style={{ paddingRight: "50px", paddingLeft: "50px" }}
              >
                <h6>Github</h6>
                <Switch
                  onClick={this.handleGithubBtn}
                  icon={
                    <GitHubIcon
                      sx={{
                        color: "black",
                        backgroundColor: "white",
                        borderRadius: "100%",
                      }}
                    />
                  }
                  checkedIcon={
                    <GitHubIcon
                      sx={{
                        color: "green",
                        backgroundColor: "white",
                        borderRadius: "100%",
                      }}
                    />
                  }
                />
              </Stack>
              <Stack
                spacing={0}
                direction="row"
                alignItems={"center"}
                style={{ paddingRight: "50px", paddingLeft: "50px" }}
              >
                <h6>Owned by you</h6>
                <Switch onClick={this.handleClientOwnedBtn} />
              </Stack>
              <Stack
                spacing={5}
                alignItems={"center"}
                style={{ paddingRight: "50px", paddingLeft: "50px" }}
              >
                <h6>
                  TOTAL COST: {this.state.price} {this.state.append}<br />
                </h6>
              </Stack>
              <Stack
                spacing={5}
                alignItems={"center"}
                style={{ paddingRight: "50px", paddingLeft: "50px" }}
              >
                <Button
                  variant="outlined"
                  color="success"
                  // onClick={this.paymentRedirect} // Under Construction
                    onClick={() => this.setState({dOpen:true})}
                >
                  Check out
                </Button>
                <b>THE COST WILL BE CHANGED IN THE FUTURE!!</b>
              </Stack>
              <br />
              <br />

              <Accordion varient="outlined" id="pricingDetail">
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <h4>Pricing Details</h4>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    component="span"
                  >
                    <h6>
                      <ul>
                        <li>Normal Commands: 100/command</li>
                        <li>Slash Commands: 200/command</li>
                        <li>
                          Database: 1000/megabyte (only till 100MB. For more
                          than 100MB, contact me!)
                        </li>
                        <li>Hosting: 10000</li>
                        <li>Github: 5000</li>
                        <li>Commercial Bot: 100000</li>
                        <li>Owned by you: 100000</li>
                      </ul>
                    </h6>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
          </Accordion>
        </Stack>
        <br />
        <br />
        <br />
        <br />
        <h4 style={{ textAlign: "center" }}>
          Check out{" "}
          <Link href={"/faq"} varient="body2">
            FAQ
          </Link>{" "}
          for more information{" "}
        </h4>
        <small style={{ paddingLeft: "10px", fontSize: "10px" }}>
          * The database size can be increased in premium plan. **The code can
          only be used by you and your team.
        </small>
        <br />
        {this.state.pricingSpeedDial && (
          <Zoom in={true}>
            <Card
              ariaLabel="PriceCard"
              sx={{ position: "fixed", bottom: 16, left: 16 }}
            >
              <CardActionArea
                onClick={() => {
                  window.location.href = "#payasyougo";
                }}
              >
                <CardContent>
                  <Typography variant="body2" component="p" sx={{textAlign:"center",fontSize:"12px"}}>
                    Total Cost: {this.state.price} <br/>
                    <small style={{fontSize:"8px",color:"lightgreen"}}>{this.state.dbMore && ("Exclusive of database charges")}</small>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </Zoom>
        )}
        <Dialog
            open={this.state.dOpen}
            onClose={this.dClose}
            aria-labelledby="dialog-under-construct"
        >
          <DialogTitle id="title.dialog-construct">
            {"UNDER CONSTRUCTION!"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              The backend is currently work in progress. For now please <Link href="https://contact.ar9157.me/">contact</Link> me normally or you can look around.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.dClose} autoFocus>
              Look Around
            </Button>
          </DialogActions>
        </Dialog>
          <MenuComponent />
      </ThemeProvider>
    );
  }
}

export default Pricing;
