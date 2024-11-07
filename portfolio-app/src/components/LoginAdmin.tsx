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
import { AdminSchema } from "../validations/Validation";
import { IoMdArrowBack } from "react-icons/io";
import { useContext } from "react";
import { AdminContext } from "../context/AdminProvider";
import { useNavigate } from "react-router-dom";
interface FormValues {
  email: string;
  password: string;
}

function LoginAdmin() {
  const [showPassword, setShowPassword] = useState(false);
  const [adminLoginError, setAdminLoginError] = useState(false);

  const { setAdminMail, setAdminPassword, ControlLoginAdmin, adminWrongLogin } =
    useContext(AdminContext);

  const Navigate = useNavigate();
  const onSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    setAdminMail(values.email);
    setAdminPassword(values.password);
    await ControlLoginAdmin();
  };
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: AdminSchema,
    onSubmit,
  });

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
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
              Admin Login
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
            {adminWrongLogin && (
              <Typography
                color="error"
                align="center"
                sx={{ color: "red", marginTop: 2 }}
              >
                {adminWrongLogin}
              </Typography>
            )}
          </CardContent>
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
        </form>
      </Card>
      <Box
        sx={{
          position: "absolute",
          bottom: 110,
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "rgb(200,200,200)",
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
    </Box>
  );
}

export default LoginAdmin;
