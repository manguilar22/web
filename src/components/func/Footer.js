import icon from "../../images/logo.svg";
import {Glyphicon} from "react-bootstrap";
import React from "react";
import "../../css/App.css";
import "../../css/Footer.css";
const Footer = (props) => {
    return(
    <footer className={"Copyright"}>
        <p className={"copyright"}>&copy; {new Date().getFullYear()}</p>
        <p className={"name"}><img className={"App-logo"} src={icon} alt={"atom"}/> Manuel Aguilar</p>
        <p className={"email"}><Glyphicon className={"email-logo"} style={{color: "#fff700", paddingRight: "5px"}} glyph={"envelope"}/>manguilar22@gmail.com
        </p>
    </footer>
    );
};
export default Footer;