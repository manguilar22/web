import React from "react";
import {Image,ButtonGroup,Glyphicon} from "react-bootstrap";
import {AwesomeButtonSocial,AwesomeButton} from "react-awesome-button";
import "../../css/copyright.css";
import banner from "../../css/images/banner.svg";
const DisplayHome = (props) => {
    const github="https://www.github.com/manguilar22";
    return (
        <div>
            <Image className={"Banner"} src={banner} alt={"banner"}/>
            <div className={"ButtonGroup"}>
                <ButtonGroup>
                    <AwesomeButton action={props.click} size={"large"} bubbles={true}><Glyphicon glyph="lock"/> Mission</AwesomeButton>
                    <AwesomeButtonSocial type={"github"} size={"large"} href={github} bubbles={true}>Github</AwesomeButtonSocial>
                    <AwesomeButton type={"link"}  size={"large"} bubbles={true}><Glyphicon glyph={"cloud"}/> Blog </AwesomeButton>
                </ButtonGroup>
            </div>

            <footer>
                <p className={"copyright"}>&copy; {new Date().getFullYear()}</p>
                <p className={"copyright"}><Glyphicon glyph={"envelope"}/> manguilar22@gmail.com</p>
            </footer>
        </div>
    );
};
export default DisplayHome;