import { Button } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 0,
    margin: theme.spacing(0.5),
  },
  secondary: {
    backgroundColor: theme.palette.secondary.light,
    "& .MuiButton-label": {
      color: theme.palette.secondary.main,
    },
  },
  primary: {
    backgroundColor: theme.palette.primary.light,
    "& .MiuButton-label": {
      color: theme.palette.primary.main,
    },
  },
}));
export default function ActionButton(props) {
  const { color, children, onClick } = props;
  const classes=useStyles();
  return <Button onClick={onClick} className={`${classes.root} ${classes[color]}`}>{children}</Button>;
}
