import { Layout, Tv, VHSProject } from "@/components";
import { useWindowSize } from "@/hooks";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    id: "1",
    text: "Panda Bar",
    url: "https://lautarochaar.github.io/panda-bar/",
  },
  {
    id: "2",
    text: "Off side",
    url: "https://offside-3e506.web.app/",
  },
  {
    id: "3",
    text: "Pokememo",
    url: "https://pokememo-app.onrender.com/",
  },
  {
    id: "4",
    text: "Backend API",
    url: "https://api-coder-wb79.onrender.com/api/documentation",
  },
];

const Projects = () => {
  const [dataProjects, setDataProjects] = useState(projects);
  const [inputVHS, setInputVHS] = useState([]);
  const [urlProject, setUrlProject] = useState("/instructions");

  const windowSize = useWindowSize();

  const dragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    if (
      source.index !== destination.index &&
      source.droppableId === destination.droppableId
    ) {
      setDataProjects((prevProject) =>
        reorder(prevProject, source.index, destination.index)
      );
    }

    if (
      source.droppableId === "projectsVHS" &&
      destination.droppableId === "vhsInput"
    ) {
      if (inputVHS.length === 0) {
        const vhs = dataProjects.splice(source.index, 1);

        setInputVHS(vhs);
        setUrlProject(vhs[0].url);
        return;
      } else {
        const vhs = dataProjects.splice(source.index, 1);
        setDataProjects([...dataProjects, inputVHS[0]]);
        setInputVHS(vhs);
        setUrlProject(vhs[0].url);
      }
    }

    if (
      source.droppableId === "vhsInput" &&
      destination.droppableId === "projectsVHS"
    ) {
      dataProjects.splice(destination.index, 0, inputVHS[0]);
      setInputVHS([]);
      setUrlProject("/instructions");
      return;
    }
  };

  const reorder = (dataProjects, startIndex, endIndex) => {
    const result = [...dataProjects];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const handleClickSearchButton = (value) => {
    setUrlProject(value);
  };

  return (
    <Layout
      title={`Projects`}
      description={"Look at Lautaro Chaar's Projects"}
      keywords={
        "Portfolio, Lautaro, Chaar, Web developer, HTML, CSS, JavaScript, React Js, Next Js, Projects"
      }
    >
      <Box
        sx={{
          backgroundColor: "#9A9A9A",
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
            height: "calc(100vh - 130px)",
            minHeight: {
              xs: "1120px",
              sm: "1050px",
              md: "980px",
              lg: "800px",
            },
            width: "100%",
            gridTemplateColumns: { xs: "1fr", sm: "10% 80% 10%" },
            gridTemplateRows: { xs: "10% 80% 10%", sm: "90% 10%" },
            gridTemplateAreas: {
              sm: `
        "about projects home"
        "contact contact contact" 
        `,
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
          <Box
            sx={{
              backgroundColor: "#9A9A9A",
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
                    color: "#e6e6e6",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "#9A9A9A",
                    alignItems: "center",
                    width: "100%",
                    flexDirection: { xs: "column", sm: "row" },
                  }}
                >
                  <KeyboardArrowUpIcon
                    sx={{
                      color: "#1d1d1d",
                      display: { xs: "flex", sm: "none" },
                    }}
                  />
                  <KeyboardArrowLeftIcon
                    sx={{
                      color: "#1d1d1d",
                      display: { xs: "none", sm: "flex" },
                    }}
                  />
                  <Typography
                    className="page"
                    variant="h3"
                    sx={{
                      color: "#1d1d1d",
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
                </Box>
              </Button>
            </Link>
          </Box>
          <DragDropContext onDragEnd={dragEnd}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minHeight: {
                  xs: "890px",
                  lg: "736px",
                },
                margin: "10px 0",
                animation: "opacity 1s linear backwards",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  width: "100%",
                  maxWidth: { lg: "1410px" },
                  maxHeight: { xs: "1410px" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Tv
                    urlProject={urlProject}
                    handleClickSearchButton={handleClickSearchButton}
                  />
                  <Droppable droppableId="vhsInput">
                    {(droppableProvided, snapshot) => (
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-evenly",
                          alignItems: "center",
                          height: {
                            xs: "40px",
                            sm: "50px",
                          },
                          width: {
                            xs: "250px",
                            sm: "300px",
                          },
                          borderRadius: "10px",
                          border: "2px solid #1d1d1d",
                          marginBottom: { xs: "12px", xl: "0px" },
                          backgroundColor: "#e6e6e6",
                        }}
                        {...droppableProvided.droppableProps}
                        ref={droppableProvided.innerRef}
                      >
                        <Box
                          sx={{
                            borderRadius: "30px",
                            width: { xs: "10px", sm: "14px" },
                            height: { xs: "10px", sm: "14px" },
                            border: "1px solid #1d1d1d",
                            background:
                              urlProject !== "/instructions"
                                ? "#b4ff94"
                                : "#f76a6a",
                          }}
                        />
                        <Box
                          sx={{
                            height: {
                              xs: "24px",
                              sm: "34px",
                            },
                            width: {
                              xs: "200px",
                              sm: "250px",
                            },
                            border: "1px solid #1d1d1d",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            background: snapshot.isDraggingOver
                              ? "#e1fbff"
                              : "#e6e6e6",
                          }}
                        >
                          <Box>
                            {inputVHS.map((vhs, index) => (
                              <Draggable
                                key={vhs.id}
                                draggableId={vhs.id}
                                index={index}
                              >
                                {(draggableProvided) => (
                                  <Box
                                    {...draggableProvided.draggableProps}
                                    ref={draggableProvided.innerRef}
                                    {...draggableProvided.dragHandleProps}
                                  >
                                    <VHSProject text={vhs.text} />
                                  </Box>
                                )}
                              </Draggable>
                            ))}
                            {droppableProvided.placeholder}
                          </Box>
                        </Box>
                      </Box>
                    )}
                  </Droppable>
                </Box>
                <Droppable
                  droppableId="projectsVHS"
                  direction={
                    windowSize >= 1512 ||
                    (windowSize >= 1200 && urlProject !== "/instructions")
                      ? "horizontal"
                      : "vertical"
                  }
                >
                  {(droppableProvided) => (
                    <Box
                      sx={{
                        maxWidth: { sm: "552px", lg: "fit-content" },
                        height: "fit-content",
                        width: {
                          xs: "250px",
                          sm: "80%",
                          md: "90%",
                          xl: "100%",
                        },
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "12px",
                        margin: { xl: "12px 6px 0 6px" },
                      }}
                      {...droppableProvided.droppableProps}
                      ref={droppableProvided.innerRef}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: { xs: "column", sm: "row" },
                          flexWrap: { sm: "wrap" },
                          alignItems: "center",
                          height: "100%",
                          justifyContent: "space-evenly",
                          width: "100%",
                          border: "2px solid #1d1d1d",
                          boxShadow:
                            "rgb(101 101 101 / 50%) 0px 0px 0px 4px inset",
                          backgroundColor: "#60606087",
                        }}
                      >
                        {dataProjects.map((project, index) => (
                          <Draggable
                            key={project.id}
                            draggableId={project.id}
                            index={index}
                          >
                            {(draggableProvided) => (
                              <Box
                                {...draggableProvided.draggableProps}
                                ref={draggableProvided.innerRef}
                                {...draggableProvided.dragHandleProps}
                              >
                                <VHSProject text={project.text} />
                              </Box>
                            )}
                          </Draggable>
                        ))}
                        {droppableProvided.placeholder}
                      </Box>
                    </Box>
                  )}
                </Droppable>
              </Box>
            </Box>
          </DragDropContext>
          <Box
            sx={{
              gridArea: { sm: "contact" },
              alignItems: "center",
              backgroundColor: "#9A9A9A",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link href="/contact" passHref>
              <Button
                sx={{
                  padding: 0,
                  width: { xs: "150px", sm: "200px" },
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                  "&:hover .page": {
                    color: "#e6e6e6",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "#9A9A9A",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    className="page"
                    variant="h3"
                    sx={{
                      color: "#1d1d1d",
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 500,
                      fontSize: { xs: "16px", sm: "18px", md: "20px" },
                      textTransform: "capitalize",
                      letterSpacing: "6px",
                    }}
                  >
                    Contact
                  </Typography>
                  <KeyboardArrowDownIcon
                    sx={{
                      color: "#1d1d1d",
                    }}
                  />
                </Box>
              </Button>
            </Link>
          </Box>
          <Box
            sx={{
              backgroundColor: "#9a9a9a",
              display: { xs: "none", sm: "flex" },
              gridArea: "home",
              alignItems: "center",
            }}
          >
            <Link href="/" passHref>
              <Button
                sx={{
                  padding: 0,
                  minWidth: "100%",
                  height: { sm: "260px" },
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                  "&:hover .page": {
                    color: "#e6e6e6",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "#9a9a9a",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h3"
                    className="page"
                    sx={{
                      color: "#1d1d1d",
                      fontSize: { sm: "18px", md: "20px" },
                      textTransform: "capitalize",
                      writingMode: "vertical-rl",
                      textOrientation: "upright",
                      letterSpacing: "6px",
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    Home
                  </Typography>
                  <KeyboardArrowRightIcon
                    sx={{
                      color: "#1d1d1d",
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

export default Projects;
