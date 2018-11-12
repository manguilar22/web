import React from "react";
import {Button,Panel} from "react-bootstrap";
import mission from "../../json/data";
import "../../css/MissionStatement.css";
const MissionStatement = (props) => {
    return(
        <div className={"MissionStatement"}>
            <Button bsStyle={"link"} bsSize={"large"} onClick={props.trigger}>Go Back </Button>
            <Panel bsStyle={"info"}>
                <Panel.Heading><Panel.Title className={"header"} toggle>Mission Statement</Panel.Title></Panel.Heading>
                <Panel.Collapse>
                <Panel.Body className={"text"}>
                    {mission.Home.info}
                </Panel.Body>
                </Panel.Collapse>
            </Panel>
        </div>
    );
};
export default MissionStatement;