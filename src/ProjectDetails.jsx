import { Button, Card, Grid } from "@mui/material";
import React from "react";
import "./AddProject.css";
import "./ProjectDetails.css";

const ProjectDetails = ({ projectList }) => {
  return (
    <Grid paddingInline={"226px"}>
      <p className="section-title">Projects</p>
      {projectList?.map((each) => {
        return (
          <Card style={{ maxHeight: "524px", marginBlock: "40px" }}>
            <div className="project-detail">
              <Grid width={"50%"} paddingInline={"25px"}>
                <p className="project-title">{each.name}</p>
                <p className="project-desc">{each.desc}</p>
                <Button className="whitebtn">View Project</Button>
              </Grid>
              <Grid width={"50%"}>
                <img
                  style={{ maxHeight: "524px", maxWidth: "600px" }}
                  src={each.link}
                  alt="project1"
                />
              </Grid>
            </div>
          </Card>
        );
      })}
    </Grid>
  );
};

export default ProjectDetails;
