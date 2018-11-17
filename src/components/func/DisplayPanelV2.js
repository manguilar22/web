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
                        {props.frameworks}
                    </ListGroupItem>
                </ListGroup>
                {props.projects}
            </Panel.Body>
        </Panel>
    );
};
export default DisplayPanel;