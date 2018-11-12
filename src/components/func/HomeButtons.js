import React from "react";
import {ButtonGroup,Button,Glyphicon} from "react-bootstrap";
import {AwesomeButton} from "react-awesome-button";
import "react-awesome-button/src/styles/styles.scss";
import "../../css/HomeButton.css";

const URL = "https://github.com/manguilar22/";
const HomeButton = (props) => {
    return (
        <div className={"HomeButton"}>
        <ButtonGroup>
            <Button bsStyle={"primary"} bsSize={"large"} onClick={props.trigger}><Glyphicon glyph={"star"}/> Mission</Button>
            <AwesomeButton type={"github"} href={URL} bubbles={true}><Glyphicon glyph={"book"}/> Github</AwesomeButton>
            <AwesomeButton type={"instagram"} bubbles={true}><Glyphicon glyph={"camera"}/> Instagram </AwesomeButton>
        </ButtonGroup>
        </div>
    );
};
export default HomeButton;