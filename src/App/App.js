import React from "react";
import { Route, Routes } from "react-router-dom";
import MiniDrawer from "../components/MiniDrawer";
import "./App.css";
import { makeStyles } from "@mui/styles";
import { Box, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Employees from "../pages/Employees/Employees";
import CiclEmployees from "../pages/CiclReporting/Employees";
import EccEmployees from "../pages/EccUtils/Employees";

//https://mui.com/getting-started/templates/

// https://www.youtube.com/watch?v=m-2_gb_3L7Q
// https://create-react-app.dev/docs/deployment/#github-pages
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
    // paddingLeft: "320px",
    width: "100%",
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <MiniDrawer />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <div className={classes.appMain}>
            <Routes>
              <Route path="/" element={<Employees />} />
              <Route path="/complete_mui_system" element={<Employees />} />
              <Route path="/eccutils" element={<EccEmployees />} />
              <Route path="/ciclreporting" element={<CiclEmployees />} />
            </Routes>
          </div>
          <CssBaseline />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
export default App;
