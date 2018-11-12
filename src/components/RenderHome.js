import React,{Component} from "react";
import MissionStatement from "./func/MissionStatement";
import Home from "./hoc/HOME";

export default class RenderHome extends Component {
    constructor(props) {
        super(props);
        this.state = {trigger: true};
        this.onClick = this.onClick.bind(this);
    }

    onClick = () => this.setState(p => ({trigger: !p.trigger}));

    render(){
        const {trigger} = this.state;
        return trigger ? <Home trigger={this.onClick}/> : <MissionStatement trigger={this.onClick}/>;
    }
}