import React,{Component} from "react";
import {Panel,ListGroup,ListGroupItem} from "react-bootstrap";
import Project from "../func/DisplayProject";
import Framework from "../func/DisplayFrameworks";
import db from "../../json/data";

export default class Python extends Component {
    state = {db:db.Software.Python};
    render(){
        const {Frameworks,Projects} = this.state.db;
        return(
            <div>
                <Panel bsStyle={"primary"}>
                    <Panel.Heading><Panel.Title toggle>Python</Panel.Title></Panel.Heading>
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
}}