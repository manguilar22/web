import React from "react";
import {Button,Panel} from "react-bootstrap";
import mission from "../../json/data";
const DisplayHome = (props) => {
    return (
    <div>
        <Panel bsStyle={"info"}>
            <Panel.Heading><Panel.Title className={"header"} toggle>Mission Statement</Panel.Title></Panel.Heading>
            <Panel.Collapse>
                <Panel.Body className={"text"}>
                    {mission.Home.info}
                </Panel.Body>
            </Panel.Collapse>
        </Panel>
        <Button bsStyle={"link"} onClick={props.click}>Go Back</Button>
    </div>
    );
};
export default DisplayHome;