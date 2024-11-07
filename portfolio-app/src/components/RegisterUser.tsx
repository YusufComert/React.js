import React, { useState } from "react";
import {
  TextField,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  IconButton,
  RadioGroup,
  FormLabel,
  FormControl,
  Radio,
  FormControlLabel,
} from "@mui/material";
import { useFormik, FormikHelpers } from "formik";
import { RegisterSchema } from "../validations/Validation";
import { IoMdArrowBack } from "react-icons/io";
import { useContext } from "react";
import { RegisterContext } from "../context/RegisterProvider";
import { useNavigate } from "react-router-dom";

interface FormValues {
  name: string;
  middleName: string;
  surname: string;
  birthDate: string;
  gender: string;
  phoneNumber: string;
  email: string;
  password: string;
  repassword: string;
}

function RegisterUser() {
  const [showPassword, setShowPassword] = useState(false);
  const [adminLoginError, setAdminLoginError] = useState(false);

  const Navigate = useNavigate();

  const {
    setUserNameInfo,
    setUserMiddleNameInfo,
    setUserSurnameInfo,
    setUserPhoneInfo,
    setUserDateInfo,
    setUserMail,
    setUserPassword,
    setUserRepassword,
    setUserGenderInfo,
    ControlRegister,
    userSuccessRegister,
  } = useContext(RegisterContext);

  const onSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    const birthDateAsDate = new Date(values.birthDate);

    setUserNameInfo(values.name);
    setUserMiddleNameInfo(values.middleName);
    setUserSurnameInfo(values.surname);
    setUserPhoneInfo(values.phoneNumber);
    setUserDateInfo(birthDateAsDate);
    setUserMail(values.email);
    setUserPassword(values.password);
    setUserRepassword(values.repassword);
    setUserGenderInfo(values.gender);

    await ControlRegister(values);
  };
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      middleName: "",
      surname: "",
      birthDate: "",
      gender: "",
      phoneNumber: "",
      email: "",
      password: "",
      repassword: "",
    },
    validationSchema: RegisterSchema,
    onSubmit,
  });

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const GoToLogin = () => {};

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 3,
        width: 600,
        backgroundColor: "#f5f5f5",
        marginLeft: 0,
      }}
    >
      <Card
        sx={{
          maxWidth: 500,
          width: "100%",
          padding: 3,
          boxShadow: 3,
          borderRadius: 2,
          mb: 3,
        }}
      >
        <form onSubmit={handleSubmit}>
          <CardContent>
            <Typography variant="h5" align="center" gutterBottom>
              User Registration
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 0,
                mb: 2,
              }}
            >
              <TextField
                fullWidth
                margin="normal"
                label="Name"
                name="name"
                value={values.name}
                onChange={handleChange}
                variant="outlined"
                helperText={errors.name}
                error={!!errors.name}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Middle Name"
                name="middleName"
                value={values.middleName}
                onChange={handleChange}
                variant="outlined"
                helperText={errors.middleName}
                error={!!errors.middleName}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Surname"
                name="surname"
                value={values.surname}
                onChange={handleChange}
                variant="outlined"
                helperText={errors.surname}
                error={!!errors.surname}
              />
            </Box>
            <TextField
              fullWidth
              margin="normal"
              label="Birth Date"
              name="birthDate"
              type="date"
              value={values.birthDate}
              onChange={handleChange}
              variant="outlined"
              helperText={errors.birthDate}
              error={!!errors.birthDate}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Phone"
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={handleChange}
              variant="outlined"
              helperText={errors.phoneNumber}
              error={!!errors.phoneNumber}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              name="email"
              value={values.email}
              onChange={handleChange}
              variant="outlined"
              helperText={errors.email}
              error={!!errors.email}
            />
            <Box
              sx={{
                display: "flex",
                gap: 2,
                mb: 2,
              }}
            >
              <TextField
                fullWidth
                margin="normal"
                label="Password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange}
                variant="outlined"
                helperText={errors.password}
                error={!!errors.password}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Repassword"
                name="repassword"
                type={showPassword ? "text" : "password"}
                value={values.repassword}
                onChange={handleChange}
                variant="outlined"
                helperText={errors.repassword}
                error={!!errors.repassword}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mb: 2,
              }}
            >
              <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                  name="gender"
                  value={values.gender}
                  onChange={handleChange}
                  row
                >
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
                {errors.gender && (
                  <Typography color="error" variant="caption">
                    {errors.gender}
                  </Typography>
                )}
              </FormControl>
            </Box>
            {userSuccessRegister && (
              <Typography
                color="error"
                align="center"
                sx={{ color: "red", marginTop: 2 }}
                marginBottom={5}
              >
                {userSuccessRegister}
              </Typography>
            )}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: 2,
              }}
            >
              <Button
                sx={{
                  flex: 1,
                }}
                variant="contained"
                color="primary"
                onClick={() => Navigate("/LoginUser")}
              >
                Login
              </Button>
              <Button
                sx={{
                  flex: 1,
                }}
                variant="contained"
                color="primary"
                onClick={() => handleSubmit()}
              >
                Register
              </Button>
            </Box>
          </CardContent>
        </form>
      </Card>
      <Box
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          width: 50,
          height: 50,
          borderRadius: "50%",
          backgroundColor: "rgb(200,200,200)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IconButton sx={{ border: "none" }}>
          <IoMdArrowBack size={24} />
        </IconButton>
      </Box>
    </Box>
  );
}

export default RegisterUser;
