import React from "react";
// info for devops
import DisplaySkills from "../hoc/DisplaySkills";
import {Panel} from "react-bootstrap";
import freebsd from "../../css/logos/freebsd-logo.jpg";
import tux from "../../css/logos/Tux.svg";
import windows from "../../css/logos/Windows_logo_-_2012.svg";
import coreos from "../../css/logos/coreos.png";
import docker from "../../css/logos/docker.png";
import lxc from "../../css/logos/containers.png";
import kali from "../../css/logos/KaliLinux.png";
import tor from "../../css/logos/TOR.png";
import kubernetes from "../../css/logos/kubernetes.svg";
import "../../css/Info.css";
import computerSkills from "../../json/computer";

const Info = () => {
    return(
        <div className={"info"}>
            <Panel bsStyle={"primary"}>
                <Panel.Heading>
                    <Panel.Title className={"header"} toggle>Containers</Panel.Title>
                </Panel.Heading>
            <Panel.Collapse>
                <Panel.Body>
                    <dl>
                        <dt><img className={"logo"} src={docker}/> Docker</dt>
                        <dd>
                            <DisplaySkills skills={computerSkills.Containers.Docker}/>
                        </dd>
                        <dt><img className={"logo"} src={kubernetes}/> Kubernetes</dt>
                        <dd>
                            <DisplaySkills skills={computerSkills.Containers.Kubernetes}/>
                        </dd>
                        <dt><img className={"logo"} src={lxc}/> LXC | LXD</dt>
                        <dd>
                            <DisplaySkills skills={computerSkills.Containers.LXC}/>
                        </dd>
                        <dt><img className={"logo"} src={coreos}/> CoreOS</dt>
                        <dd>
                            <DisplaySkills skills={computerSkills.Containers.CoreOS}/>
                        </dd>
                    </dl>
                </Panel.Body>
            </Panel.Collapse>
            </Panel>
            <Panel bsStyle={"primary"}>
                <Panel.Heading>
                    <Panel.Title className={"header"} toggle>Systems</Panel.Title>
                </Panel.Heading>
            <Panel.Collapse>
                <Panel.Body>
                    <dl>
                        <dt> <img className={"logo"} src={tux}/> Linux</dt>
                            <dd>
                                <DisplaySkills skills={computerSkills.Systems.Linux}/>
                            </dd>
                        <dt> <img className={"logo"} src={freebsd}/> FreeBSD</dt>
                            <dd>
                                <DisplaySkills skills={computerSkills.Systems.FreeBSD}/>
                            </dd>
                        <dt> <img className={"logo"} src={windows}/> Windows</dt>
                            <dd>
                                <DisplaySkills skills={computerSkills.Systems.Windows}/>
                            </dd>
                    </dl>
                </Panel.Body>
            </Panel.Collapse>
            </Panel>
            <Panel bsStyle={"primary"}>
            <Panel.Heading>
                <Panel.Title className={"header"} toggle>Security</Panel.Title>
            </Panel.Heading>
                <Panel.Body collapsible>
                    <dl>
                        <dt><img className={"logo"} src={kali}/> Kali Linux</dt>
                        <dd>
                            <DisplaySkills skills={computerSkills.Security.Kali}/>
                        </dd>
                        <dt><img className={"logo"} src={tor}/>Tor</dt>
                        <dd>
                            <DisplaySkills skills={computerSkills.Security.Tor}/>
                        </dd>
                    </dl>
                </Panel.Body>
            </Panel>
        </div>
    );
};

export default Info;
