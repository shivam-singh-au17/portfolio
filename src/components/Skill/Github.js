import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  const colourTheme = {
    light: ["#ecd9fc", "#80dfff", "#33ccff", "#00ace6", "#006080"],
    dark: ["#ecd9fc", "#80dfff", "#33ccff", "#00ace6", "#006080"],
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Git <strong className="purple">Contributions</strong>
      </h1>
      <GitHubCalendar
        username="shivam-singh-au17"
        blockSize={15}
        blockMargin={5}
        colorScheme="dark"
        theme={colourTheme}
        fontSize={16}
        style={{ background: "transparent", color: "#ffffff" }}
      />
    </Row>
  );
}

export default Github;
