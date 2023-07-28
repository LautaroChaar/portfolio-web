import { Layout } from "@/components";
import { Box, Typography } from "@mui/material";

const Instructions = () => {
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "calc(100vh - 0px)",
          backgroundImage: "url(/signal.png)",
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "50% 50%" },
            gridTemplateRows: {
              xs: "auto auto auto auto auto auto",
              md: "auto auto auto auto",
            },
            gridTemplateAreas: {
              md: `
        "projects projects"
        "panda offSide"
        "pokememo backend" 
        "instruction instruction"
        `,
            },
            minHeight: "calc(100vh - 0px)",
            width: "100%",
            background: "#000000d6",
            backgroundSize: "cover",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          <Box
            sx={{
              display: { xs: "flex", md: "grid" },
              justifyContent: "center",
              alignItems: "center",
              gridArea: { md: "projects" },
              textAlign: { md: "center" },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "16px", sm: "18px" },
                fontWeight: "bold",
                color: "#ececec",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Projects
            </Typography>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "grid" },
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              gridArea: { md: "panda" },
              justifyItems: { md: "center" },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "14px", sm: "16px" },
                fontWeight: "bold",
                color: "#f76a6a",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Panda Bar
            </Typography>
            <Typography
              variant="inherit"
              sx={{
                color: "#ececec",
                fontSize: { xs: "12px", sm: "14px" },
                fontWeight: "inherit",
                width: "80%",
                textAlign: "center",
              }}
            >
              This project was created for {`Coderhouse's`}{" "}
              {`'web development'`} course.
            </Typography>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "grid" },
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              gridArea: { md: "offSide" },
              justifyItems: { md: "center" },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "14px", sm: "16px" },
                fontWeight: "bold",
                color: "#f76a6a",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Off side
            </Typography>
            <Typography
              variant="inherit"
              sx={{
                color: "#ececec",
                fontSize: { xs: "12px", sm: "14px" },
                fontWeight: "inherit",
                width: "80%",
                textAlign: "center",
              }}
            >
              This project was created for {`Coderhouse's`} {`'React Js'`}{" "}
              course.
            </Typography>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "grid" },
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              gridArea: { md: "pokememo" },
              justifyItems: { md: "center" },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "14px", sm: "16px" },
                fontWeight: "bold",
                color: "#f76a6a",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Pokememo
            </Typography>
            <Typography
              variant="inherit"
              sx={{
                color: "#ececec",
                fontSize: { xs: "12px", sm: "14px" },
                fontWeight: "inherit",
                width: "80%",
                textAlign: "center",
              }}
            >
              This project contains 2 different types of memory games.
            </Typography>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "grid" },
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              gridArea: { md: "backend" },
              justifyItems: { md: "center" },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "14px", sm: "16px" },
                fontWeight: "bold",
                color: "#f76a6a",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Marvel Searcher
            </Typography>
            <Typography
              variant="inherit"
              sx={{
                color: "#ececec",
                fontSize: { xs: "12px", sm: "14px" },
                fontWeight: "inherit",
                width: "80%",
                textAlign: "center",
              }}
            >
              This project was created for {`Leniolabs Bootcamp 2023`}.
            </Typography>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "grid" },
              justifyContent: "center",
              alignItems: "center",
              gridArea: { md: "instruction" },
              justifyItems: { md: "center" },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "14px", sm: "16px" },
                fontWeight: "bold",
                color: "#ececec",
                width: "80%",
                textAlign: "center",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Drag the project VHS (Video Home System) onto the VCR (video
              cassette) to view it.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Instructions;
