import React from "react";
import SideMenu from "../components/SideMenu";
import Header from "../components/Header";
import "./App.css";
import { makeStyles } from "@mui/styles";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Employees from "../pages/Employees/Employees";

// https://www.youtube.com/watch?v=m-2_gb_3L7Q
// https://cssinjs.org/jss-plugin-nested?v=v10.9.0
//https://mui.com/customization/default-theme/#main-content
//https://stackoverflow.com/questions/69323581/react-mui-v5-appbar-background-color-not-changing
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every

const theme = createTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
    background: {
      default: "#f4f5fd",
    },
  },
  shape: {
    borderRadius: "12px",
  },
  props: {
    MuiIconButton: {
      disableRipple: true,
    },
  },
});

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
        <Employees/>
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
