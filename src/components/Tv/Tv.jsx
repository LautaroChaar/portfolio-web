import { Box } from "@mui/material";
import { useState } from "react";

const Tv = ({ urlProject, handleClickSearchButton }) => {
  const [url, setUrl] = useState("");

  const handleChange = (event) => {
    setUrl(event.target.value);
  };

  return (
    <Box
      sx={{
        height: { xs: "600px", lg: "500px" },
        width: { xs: "80%", lg: "90%" },
        backgroundColor: "tranparent",
        border: "6px solid #1d1d1d",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        marginBottom: "12px",
        minWidth: "240px",
        maxWidth: "1201px",
        "& .iframe": {
          width: "100%",
          height: "100%",
          border: "none",
          borderBottomLeftRadius: "12px",
          borderBottomRightRadius: "12px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          "& .inputSearch": {
            width: "80%",
            borderTopLeftRadius: "13px",
            backgroundColor: "#ececec",
            border: "1px solid #1d1d1d",
            height: "20px",
          },
          "& .buttonSearch": {
            width: "20%",
            fontSize: "10px",
            borderTopRightRadius: "13px",
            backgroundColor: "#ececec",
            border: "1px solid #1d1d1d",
            borderLeft: "none",
            height: "20px",
          },
          "& .inputSearch:focus": {
            outline: "none",
            borderBottom: "2px solid #9a6ca3",
          },
        }}
      >
        <input type="search" className="inputSearch" onChange={handleChange} />
        <button
          onClick={() => {
            handleClickSearchButton(url);
          }}
          className="buttonSearch"
        >
          Search
        </button>
      </Box>
      <iframe className="iframe" src={urlProject} />
    </Box>
  );
};

export default Tv;
