import background from "./Assets/background.svg";
import { Button, Grid } from "@mui/material";

import "./App.css";
import AddProject from "./AddProject";
import { useRef } from "react";

function App() {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Grid container display={"flex"} flexDirection={"column"} maxWidth={"100%"}>
      <Grid className="header-section">
        <Grid className="header">Madelyn Torff</Grid>
        <Grid className="nav-links">
          <Grid fontSize={"18px"}>About</Grid>
          <Grid
            fontSize={"18px"}
            style={{ cursor: "pointer" }}
            onClick={handleClick}
          >
            Projects
          </Grid>
          <Grid fontSize={"18px"}>Contacts</Grid>
        </Grid>
      </Grid>
      <Grid className="user-info">
        <Grid marginLeft={"120px"} width={"486px"}>
          <p className="intro">UI/UX Designer</p>
          <p className="title">Hello, my name is Madelyn Torff</p>
          <p className="subheadLine">
            Short text with details about you, what you do or your professional
            career. You can add more information on the about page.
          </p>
          <Button onClick={() => handleClick()} className="yellowbtn">
            Projects
          </Button>
          <Button className="whitebtn">LinkedIn</Button>
        </Grid>
        <img
          src={background}
          style={{ marginTop: "-56px" }}
          alt="logo"
          width={720}
          height={629}
        />
      </Grid>
      <AddProject />
      <Grid ref={ref}></Grid>
    </Grid>
  );
}

export default App;
