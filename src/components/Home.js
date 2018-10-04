import React,{Component} from "react";
import data from "../json/data.json";
import banner  from "../images/banner.svg";
import {Glyphicon,ResponsiveEmbed,Panel} from "react-bootstrap";

import icon from "../images/logo.svg";
import "../css/HomeStyle.css";
export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = data;
    }
    render(){

        const{Home} = this.state;

        return(
            <div className={"Home"}>
                <img className={"banner"} src={banner} alt={"banner"}/>
                <ResponsiveEmbed><embed className={"sample"} src={banner}/></ResponsiveEmbed>
                <Panel bsStyle={"primary"}>
                    <Panel.Heading><Panel.Title componentClass={"h1"} toggle>Mission</Panel.Title></Panel.Heading>
                    <Panel.Collapse>
                    <Panel.Body componentClass={"blockquote"}>{Home.info}</Panel.Body>
                    </Panel.Collapse>
                </Panel>
                <footer className={"Copyright"}>
                    <p>&copy; {new Date().getFullYear()}</p>
                    <p><img className={"App-logo"} src={icon} alt={"atom"}/> Manuel Aguilar</p>
                    <p style={{color:"white"}}><Glyphicon style={{color:"#fff700",paddingRight:"5px"}} glyph={"envelope"}/>manguilar22@gmail.com</p>
                </footer>

            </div>
        );
    }

}