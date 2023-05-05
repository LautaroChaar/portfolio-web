import { Box } from "@mui/material";
import { ErrorMessage, useField } from "formik";

const FormInput = ({ label, placeholder, ...props }) => {
  const [field] = useField(props);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column" },
        color: "#1D1D1D",
        animation: "opacity 1s linear .4s backwards",
        alignItems: { xs: "center", md: "start" },
        width: "80%",
        "& .formLabel": {
          margin: "6px",
        },
        "& .formInput": {
          fontSize: "12px",
          width: "80%",
          maxWidth: { md: "372px" },
          border: "1px solid #9a9a9a",
          textAlign: "center",
          background: "none",
          color: "#9a9a9a",
          marginBottom: "6px",
          fontWeight: 500,
          padding: "10px",
          fontFamily: "Montserrat, sans-serif",
        },
        "& .h2Label": {
          color: "#74004c",
          fontWeight: 500,
          fontSize: { xs: "14px", sm: "16px" },
          margin: 0,
        },
        "& .textArea": {
          fontSize: "12px",
          width: "80%",
          maxWidth: { md: "372px" },
          border: "1px solid #9a9a9a",
          textAlign: "center",
          background: "none",
          color: "#9a9a9a",
          marginBottom: "6px",
          fontWeight: 500,
          padding: "10px",
          fontFamily: "Montserrat, sans-serif",
          height: { sm: "90px", md: "130px" },
        },
        "& .formInput:focus": {
          outline: "none",
          border: "1px solid #1d1d1d",
          color: "#1d1d1d",
        },
        "& .textArea:focus": {
          outline: "none",
          border: "1px solid #1d1d1d",
          color: "#1d1d1d",
        },
        "@keyframes opacity": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      }}
    >
      <label className="formLabel">
        <h2 className="h2Label">{label}</h2>
      </label>
      {label === "Message" ? (
        <>
          <textarea
            cols={30}
            rows={10}
            placeholder={placeholder}
            className="textArea"
            {...field}
            {...props}
            autoComplete="off"
          />
          <ErrorMessage
            name={field.name}
            render={(msg) => (
              <Box
                sx={{
                  color: "#c83737",
                  fontSize: { xs: "10px", sm: "12px" },
                  fontWeight: "500",
                }}
              >
                {msg}
              </Box>
            )}
          />
        </>
      ) : (
        <>
          <input
            placeholder={placeholder}
            className="formInput"
            {...field}
            {...props}
            autoComplete="off"
          />
          <ErrorMessage
            name={field.name}
            render={(msg) => (
              <Box
                sx={{
                  color: "#c83737",
                  fontSize: { xs: "10px", sm: "12px" },
                  fontWeight: "500",
                }}
              >
                {msg}
              </Box>
            )}
          />
        </>
      )}
    </Box>
  );
};

export default FormInput;
