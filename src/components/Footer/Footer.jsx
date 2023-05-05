import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box } from "@mui/material";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

  if (router.asPath === "/instructions") {
    return <></>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "end",
        backgroundColor: "#74004C",
        ...(router.asPath === "/about" && {
          backgroundColor: "#1D1D1D",
        }),
        ...(router.asPath === "/projects" && {
          backgroundColor: "#9A9A9A",
        }),
        ...(router.asPath === "/contact" && {
          backgroundColor: "#E6E6E6",
        }),
        height: "60px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100px",
          justifyContent: "space-evenly",
          alignItems: "center",
          backgroundColor: "#74004C",
          ...(router.asPath === "/about" && {
            backgroundColor: "#1D1D1D",
          }),
          ...(router.asPath === "/projects" && {
            backgroundColor: "#9A9A9A",
          }),
          ...(router.asPath === "/contact" && {
            backgroundColor: "#E6E6E6",
          }),
        }}
      >
        <a
          referrerPolicy="noreferrer"
          rel="noreferrer"
          href="https://github.com/LautaroChaar"
          target="_blank"
        >
          <GitHubIcon
            sx={{
              display: "block",
              color: "#9A9A9A",
              ...(router.asPath === "/projects" && {
                color: "#1d1d1d",
              }),
              "&:hover": {
                color: "#e6e6e6",
                ...(router.asPath === "/projects" && {
                  color: "#e6e6e6",
                }),
                ...(router.asPath === "/contact" && {
                  color: "#1D1D1D",
                }),
              },
            }}
          />
        </a>
        <a
          referrerPolicy="noreferrer"
          rel="noreferrer"
          href="https://www.linkedin.com/in/lautarochaar/"
          target="_blank"
        >
          <LinkedInIcon
            sx={{
              display: "block",
              color: "#9A9A9A",
              ...(router.asPath === "/projects" && {
                color: "#1d1d1d",
              }),
              "&:hover": {
                color: "#e6e6e6",
                ...(router.asPath === "/projects" && {
                  color: "#e6e6e6",
                }),
                ...(router.asPath === "/contact" && {
                  color: "#1D1D1D",
                }),
              },
            }}
          />
        </a>
      </Box>
    </Box>
  );
};

export default Footer;
