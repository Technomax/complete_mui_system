import {
  FormControl,
  FormControlLabel,
  Checkbox as MuiCheckbox,
} from "@mui/material";
import React from "react";

const convertToDefEventPara=(name,value)=>({
    target:{
        name,value
    }
});

export default function Checkbox(props) {
  const { name, label, value, onChange } = props;
  return (
    <FormControl  variant="outlined">
      <FormControlLabel
        control={
          <MuiCheckbox
            name={name}
            color="primary"
            checked={value}
            onChange= {e=>onChange(convertToDefEventPara(name, e.target.checked))}
          />}
          label={label}
      />
    </FormControl>
  );
}
