import { Box, Typography } from "@mui/material";

const VHSProject = ({ text }) => {
  return (
    <Box
      sx={{
        width: { xs: "200px", sm: "250px" },
        height: { xs: "24px", sm: "34px" },
        display: "flex",
        margin: "10px",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1d1d1d",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        border: "1px solid #1d1d1d",
        "&:hover": {
          backgroundColor: "rgb(90, 90, 90)",
        },
      }}
    >
      <Box
        sx={{
          width: { xs: "150px", sm: "200px" },
          height: { xs: "16px", sm: "20px" },
          display: "flex",
          justifyContent: "center",
          sm: "12px",
          alignItems: "center",
          textOrientation: "upright",
          backgroundColor: "#e6e6e6",
          border: "1px solid #1d1d1d",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "10px", sm: "12px", md: "14px" },
            fontWeight: 600,
            color: "#74004c",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default VHSProject;
