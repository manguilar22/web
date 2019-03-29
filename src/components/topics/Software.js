import React,{Component} from "react";
import {Panel} from "react-bootstrap";
import {AwesomeButton} from "react-awesome-button";
import data from "../../json/data";
import Project from "../hoc/DisplayProject";
import Frameworks from "../hoc/Frameworks";
import DisplayCert from "../hoc/DisplayCert";
import mathematica from "../../css/logos/Mathematica_Logo.svg";
import java from "../../css/logos/Java_Logo.svg";
import python from "../../css/logos/python-seeklogo.com.svg";
import babel from "../../css/logos/Babel_Logo.svg";
import "../../css/software.css";
export default class Software extends Component {
    state = {data: data.Software,
             trigger: true
    };
    toggle = () => this.setState(p => ({trigger: !p.trigger}));
    render(){
        const {trigger} = this.state;
        const {Python,Javascript,Java,Mathematica,info} = this.state.data;
        return(
            <div>
                <blockquote className={"info"}>{info}</blockquote>
                <Panel bsStyle={"secondary"}>
                    <Panel.Heading>
                        <Panel.Title className={"header"} toggle><img className={"language"} src={babel}/> Javascript</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body collapsible>
                    <h4>Frameworks</h4>
                    {Javascript.Frameworks.map((e,idx) => <Frameworks key={idx}
                                                            name={e.name}
                                                            info={e.info}
                                                            doc={e.doc}/>)}
                    {Javascript.Projects.map((e,idx) => <Project key={idx}
                                                        status={e.status}
                                                        name={e.name}
                                                        link={e.link}
                                                        explain={e.explain}/>)}
                    </Panel.Body>
                </Panel>
                <Panel bsStyle={"secondary"}>
                    <Panel.Heading>
                        <Panel.Title className={"header"} toggle><img className={"language"} src={python}/> Python</Panel.Title>
                    </Panel.Heading>
                        <Panel.Body collapsible>
                            <h4>Frameworks</h4>
                            {Python.Frameworks.map((e,idx) => <Frameworks key={idx}
                                                                              name={e.name}
                                                                              info={e.info}
                                                                              doc={e.doc}/>)}
                            {Python.Projects.map((e,idx) => <Project key={idx}
                                                                     status={e.status}
                                                                     name={e.name}
                                                                     link={e.link}
                                                                     explain={e.explain}/>)}
                        </Panel.Body>
                </Panel>
                <Panel bsStyle={"secondary"}>
                    <Panel.Heading><Panel.Title className={"header"} toggle><img className={"language"} src={java}/> Java</Panel.Title></Panel.Heading>
                    <Panel.Body collapsible>
                        <h4>Frameworks</h4>
                        {Java.Frameworks.map((e,idx) => <Frameworks key={idx}
                                                                          name={e.name}
                                                                          info={e.info}
                                                                          doc={e.doc}/>)}
                        {Java.Projects.map((e,idx) => <Project key={idx}
                                                                 status={e.status}
                                                                 name={e.name}
                                                                 link={e.link}
                                                                 explain={e.explain}/>)}
                    </Panel.Body>
                </Panel>
                <Panel bsStyle={"secondary"}>
                    <Panel.Heading><Panel.Title className={"header"} toggle><img className={"language"} src={mathematica}/> Mathematica</Panel.Title></Panel.Heading>
                <Panel.Body collapsible>

                    {trigger ? <AwesomeButton bubbles={true} type={"secondary"} action={this.toggle}>Certified Wolfram Technology Associate</AwesomeButton>:<DisplayCert onClick={this.toggle}/>}

                    {Mathematica.Projects.map((e,idx) => <Project key={idx}
                                                                  status={e.status} name={e.name}
                                                                  link={e.link} explain={e.explain}/>)}
                </Panel.Body>
                </Panel>
            </div>
        );
    }
}
