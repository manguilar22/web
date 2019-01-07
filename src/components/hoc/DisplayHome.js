import React from "react";
import {ResponsiveEmbed,ButtonGroup} from "react-bootstrap";
import {AwesomeButtonSocial,AwesomeButton} from "react-awesome-button";
import "../../css/copyright.css";
import banner from "../../css/images/banner.svg";
const DisplayHome = (props) => {
    const github="https://www.github.com/manguilar22";
    return (
        <div>
            <div className={"Banner"}>
            <ResponsiveEmbed a16by9={true}>
                <embed type={"image/svg+xml"} src={banner}/>
            </ResponsiveEmbed>
            </div>

            <div className={"ButtonGroup"}>
                <ButtonGroup>
                <AwesomeButton action={props.click} size={"large"} bubbles={true}>Mission</AwesomeButton>
            <AwesomeButtonSocial type={"github"} size={"large"} href={github} bubbles={true}>Github</AwesomeButtonSocial>
                </ButtonGroup>
            </div>

            <footer>
                <p>&copy; {new Date().getFullYear()}</p>
                <p>manguilar22@gmail.com</p>
            </footer>
        </div>
    );
};
export default DisplayHome;