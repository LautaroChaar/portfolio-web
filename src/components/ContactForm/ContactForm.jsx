import { FormInput } from "@/components";
import { sendContactForm } from "@/lib/api";
import EastIcon from "@mui/icons-material/East";
import { Box, Button, Snackbar, Typography } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import { Form, Formik } from "formik";
import { forwardRef, useState } from "react";
import { object, string } from "yup";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ContactForm = () => {
  const [openSuccessAlert, setOpenSuccessAlert] = useState(false);
  const [openErrorAlert, setOpenErrorAlert] = useState(false);
  const [sending, setSending] = useState(false);

  const validateSchema = object({
    clientName: string()
      .max(20, "Maximum 20 characters.")
      .required("*Name required."),
    clientEmail: string()
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Invalid email."
      )
      .required("*Email required."),
    clientMessage: string()
      .max(600, "Maximum 600 characters.")
      .required("*Message required."),
  });

  const handleClickContactForm = async (values) => {
    setSending(true);
    try {
      await sendContactForm(values);
      setSending(false);
      setOpenSuccessAlert(true);
    } catch (error) {
      setSending(false);
      setOpenErrorAlert(true);
    }
  };

  const handleCloseSuccessAlert = () => {
    setOpenSuccessAlert(false);
  };

  const handleCloseErrorAlert = () => {
    setOpenErrorAlert(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        fontFamily: "Montserrat, sans-serif",
        animation: "left .3s linear backwards",
        "& .formik": {
          gridArea: "contact",
        },
        "& .orderForm": {
          display: "flex",
          width: "100%",
          height: { xs: "100%", md: "314px" },
          justifyContent: "center",
          alignItems: "center",
        },
        "& .formContainer": {
          border: "2px solid #74004c",
          width: "80%",
          height: "90%",
          maxWidth: { xs: "320px", sm: "400px", md: "1000px" },
          maxHeight: { xs: "576px", md: "314px" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        },
        "& .formLegend": {
          padding: "0 12px",
          textAlign: { md: "start" },
        },
        "& .ContactMe": {
          color: "#1d1d1d",
          fontWeight: 600,
          fontSize: { xs: "20px", sm: "22px", md: "24px" },
          margin: 0,
        },
        "@keyframes left": {
          "0%": {
            left: "-10000px",
          },
          "100%": {
            left: "0px",
          },
        },
      }}
    >
      <Formik
        initialValues={{
          clientName: "",
          clientEmail: "",
          clientMessage: "",
        }}
        validationSchema={validateSchema}
        onSubmit={async (values, { resetForm }) => {
          await handleClickContactForm(values);
          resetForm({ values: "" });
        }}
        className="formik"
      >
        {() => (
          <Form className="orderForm">
            <fieldset className="formContainer">
              <legend className="formLegend">
                <h1 className="ContactMe">Contact me</h1>
              </legend>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: { xs: "space-evenly", md: "space-betwen" },
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    maxHeight: "270px",
                    maxWidth: { md: "700px" },
                  }}
                >
                  <FormInput
                    label="Name"
                    name="clientName"
                    placeholder="Enter your name"
                    type="text"
                  />
                  <FormInput
                    label="Email"
                    name="clientEmail"
                    placeholder="Enter your email"
                    type="email"
                  />
                </Box>
                <FormInput
                  label="Message"
                  name="clientMessage"
                  placeholder="Write your message here..."
                  type="text"
                />
              </Box>
              <Button
                sx={{
                  border: "none",
                  background: "none",
                  marginTop: "20px",
                  margin: 0,
                  height: "60px",
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                  "&:hover .contact": {
                    color: "#1d1d1d",
                  },
                }}
                type="submit"
                disabled={sending ? true : false}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {" "}
                  {sending ? (
                    <CircularProgress
                      color="secondary"
                      size={18}
                      sx={{
                        marginRight: "6px",
                        color: "#74004c",
                      }}
                    />
                  ) : (
                    <EastIcon
                      fontSize="small"
                      sx={{
                        marginRight: "6px",
                        color: "#74004c",
                      }}
                    />
                  )}
                  <Typography
                    variant="inherit"
                    sx={{
                      fontFamily: "Montserrat, sans-serif",
                      transition:
                        "color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                      color: "#9a9a9a",
                      fontWeight: 600,
                      fontSize: {
                        xs: "14px",
                        sm: "16px",
                      },
                      textTransform: "capitalize",
                    }}
                    className="contact"
                  >
                    {sending ? "Sending..." : "Contact"}
                  </Typography>
                </Box>
              </Button>
            </fieldset>
          </Form>
        )}
      </Formik>
      <Snackbar
        open={openSuccessAlert}
        autoHideDuration={3000}
        onClose={handleCloseSuccessAlert}
      >
        <Alert
          onClose={handleCloseSuccessAlert}
          severity="success"
          sx={{ width: "100%" }}
        >
          Message sent succesfully!
        </Alert>
      </Snackbar>
      <Snackbar
        open={openErrorAlert}
        autoHideDuration={3000}
        onClose={handleCloseErrorAlert}
      >
        <Alert
          onClose={handleCloseErrorAlert}
          severity="error"
          sx={{ width: "100%" }}
        >
          Failed to send message!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactForm;
