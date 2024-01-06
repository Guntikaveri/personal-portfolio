import { Button, Grid, TextField } from "@mui/material";
import footerFrame from "./Assets/footerFrame.svg";
import footerLinks from "./Assets/footerLinks.svg";
import React, { useState } from "react";
import "./AddProject.css";
import ViewProject from "./ProjectDetails";

const AddProject = () => {
  const [name, setName] = useState(null);
  const [desc, setDesc] = useState(null);
  const [link, setLink] = useState(null);
  const [projectArr, setProjectArr] = useState([
    {
      name: "Project Name",
      link: "https://blog.planview.com/wp-content/uploads/2020/01/Top-6-Software-Development-Methodologies.jpg",
      desc: "You can also add in this description the type of the project, if it was for web, mobile, electron.",
    },
  ]);
  const addProject = () => {
    const obj = { name, link, desc };
    const arr = [...projectArr];
    arr.push(obj);
    console.log(arr);
    setProjectArr(arr);
  };

  return (
    <Grid>
      <p className="section-title">Add Project</p>
      <div className="form-container">
        <TextField
          id="outlined-basic"
          label="Project Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          id="outlined-basic"
          label="Project Link"
          variant="outlined"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
        />
        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          required
        />
        <div className="add-button-container">
          <Button
            className="add-button"
            type="submit"
            onClick={() => addProject()}
          >
            Add
          </Button>
        </div>
      </div>
      <img src={footerFrame} alt="frame" width={"100%"} />
      <ViewProject projectList={projectArr} />
      <img
        src={footerLinks}
        alt="frame"
        width={"100%"}
        style={{ height: "48px" }}
      />
      <img src={footerFrame} alt="frame" width={"100%"} />
    </Grid>
  );
};

export default AddProject;
