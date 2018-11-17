import React from "react";
import {Glyphicon} from "react-bootstrap";
import {AwesomeButtonSocial,AwesomeButton} from "react-awesome-button";
import "../../css/HomeButton.css";

const URL = "https://github.com/manguilar22/";
const HomeButton = (props) => {
    return (
        <div className={"HomeButton"}>
        <ul>
            <li><AwesomeButton type={"secondary"} size={"large"} bubbles={true} action={props.trigger}>
                <Glyphicon glyph={"book"}/> Mission</AwesomeButton></li>
            <li><AwesomeButtonSocial type={"github"} href={URL} bubbles={true} size={"large"}>Github</AwesomeButtonSocial></li>
            <li><AwesomeButtonSocial type={"instagram"} bubbles={true} size={"large"}>Instagram </AwesomeButtonSocial></li>
        </ul>
        </div>
    );
};
export default HomeButton;