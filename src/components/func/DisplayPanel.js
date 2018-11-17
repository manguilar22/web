import React from "react";
import Project from "./DisplayProject";
import Framework from "./DisplayFrameworks";
import {Panel,ListGroup,ListGroupItem} from "react-bootstrap";

const DisplayPanel = (props) => {
  return(
      <Panel bsStyle={"primary"} eventKey={props.key}>
          <Panel.Heading><Panel.Title toggle>{props.topic}</Panel.Title></Panel.Heading>
          <Panel.Body collapsible>
            <ListGroup>
                <ListGroupItem header={"Frameworks"}>
                    {props.frameworks.map((e,idx) => <Framework key={idx} logo={e.logo} name={e.name}/>)}}
                </ListGroupItem>
            </ListGroup>
              {props.projects.map((e,idx) => <Project key={idx}
                                                      status={e.status}
                                                      name={e.name}
                                                      link={e.link}
                                                      explain={e.explain}/>)}
          </Panel.Body>
      </Panel>
  );
};
export default DisplayPanel;