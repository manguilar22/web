import React,{Component} from "react";
import {Panel,Well} from "react-bootstrap";
import data from "../../json/data";
import Project from "../hoc/DisplayProject";
import mathematica from "../../css/logos/Mathematica_Logo.svg";
import java from "../../css/logos/Java_Logo.svg";
import python from "../../css/logos/python-seeklogo.com.svg";
import babel from "../../css/logos/Babel_Logo.svg";
import "../../css/software.css";
export default class Software extends Component {
    state = {data: data.Software};
    render(){
        const {Python,Javascript,Java,Mathematica,info} = this.state.data;
        return(
            <div>
                <blockquote>{info}</blockquote>
                <Panel bsStyle={"primary"}>
                    <Panel.Heading>
                        <Panel.Title className={"header"} toggle><img src={babel} width={50} height={50}/> Javascript</Panel.Title>
                    </Panel.Heading>
                    <Panel.Collapse>
                        <Panel.Body>
                            <Well>
                            <h4>Frameworks</h4>
                            <ol>
                                <li>Express</li>
                                <li>React</li>
                                <li>Meteor</li>
                            </ol>
                            </Well>
                        </Panel.Body>
                    {Javascript.Projects.map((e,idx) => <Project key={idx}
                                                        status={e.status}
                                                        name={e.name}
                                                        link={e.link}
                                                        explain={e.explain}/>)}
                    </Panel.Collapse>
                </Panel>
                <Panel bsStyle={"secondary"}>
                    <Panel.Heading>
                        <Panel.Title className={"header"} toggle><img src={python} width={50} height={50}/> Python</Panel.Title>
                    </Panel.Heading>
                    <Panel.Collapse>
                        <Panel.Body>
                            <Well>
                            <h4>Frameworks</h4>
                            <ol>
                                <li>Dash</li>
                                <li>Jupyter</li>
                            </ol>
                            </Well>
                        </Panel.Body>
                        {Python.Projects.map((e,idx) => <Project key={idx}
                                                                     status={e.status}
                                                                     name={e.name}
                                                                     link={e.link}
                                                                     explain={e.explain}/>)}
                    </Panel.Collapse>
                </Panel>
                <Panel bsStyle={"secondary"}>
                    <Panel.Heading><Panel.Title className={"header"} toggle><img src={java} width={50} height={50}/> Java</Panel.Title></Panel.Heading>
                    <Panel.Collapse>
                    <Panel.Body>
                        {Java.Projects.map((e,idx) => <Project key={idx}
                                                                 status={e.status}
                                                                 name={e.name}
                                                                 link={e.link}
                                                                 explain={e.explain}/>)}
                    </Panel.Body>
                    </Panel.Collapse>
                </Panel>
                <Panel bsStyle={"primary"}>
                    <Panel.Heading><Panel.Title className={"header"} toggle><img src={mathematica} width={50} height={50}/> Mathematica</Panel.Title></Panel.Heading>
                <Panel.Body collapsible>
                    <Well>
                        <h4>Wolfram|Alpha</h4>
                    </Well>
                    {Mathematica.Projects.map((e,idx) => <Project key={idx}
                                                                  status={e.status} name={e.name}
                                                                  link={e.link} explain={e.explain}/>)}
                </Panel.Body>
                </Panel>
            </div>
        );
    }
}
