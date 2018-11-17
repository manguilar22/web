import React, {Component} from "react";
import db from "../../json/data";
import {Panel} from "react-bootstrap";
import {AwesomeButton} from "react-awesome-button";
import "react-awesome-button/src/styles/themes/theme-rickiest";
export default class DevOps extends Component {
    state = {db:db.DevOps};
    render(){return(
        <div>
            {this.state.db.topics.map(({title,info},idx) => {
                return (
                <Panel bsStyle={"info"} eventKey={idx}>
                    <Panel.Heading><Panel.Title toggle>
                        <AwesomeButton type={"secondary"} size={"large"} bubbles={true}>
                        {title}
                        </AwesomeButton>
                    </Panel.Title></Panel.Heading>
                    <Panel.Body collapsible>
                        {info}
                    </Panel.Body>
                </Panel>
            );
            })}
        </div>
    );}
}