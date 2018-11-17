import React,{Component} from "react";
import Javascript from "../hoc/Javascript";
import Python from "../hoc/Python";
import Java from "../hoc/Java";
import db from "../../json/data";
export default class Software extends Component {
    state = {db:db.Software.Java};
    render(){
        const {Projects,Frameworks} = this.state.db;
        return(
            <div>
                <Javascript/>
                <Java/>
                <Python/>
            </div>
        );
    }
}