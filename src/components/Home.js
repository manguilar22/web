import React,{Component} from "react";
import data from "../json/data.json";
import banner  from "../images/banner.svg";
import HomeStyle from "../css/HomeStyle.css";
import {Glyphicon,ResponsiveEmbed,Panel} from "react-bootstrap";

import icon from "../images/logo.svg";
import "../css/App.css";

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = data;
    }
    render(){

        const{Home} = this.state;

        return(
            <div style={HomeStyle} className={"Home"}>
                <img id={"banner"} src={banner} alt={"banner"}/>
                <ResponsiveEmbed><embed id={"banner"} src={banner}/></ResponsiveEmbed>
                <Panel bsStyle={"primary"}>
                    <Panel.Heading><Panel.Title componentClass={"h3"} toggle>Mission</Panel.Title></Panel.Heading>
                    <Panel.Collapse>=
                    <Panel.Body id="mission" componentClass={"blockquote"}>{Home.info}</Panel.Body>
                    </Panel.Collapse>
                </Panel>
                <footer id={"Copyright"}>
                    <p>&copy; {new Date().getFullYear()}</p>
                    <p><img className={"App-logo"} src={icon} alt={"atom"}/> Manuel Aguilar</p>
                    <p style={{color:"white"}}><Glyphicon style={{color:"#fff700",paddingRight:"5px"}} glyph={"envelope"}/>manguilar22@gmail.com</p>
                </footer>

            </div>
        );
    }

}