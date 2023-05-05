import { Layout } from "@/components";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <Layout
      title={`About`}
      description={"Description about Lautaro Chaar"}
      keywords={
        "Portfolio, Lautaro, Chaar, Web developer, HTML, CSS, JavaScript, React Js, Next Js, About"
      }
    >
      <Box
        sx={{
          backgroundColor: "#1D1D1D",
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
            gridTemplateRows: { xs: "10% 80% 10%", sm: "90% 10%" },
            gridTemplateAreas: {
              sm: `
        "home about projects"
        "contact contact contact" 
        `,
            },
            height: "calc(100vh - 130px)",
            minHeight: { xs: "820px", lg: "650px" },
            width: "100%",
            justifyItems: "center",
            "@keyframes opacity": {
              "0%": {
                opacity: 0,
              },
              "100%": {
                opacity: 1,
              },
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
          <Box
            sx={{
              backgroundColor: "#1D1D1D",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gridArea: { sm: "home" },
            }}
          >
            <Link href="/" passHref>
              <Button
                sx={{
                  width: { xs: "150px", sm: "100%" },
                  height: { sm: "260px" },
                  padding: 0,
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
                    backgroundColor: "#1D1D1D",
                    alignItems: "center",
                    flexDirection: { xs: "column", sm: "row" },
                  }}
                >
                  <KeyboardArrowUpIcon
                    sx={{
                      display: { xs: "flex", sm: "none" },
                      color: "#9a9a9a",
                    }}
                  />
                  <KeyboardArrowLeftIcon
                    sx={{
                      display: { xs: "none", sm: "flex" },
                      color: "#9a9a9a",
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
                    Home
                  </Typography>
                </Box>
              </Button>
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", lg: "50% 50%" },
                gridTemplateRows: {
                  xs: "auto auto auto auto auto",
                  lg: "auto auto auto",
                },
                gridTemplateAreas: {
                  lg: `
                "title title"
                "paragraph1 paragraph3"
                "paragraph2 paragraph4" 
                `,
                },
                rowGap: "16px",
                columnGap: { lg: "60px" },
                margin: "16px 0",
                width: "80%",
                maxWidth: { xs: "450px", sm: "550px", lg: "810px" },
                height: "fit-content",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  gridArea: { lg: "title" },
                  marginBottom: "20px",
                  position: "relative",
                  animation: "left .3s linear backwards",
                  "& .imgCv": {
                    width: { sm: "80px", xl: "100px" },
                    height: { xs: "60px", sm: "80px", xl: "100px" },
                    borderRadius: "50%",
                    border: "2px solid #e6e6e6",
                  },
                }}
              >
                <Image
                  src="/imgCv.png"
                  alt="profile-picture"
                  className="imgCv"
                  width={60}
                  height={60}
                  priority
                />
                <Typography
                  variant="h1"
                  sx={{
                    color: "#74004c",
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: { xs: "24px", sm: "26px", lg: "46px" },
                    fontWeight: 800,
                    marginLeft: "20px",
                    letterSpacing: "2px",
                    textShadow: {
                      xs: "1px 1px #9A9A9A",
                      lg: "2px 2px #9A9A9A",
                    },
                  }}
                >
                  About Me
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gridArea: { lg: "paragraph1" },
                  animation: "opacity 1s linear backwards .6s",
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    color: "#9a9a9a",
                    fontWeight: 600,
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: { xs: "14px", sm: "16px" },
                    textAlign: "left",
                  }}
                >
                  {`Hi, I´m `}
                  <Typography
                    variant="inherit"
                    sx={{
                      color: "#e6e6e6",
                      display: "contents",
                    }}
                  >
                    Lautaro Chaar
                  </Typography>
                  {`, a junior frontend developer with a passion to keep learning and
              improving in this beautiful field. I specialize in HTML, CSS,
              JavaScript and React.`}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gridArea: { lg: "paragraph2" },
                  animation: "opacity 1s linear backwards .6s",
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    color: "#9a9a9a",
                    fontWeight: 600,
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: { xs: "14px", sm: "16px" },
                    textAlign: "left",
                  }}
                >
                  {`As a junior frontend developer, I understand the importance of `}
                  <Typography
                    variant="inherit"
                    sx={{
                      color: "#e6e6e6",
                      display: "contents",
                    }}
                  >
                    constantly learning
                  </Typography>
                  {` and expanding my skill set. I would love to collaborate with more
              experienced developers to gain valuable information and experience
              that will help me grow in my career.`}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gridArea: { lg: "paragraph3" },
                  animation: "opacity 1s linear backwards .6s",
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    color: "#9a9a9a",
                    fontWeight: 600,
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: { xs: "14px", sm: "16px" },
                    textAlign: "left",
                  }}
                >
                  {`I consider myself a `}
                  <Typography
                    variant="inherit"
                    sx={{
                      color: "#e6e6e6",
                      display: "contents",
                    }}
                  >
                    responsible person, eager to learn and face challenges
                  </Typography>
                  {`. When I am not coding I enjoy playing sports, playing the guitar
              and watching movies.`}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gridArea: { lg: "paragraph4" },
                  animation: "opacity 1s linear backwards .6s",
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    color: "#9a9a9a",
                    fontWeight: 600,
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: { xs: "14px", sm: "16px" },
                    textAlign: "left",
                  }}
                >
                  {`I´m excited about the prospect of working with other people who
              are passionate about building great websites and solving complex problems. If you would like more information about me, please `}
                  <Typography
                    variant="inherit"
                    sx={{
                      color: "#e6e6e6",
                      display: "contents",
                    }}
                  >
                    {`don´t hesitate to contact me.`}
                  </Typography>
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "#1D1D1D",
              gridArea: { sm: "projects" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link href="/projects" passHref>
              <Button
                sx={{
                  width: { xs: "150px", sm: "100%" },
                  height: { sm: "260px" },
                  padding: 0,
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
                    backgroundColor: "#1D1D1D",
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
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
                  <KeyboardArrowDownIcon
                    sx={{
                      display: { xs: "flex", sm: "none" },
                      color: "#9a9a9a",
                    }}
                  />
                  <KeyboardArrowRightIcon
                    sx={{
                      display: { xs: "none", sm: "flex" },
                      color: "#9a9a9a",
                    }}
                  />
                </Box>
              </Button>
            </Link>
          </Box>
          <Box
            sx={{
              width: "100%",
              backgroundColor: "#1D1D1D",
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
                    justifyContent: "center",
                    backgroundColor: "#1D1D1D",
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
                    Contact
                  </Typography>
                  <KeyboardArrowDownIcon
                    sx={{
                      color: "#9a9a9a",
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

export default About;
