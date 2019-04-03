import React from "react";
import {Button,Panel} from "react-bootstrap";
import mission from "../../json/data";
const DisplayHome = (props) => {
    return (
    <div>
        <Button variant={"link"} onClick={props.click} style={{margin: "25px 25px"}}>Go Back</Button>

        <Panel bsStyle={"info"}>
            <Panel.Heading><Panel.Title className={"header"} toggle>Mission Statement</Panel.Title></Panel.Heading>
            <Panel.Collapse>
                <Panel.Body className={"text"}>
                    <blockquote style={{color:"black"}}>{mission.Home.info}</blockquote>
                </Panel.Body>
            </Panel.Collapse>
        </Panel>
    </div>
    );
};
export default DisplayHome;