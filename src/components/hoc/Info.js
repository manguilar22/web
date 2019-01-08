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
            <Panel bsStyle={"primary"}>
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
            <Panel bsStyle={"primary"}>
                <Panel.Heading>
                    <Panel.Title className={"header"} toggle>Containers</Panel.Title>
                </Panel.Heading>
            <Panel.Collapse>
                <Panel.Body>
                    <dl>
                        <dt><img className={"logo"} src={docker}/> Docker</dt>
                        <dd></dd>
                        <dt><img className={"logo"} src={lxc}/> LXC | LXD</dt>
                        <dd></dd>
                        <dt><img className={"logo"} src={coreos}/> CoreOS</dt>
                        <dd></dd>
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
                            <dd></dd>
                        <dt> <img className={"logo"} src={freebsd}/> FreeBSD</dt>
                            <dd></dd>
                        <dt> <img className={"logo"} src={windows}/> Windows</dt>
                            <dd></dd>
                    </dl>
                </Panel.Body>
            </Panel.Collapse>
            </Panel>
        </div>
    );
};

export default Info;
