import React, { Component } from 'react';
import {
    SpeedDial,
    SpeedDialAction,
} from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import MoneyIcon from '@mui/icons-material/Money';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

const darkTheme = createTheme({ palette: { mode: "dark" } });

class MenuComponent extends Component {
    state = {  } 
    render() { 
        return (
        <ThemeProvider theme={darkTheme}>
            <SpeedDial
            ariaLabel="Menu"
            sx={{ position: "fixed", bottom: 16, right: 16 }}
            icon={<MenuIcon sx={{color:"black"}}/>} 
            >
                <SpeedDialAction tooltipOpen key="FAQ" tooltipTitle={"FAQ"} onClick={() => {window.location.href= "/faq"}} icon={<QuestionAnswerIcon />}/>
                <SpeedDialAction tooltipOpen key="Money" tooltipTitle={"Pricing"} onClick={() => {window.location.href= "/pricing"}} icon={<MoneyIcon />}/>
                <SpeedDialAction tooltipOpen key="Home" tooltipTitle={"Home"} onClick={() => {window.location.href= "/"}} icon={<HomeIcon />}/>
                    
            </SpeedDial>
      </ThemeProvider>
        );
    }
}
 
export default MenuComponent;