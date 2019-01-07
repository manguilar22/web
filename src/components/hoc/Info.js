import React from "react";
// info for devops

import {Panel} from "react-bootstrap";
import freebsd from "../../css/logos/freebsd-logo.jpg";
import tux from "../../css/logos/Tux.svg";
import windows from "../../css/logos/Windows_logo_-_2012.svg";
import coreos from "../../css/logos/coreos.png";
import docker from "../../css/logos/docker.png";
import lxc from "../../css/logos/containers.png";
import "../../css/Info.css";
const Info = () => {
    return(
        <div className={"info"}>
            <Panel>
                <Panel.Heading>
                    <Panel.Title className={"header"} toggle>Development and Operations</Panel.Title>
                </Panel.Heading>
                <Panel.Collapse>
                <Panel.Body>
                    <dl>
                        <dt>DevOps</dt>
                        <dd></dd>
                        <dt>NetDevOps</dt>
                        <dd></dd>
                        <dt>DevSecOps</dt>
                        <dd></dd>
                    </dl>
                </Panel.Body>
                </Panel.Collapse>
            </Panel>
            <Panel>
                <Panel.Heading>
                    <Panel.Title className={"header"} toggle>Containers</Panel.Title>
                </Panel.Heading>
            <Panel.Collapse>
                <Panel.Body>
                    <dl>
                        <dt><img src={docker} width={60} height={50}/>Docker</dt>
                        <dd></dd>
                        <dt><img src={lxc} width={50} height={50}/>LXC | LXD</dt>
                        <dd></dd>
                        <dt><img src={coreos} width={50} height={50}/> CoreOS</dt>
                        <dd></dd>
                    </dl>
                </Panel.Body>
            </Panel.Collapse>
            </Panel>
            <Panel>
                <Panel.Heading>
                    <Panel.Title className={"header"} toggle>Systems</Panel.Title>
                </Panel.Heading>
            <Panel.Collapse>
                <Panel.Body>
                    <dl>
                        <dt> <img src={tux} width={50} height={50}/> Linux</dt>
                            <dd></dd>
                        <dt> <img src={freebsd} width={50} height={50}/> FreeBSD</dt>
                            <dd></dd>
                        <dt> <img src={windows} width={50} height={50}/> Windows</dt>
                            <dd></dd>
                    </dl>
                </Panel.Body>
            </Panel.Collapse>
            </Panel>
        </div>
    );
};

export default Info;
