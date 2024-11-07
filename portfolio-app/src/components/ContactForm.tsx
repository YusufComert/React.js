import React, { useContext } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "../validations/Validation";
import emailjs from "emailjs-com";
import { ContactContext } from "../context/ContactProvider";
import ContactPhoto from "../assets/Contact.jpg";
import MapComponent from "./MapComponent";

interface FormValues {
  name: string;
  surname: string;
  email: string;
  message: string;
}

interface ContactFormProps {
  showMap: boolean; // Haritanın gösterilip gösterilmeyeceğini belirleyen prop
}

const ContactForm = ({ showMap }: ContactFormProps) => {
  const { setName, setSurname, setEmail, setMessage, Print, SendContactInfo } =
    useContext(ContactContext);

  const handleSubmit = async (
    values: FormValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    setName(values.name);
    setSurname(values.surname);
    setEmail(values.email);
    setMessage(values.message);
    Print();
    await SendContactInfo(values); // Form değerlerini gönderiyoruz
    emailjs
      .send(
        "service_rjtpk5r",
        "template_flsxgjp",
        { ...values },
        "6YOtoT8ht2k5pFcxr"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Mesajınız başarıyla gönderildi!");
          resetForm();
          setName("");
          setSurname("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
          alert("Mesaj gönderilirken bir hata oluştu!");
        }
      );
  };

  return (
    <div className="contact-form-container">
      {showMap && <MapComponent />}{" "}
      {/* Harita sadece showMap true ise görünecek */}
      <Box
        sx={{
          backgroundColor: "#ffffff",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          maxWidth: "1300px",
          margin: "70px auto",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{ marginBottom: "40px" }}
        >
          İletişim Formu
        </Typography>

        <Grid container spacing={2} alignItems="stretch">
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "stretch",
            }}
          >
            <Box
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={ContactPhoto}
                alt="Contact illustration"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "stretch",
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Formik
                initialValues={{
                  name: "",
                  surname: "",
                  email: "",
                  message: "",
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div>
                      <Field
                        as={TextField}
                        fullWidth
                        label="İsim"
                        name="name"
                        variant="outlined"
                        margin="normal"
                        error={touched.name && Boolean(errors.name)}
                        helperText={<ErrorMessage name="name" />}
                      />
                    </div>
                    <div>
                      <Field
                        as={TextField}
                        fullWidth
                        label="Soyisim"
                        name="surname"
                        variant="outlined"
                        margin="normal"
                        error={touched.surname && Boolean(errors.surname)}
                        helperText={<ErrorMessage name="surname" />}
                      />
                    </div>
                    <div>
                      <Field
                        as={TextField}
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        variant="outlined"
                        margin="normal"
                        error={touched.email && Boolean(errors.email)}
                        helperText={<ErrorMessage name="email" />}
                      />
                    </div>
                    <div>
                      <Field
                        as={TextField}
                        fullWidth
                        label="Mesaj"
                        name="message"
                        multiline
                        rows={6}
                        variant="outlined"
                        margin="normal"
                        error={touched.message && Boolean(errors.message)}
                        helperText={<ErrorMessage name="message" />}
                      />
                    </div>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      sx={{ mt: 2, width: "100%" }}
                    >
                      Gönder
                    </Button>
                  </Form>
                )}
              </Formik>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default ContactForm;
