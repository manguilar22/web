import React,{Component} from "react";
import db from "../../json/data";
import DisplayPanel from "../func/DisplayPanel";
import {ListGroup, ListGroupItem, Panel} from "react-bootstrap";
import Framework from "../func/DisplayFrameworks";
import Project from "../func/DisplayProject";
export default class Java extends Component {
    state = {db:db.Software.Java};
    render(){
        const {Frameworks,Projects} = this.state.db;
        return(
            <Panel bsStyle={"primary"} eventKey={2}>
                <Panel.Heading><Panel.Title toggle>{"JAVA"}</Panel.Title></Panel.Heading>
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
            </Panel>        );
    }
}