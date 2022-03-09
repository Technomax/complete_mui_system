import { Button as MuiButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles=makeStyles(theme=>({
  root:{
    margin:theme.spacing(0.5),
    textTransform:'none',
  },
}));

export default function Button(props) {
  const classes=useStyles();

  const { text, size, color, variant, onClick, ...other } = props;
  return (
    <MuiButton
      variant={variant || "contained"}
      size={size || "large"}
      color={color || "primary"}
      onClick={onClick}
      {...other}
      classes={{root:classes.root}}
    >
      {text}
    </MuiButton>
  );
}
