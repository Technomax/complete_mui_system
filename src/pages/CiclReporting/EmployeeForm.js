import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";

import { useForm, Form } from "../../components/useForm";
import Controls from "../../components/controls/Controls";
import * as employeeService from "../../services/employeeService";

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];
const initialFValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departmentId: "",
  hireDate: new Date(),
  isPermanent: false,
};

export default function EmployeeForm(props) {
  const {addOrEdit,recordForEdit}=props;

  const validate = (fieldValues = values) => {
    //by default {} will erase all the error message. To preserve the previous error message will pass the spread variable
    let temp = { ...errors };
    //for single control validation if statement is added. By default all these field are present in fieldValues
    if ("fullName" in fieldValues)
      temp.fullName = fieldValues.fullName ? "" : "This field is required.";

    if ("email" in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ""
        : "Email is not valid.";

    if ("mobile" in fieldValues)
      temp.mobile =
        fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required.";

    if ("departmentId" in fieldValues)
      temp.departmentId =
        fieldValues.departmentId.length !== 0 ? "" : "This field is required.";
    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      //this will return the boolean indicating if there are any errors or not
      return Object.values(temp).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) 
    {
      addOrEdit(values,resetForm);
    }
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } = useForm(initialFValues, true, validate);
  useEffect(()=>{
    if(recordForEdit!=null)
    {
      setValues({
        ...recordForEdit
      })
    }
  },[recordForEdit])

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name="fullName"
            label="Full Name"
            value={values.fullName}
            onChange={handleInputChange}
            error={errors.fullName}
          />
          <Controls.Input
            name="email"
            label="Email Address"
            value={values.email}
            onChange={handleInputChange}
            error={errors.email}
          ></Controls.Input>

          <Controls.Input
            name="mobile"
            label="Mobile Number"
            value={values.mobile}
            onChange={handleInputChange}
            error={errors.mobile}
          ></Controls.Input>

          <Controls.Input
            name="city"
            label="City"
            value={values.city}
            onChange={handleInputChange}
          ></Controls.Input>
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroup
            label="gender"
            name="gender"
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems}
          />
          <Controls.Select
            name="departmentId"
            label="Department"
            value={values.departmentId}
            onChange={handleInputChange}
            options={employeeService.getDepartmentCollection()}
            error={errors.departmentId}
          />
          <Controls.DatePicker
            name="hireDate"
            label="Hire Date"
            value={values.hireDate}
            onChange={handleInputChange}
          />
          <Controls.Checkbox
            name="isPermanent"
            label="Permanent Employee"
            value={values.isPermanent}
            onChange={handleInputChange}
          />
          <div>
            <Controls.Button type="submit" text="Submit"></Controls.Button>
            <Controls.Button
              text="Reset"
              color="info"
              onClick={resetForm}
            ></Controls.Button>
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
