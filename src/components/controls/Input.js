import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles=makeStyles(theme=>({
  root:{
  color:'warning'
  },
}));

export default function Input(props) {
  const classes=useStyles();
  const { name, label, value,error=null, onChange,...other } = props;
  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      {...other}
      {...(error && {error:true, helperText:error})}
    />
  );
}
