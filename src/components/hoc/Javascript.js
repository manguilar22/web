import React,{Component} from "react";
import db from "../../json/data";
import {Panel,ListGroup,ListGroupItem} from "react-bootstrap";
import Framework from "../func/DisplayFrameworks";
import Project from "../func/DisplayProject";
import "../../css/logos.css";
export default class Javascript extends Component {
    state = {db:db.Software.Javascript};
    render(){
        const {Frameworks,Projects} = this.state.db;
        return(
            <div>
                <Panel bsStyle={"primary"}>
                    <Panel.Heading><Panel.Title toggle>Javascript</Panel.Title></Panel.Heading>
                    <Panel.Body collapsible>
                        <ListGroup>
                                <ListGroupItem header={"Frameworks"}>
                                {Frameworks.map((e,idx) => <Framework key={idx} logo={e.logo} name={e.name}/>)}
                                </ListGroupItem>
                        </ListGroup>
                        {Projects.map((e,idx) => <Project key={idx}
                                                          status={e.status}
                                                          name={e.name}
                                                          link={e.link}
                                                          explain={e.explain}/>)}
                    </Panel.Body>
                </Panel>
            </div>);
    }
}