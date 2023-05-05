import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Container,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const pages = ["Home", "About", "Projects", "Contact"];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const router = useRouter();

  if (router.asPath === "/instructions") {
    return <></>;
  }

  return (
    <AppBar
      position="static"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70px",
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
        color: "#ececec",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{
                color: "#9A9A9A",
                ...(router.asPath === "/projects" && {
                  color: "#1D1D1D",
                }),
                ...(router.asPath === "/contact" && {
                  color: "#1D1D1D",
                }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiPaper-root": {
                  height: "40vh",
                  width: "40vw",
                  minWidth: "160px",
                  ...(router.asPath === "/" && {
                    backgroundColor: "#74004c",
                  }),
                  ...(router.asPath === "/about" && {
                    backgroundColor: "#1d1d1d",
                  }),
                  ...(router.asPath === "/projects" && {
                    backgroundColor: "#9a9a9a",
                  }),
                  ...(router.asPath === "/contact" && {
                    backgroundColor: "#e6e6e6",
                  }),
                  left: "0px !important",
                  top: "70px !important",
                },
                "& .MuiList-root": {
                  height: "100%",
                  padding: "0",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    "&:hover .section": {
                      ...(router.asPath === "/" && {
                        color: "#e6e6e6",
                      }),
                      ...(router.asPath === "/about" && {
                        color: "#e6e6e6",
                      }),
                      ...(router.asPath === "/projects" && {
                        color: "#e6e6e6",
                      }),
                      ...(router.asPath === "/contact" && {
                        color: "#1d1d1d",
                      }),
                    },
                  }}
                >
                  <Typography
                    textAlign="center"
                    sx={{
                      width: "100%",
                      "& .section": {
                        textDecoration: "none",
                        display: "flex",
                        justifyContent: "center",
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: 500,
                        ...(router.asPath === "/" && {
                          color: "#9a9a9a",
                        }),
                        ...(router.asPath === "/about" && {
                          color: "#9a9a9a",
                        }),
                        ...(router.asPath === "/projects" && {
                          color: "#1d1d1d",
                        }),
                        ...(router.asPath === "/contact" && {
                          color: "#9a9a9a",
                        }),
                      },
                    }}
                  >
                    <Link href={`/${page.toLowerCase()}`} className="section">
                      {page}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
