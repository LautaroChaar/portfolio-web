import { Box } from "@mui/material";

const Planet = () => {
  return (
    <Box
      sx={{
        width: { xs: "200px", lg: "260px" },
        height: { xs: "200px", lg: "260px" },
        marginBottom: "20px",
        "@keyframes planet": {
          "0%": {
            background: "linear-gradient(-90deg, #631946 50%, #3d0628 50%)",
          },
          "50%": {
            background: "linear-gradient(-90deg, #631946 50%, #3d0628 50%)",
          },
          "50.1%": {
            background: "linear-gradient(90deg, #631946 50%, #3d0628 50%)",
          },
          "99%": {
            background: "linear-gradient(90deg, #631946 50%, #3d0628 50%)",
          },
          "99.1%": {
            background: "linear-gradient(-90deg, #631946 50%, #3d0628 50%)",
          },
          "100%": {
            background: "linear-gradient(-90deg, #631946 50%, #3d0628 50%)",
          },
        },
        "@keyframes planetRotate": {
          "0%": {
            transform: "scaleX(-1)",
            backgroundColor: "#631946",
          },
          "25%": {
            transform: "scaleX(0)",
            backgroundColor: "#631946",
          },
          "25.1%": {
            transform: "scaleX(0)",
            backgroundColor: "#3d0628",
          },
          "50%": {
            transform: "scaleX(1)",
            backgroundColor: "#3d0628",
          },
          "50.1%": {
            transform: "scaleX(1)",
            backgroundColor: "#3d0628",
          },
          "75%": {
            transform: "scaleX(0)",
            backgroundColor: "#3d0628",
          },
          "75.1%": {
            transform: "scaleX(0)",
            backgroundColor: "#631946",
          },
          "99%": {
            transform: "scaleX(-1)",
            backgroundColor: "#631946",
          },
          "99.1%": {
            transform: "scaleX(-1)",
            backgroundColor: "#631946",
          },
          "100%": {
            transform: "scaleX(-1)",
            backgroundColor: "#631946",
          },
        },
      }}
    >
      <Box
        className="planet"
        sx={{
          height: "100%",
          borderRadius: "50%",
          backgroundColor: "#631946",
          animation: "planet 14s infinite linear",
          boxShadow: "14px 14px 36px -10px rgba(3, 3, 3, 0.95)",
          "&::after": {
            content: "no-open-quote",
            borderRadius: "50%",
            height: { xs: "200px", lg: "260px" },
            width: { xs: "200px", lg: "260px" },
            inset: "0px",
            backgroundColor: "#3d0628",
            display: "block",
            position: "relative",
            animation: "planetRotate 14s infinite linear",
          },
        }}
      />
    </Box>
  );
};

export default Planet;
