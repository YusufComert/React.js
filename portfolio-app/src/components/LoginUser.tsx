import React, { useState } from "react";
import {
  TextField,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { useFormik, FormikHelpers } from "formik";
import { UserSchema } from "../validations/Validation";
import { IoMdArrowBack } from "react-icons/io";
import { useContext } from "react";
import { UserContext } from "../context/UserProvider";

interface FormValues {
  email: string;
  password: string;
}

function LoginUser() {
  const [showPassword, setShowPassword] = useState(false);
  const [adminLoginError, setAdminLoginError] = useState(false);

  const { setUserMail, setUserPassword, ControlLoginUser, userWrongLogin } =
    useContext(UserContext);

  const onSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    setUserMail(values.email);
    setUserPassword(values.password);
    await ControlLoginUser();
  };
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: UserSchema,
    onSubmit,
  });

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handleLoginClick = () => {
    handleSubmit();
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "70vh",
        backgroundColor: "#f5f5f5",
        width: 500,
        padding: 2,
        marginLeft: 0,
        marginTop: 2,
      }}
    >
      <Card
        sx={{
          width: 350,
          padding: 4,
          boxShadow: 3,
          borderRadius: 2,
          position: "relative",
          overflow: "visible",
        }}
      >
        <form onSubmit={handleSubmit}>
          <CardContent>
            <Typography variant="h5" align="center" gutterBottom>
              User Login
            </Typography>
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
            {userWrongLogin && (
              <Typography
                color="error"
                align="center"
                sx={{ color: "red", marginTop: 2 }}
              >
                {userWrongLogin}
              </Typography>
            )}
          </CardContent>
          <Box display="flex" flexDirection="row" gap={10}>
            <Box display="flex" justifyContent="center" mt={2} marginLeft={1.5}>
              <Button sx={{ width: 120 }} variant="contained" color="primary">
                Login
              </Button>
            </Box>
            <Box display="flex" justifyContent="center" mt={2}>
              <Button
                sx={{ width: 120 }}
                variant="contained"
                color="primary"
                type="submit"
                onClick={() => handleSubmit()}
              >
                Login
              </Button>
            </Box>
          </Box>
        </form>
        <Box
          sx={{
            position: "absolute",
            bottom: -80,
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#f5f5f5",
            width: 50,
            height: 50,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: 3,
            border: "1px solid #ccc",
          }}
        >
          <IconButton sx={{ border: "none" }}>
            <IoMdArrowBack size={24} />
          </IconButton>
        </Box>
      </Card>
    </Box>
  );
}

export default LoginUser;
