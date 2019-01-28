import React from "react";
import {ListGroup,ListGroupItem} from "react-bootstrap";
import {AwesomeButtonSocial} from "react-awesome-button";

const Project = (props) => {
    return(
        <div key={props.key}>
            <ListGroup>
                <ListGroupItem header={props.name} bsStyle={props.status}>
                    <AwesomeButtonSocial bubbles={true}
                                         type={"github"}
                                         href={props.link}>{props.name}</AwesomeButtonSocial>
                </ListGroupItem>
            <p>{props.explain}</p>
            </ListGroup>
        </div>
    );
};
export default Project;