import React, {Component} from "react";
import DisplayHome from "../hoc/DisplayHome";
import DisplayMission from "../hoc/DisplayMission";

export default class Home extends Component {

    constructor(props){
        super();
        this.state = {trigger:true};
    this.handleClick=this.handleClick.bind(this);
    }

    handleClick = () => this.setState(p => ({trigger:!p.trigger}));

    render= () => this.state.trigger?<DisplayHome click={this.handleClick}/>:<DisplayMission click={this.handleClick}/>;
}