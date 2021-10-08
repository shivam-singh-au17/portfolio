import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLink, BiGitRepoForked } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" style={{ margin: "15px" }} href={props.link} target="_blank">
          <BiGitRepoForked /> &nbsp;
          {props.isBlog ? "View Blog" : "View Code"}
        </Button>
        <Button variant="primary" style={{ margin: "15px" }} href={props.demoLink} target="_blank">
          <BiLink /> &nbsp;
          {props.isBlog ? "View Blog" : "View Demo"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
