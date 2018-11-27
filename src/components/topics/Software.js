import React,{Component} from "react";
import Javascript from "../hoc/Javascript";
import Python from "../hoc/Python";
import Java from "../hoc/Java";
import db from "../../json/data";
import {Jumbotron} from "react-bootstrap";
import Mathematica from "../hoc/Mathematica";
export default class Software extends Component {
    state={info:db.Software.info};
    render(){
    const {info} = this.state;
        return(
            <div>
                <blockquote style={{color:"white"}}>{info}</blockquote>
                <Javascript/>
                <Java/>
                <Python/>
                <Mathematica/>
            </div>
        );
    }
}