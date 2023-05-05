import { Layout, Planet } from "@/components";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

const Home = () => {
  return (
    <Layout
      title={`Lautaro Chaar`}
      description={"Lautaro Chaar's web portfolio"}
      keywords={
        "Portfolio, Lautaro, Chaar, Web developer, HTML, CSS, JavaScript, React Js, Next Js, Home"
      }
    >
      <Box
        sx={{
          backgroundColor: "#74004C",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "calc(100vh - 130px)",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "10% 80% 10%" },
            gridTemplateRows: { xs: "90% 10%", sm: "90% 10%" },
            gridTemplateAreas: {
              sm: `
            "about home projects"
            "contact contact contact" 
            `,
            },
            height: "calc(100vh - 130px)",
            minHeight: { xs: "560px", lg: "650px" },
            width: "100%",
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontFamily: "Montserrat, sans-serif",
                width: "100%",
                maxWidth: { xs: "380px", sm: "640px", md: "704px" },
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 600,
                  fontFamily: "Montserrat, sans-serif",
                  color: "#1D1D1D",
                  fontSize: { xs: "60px", sm: "70px", md: "80px" },
                  width: "80%",
                  textAlign: "start",
                  textShadow: {
                    xs: "1px 1px #9A9A9A",
                    sm: "2px 2px #9A9A9A",
                  },
                  animation: "opacity .5s linear",
                }}
              >
                Hello!
              </Typography>
              <Typography
                variant="inherit"
                sx={{
                  fontWeight: 500,
                  fontSize: { xs: "18px", sm: "20px", md: "22px" },
                  width: "80%",
                  textAlign: "center",
                  color: "#1D1D1D",
                  animation: "opacity .5s linear backwards .25s",
                }}
              >
                My name is
              </Typography>
              <Typography
                variant="inherit"
                sx={{
                  fontWeight: 400,
                  fontSize: { xs: "18px", sm: "20px", md: "22px" },
                  color: "#E6E6E6",
                  width: { xs: "80%", sm: "410px", md: "436px" },
                  textAlign: "end",
                  textShadow: "2px 1px #1D1D1D",
                  animation: "opacity .5s linear backwards .50s",
                }}
              >
                Lautaro Chaar
              </Typography>
            </Box>
            <Planet />
            <Typography
              variant="h2"
              sx={{
                color: "#1D1D1D",
                fontWeight: 600,
                fontSize: { xs: "20px", sm: "22px", md: "24px" },
                fontFamily: "Montserrat, sans-serif",
                animation: "opacity .4s linear backwards 1s",
              }}
            >
              Welcome to my planet
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "#74004C",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gridArea: { sm: "about" },
            }}
          >
            <Link href="/about" passHref>
              <Button
                sx={{
                  padding: 0,
                  width: { xs: "150px" },
                  height: { sm: "260px" },
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                  "&:hover .page": {
                    color: "#E6E6E6",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    justifyContent: "center",
                    backgroundColor: "#74004C",
                    alignItems: "center",
                  }}
                >
                  <KeyboardArrowLeftIcon
                    sx={{
                      display: { xs: "none", sm: "flex" },
                      color: "#E6E6E6",
                    }}
                  />
                  <Typography
                    variant="h3"
                    className="page"
                    sx={{
                      color: "#9A9A9A",
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 500,
                      fontSize: { xs: "16px", sm: "18px", md: "20px" },
                      textTransform: "capitalize",
                      writingMode: { xs: "horizontal-tb", sm: "vertical-rl" },
                      textOrientation: { xs: "unset", sm: "upright" },
                      letterSpacing: "6px",
                    }}
                  >
                    About
                  </Typography>
                  <KeyboardArrowDownIcon
                    sx={{
                      display: { xs: "flex", sm: "none" },
                      color: "#E6E6E6",
                    }}
                  />
                </Box>
              </Button>
            </Link>
          </Box>
          <Box
            sx={{
              backgroundColor: "#74004C",
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              gridArea: "projects",
            }}
          >
            <Link href="/projects" passHref>
              <Button
                sx={{
                  padding: 0,
                  minWidth: "100%",
                  height: "260px",
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                  "&:hover .page": {
                    color: "#E6E6E6",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "#74004C",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h3"
                    className="page"
                    sx={{
                      color: "#9A9A9A",
                      fontSize: { sm: "18px", md: "20px" },
                      textTransform: "capitalize",
                      writingMode: { xs: "horizontal-tb", sm: "vertical-rl" },
                      textOrientation: { xs: "unset", sm: "upright" },
                      letterSpacing: "6px",
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    Projects
                  </Typography>
                  <KeyboardArrowRightIcon
                    sx={{
                      color: "#E6E6E6",
                    }}
                  />
                </Box>
              </Button>
            </Link>
          </Box>
          <Box
            sx={{
              backgroundColor: "#74004C",
              display: { xs: "none", sm: "flex" },
              gridArea: "contact",
              justifyContent: "center",
            }}
          >
            <Link href="/contact" passHref>
              <Button
                sx={{
                  padding: 0,
                  minWidth: "200px",
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                  "&:hover .page": {
                    color: "#E6E6E6",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "#74004C",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h3"
                    className="page"
                    sx={{
                      color: "#9A9A9A",
                      fontSize: { sm: "18px", md: "20px" },
                      textTransform: "capitalize",
                      letterSpacing: "6px",
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    Contact
                  </Typography>
                  <KeyboardArrowDownIcon
                    sx={{
                      color: "#E6E6E6",
                    }}
                  />
                </Box>
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
