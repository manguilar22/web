import React from "react";
import {ListGroup,ListGroupItem} from "react-bootstrap";
import {AwesomeButtonSocial} from "react-awesome-button";
import "react-awesome-button/src/styles/styles.scss";
const Project = (props) => {
    return(
        <div key={props.key}>
            <ListGroup >
                <ListGroupItem header={props.name} bsStyle={props.status}>
                    <AwesomeButtonSocial bubbles={true} type={"github"} href={props.link}>{props.name}</AwesomeButtonSocial>
                </ListGroupItem>
            </ListGroup>
            {props.explain}
        </div>
    );
};
export default Project;