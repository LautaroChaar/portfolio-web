import { ContactForm, Layout } from "@/components";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

const Contact = () => {
  return (
    <Layout
      title={`Contact`}
      description={"Complete the form and contact me!"}
      keywords={
        "Portfolio, Lautaro, Chaar, Web developer, HTML, CSS, JavaScript, React Js, Next Js, Contact"
      }
    >
      <Box
        sx={{
          backgroundColor: "#E6E6E6",
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
            gridTemplateRows: { xs: "10% 90%", sm: "90% 10%" },
            gridTemplateAreas: {
              sm: `
        "about contact projects"
        "home home home" 
        `,
            },
            height: "calc(100vh - 130px)",
            minHeight: { xs: "600px", sm: "660px", md: "450px" },
            width: "100%",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#E6E6E6",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gridArea: { sm: "projects" },
            }}
          >
            <Link href="/projects" passHref>
              <Button
                sx={{
                  padding: 0,
                  minWidth: "100%",
                  width: { xs: "150px" },
                  height: { sm: "260px" },
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                  "&:hover .page": {
                    color: "#1d1d1d",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    justifyContent: "center",
                    backgroundColor: "#E6E6E6",
                    alignItems: "center",
                  }}
                >
                  <KeyboardArrowUpIcon
                    sx={{
                      display: { xs: "flex", sm: "none" },
                      color: "#74004c",
                    }}
                  />
                  <Typography
                    className="page"
                    variant="h3"
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
                    Projects
                  </Typography>
                  <KeyboardArrowRightIcon
                    sx={{
                      display: { xs: "none", sm: "flex" },
                      color: "#74004c",
                    }}
                  />
                </Box>
              </Button>
            </Link>
          </Box>
          <ContactForm />
          <Box
            sx={{
              backgroundColor: "#E6E6E6",
              display: { xs: "none", sm: "flex" },
              gridArea: "about",
              alignItems: "center",
            }}
          >
            <Link href="/about" passHref>
              <Button
                sx={{
                  padding: 0,
                  minWidth: "100%",
                  height: "260px",
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                  "&:hover .page": {
                    color: "#1d1d1d",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "#E6E6E6",
                    alignItems: "center",
                  }}
                >
                  <KeyboardArrowLeftIcon
                    sx={{
                      color: "#74004c",
                    }}
                  />
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
                    About
                  </Typography>
                </Box>
              </Button>
            </Link>
          </Box>
          <Box
            sx={{
              width: "100%",
              backgroundColor: "#E6E6E6",
              display: { xs: "none", sm: "flex" },
              gridArea: "home",
              justifyContent: "center",
            }}
          >
            <Link href="/" passHref>
              <Button
                sx={{
                  padding: 0,
                  minWidth: "200px",
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                  "&:hover .page": {
                    color: "#1d1d1d",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "#E6E6E6",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
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
                    Home
                  </Typography>
                  <KeyboardArrowDownIcon
                    sx={{
                      color: "#74004c",
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

export default Contact;
