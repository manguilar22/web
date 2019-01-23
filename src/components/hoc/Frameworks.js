import React from "react";
import {Well} from "react-bootstrap";

const Frameworks = (props) => {
    return(
        <Well size={"xsmall"}>
            <dl>
                <dt key={props.key}>{props.name}</dt>
                <dd key={props.key}>{props.info}</dd>
                <dd key={props.key}><u><i>Documentation</i></u> : Start Learning <a src={props.doc}>{props.name}</a></dd>
            </dl>
        </Well>
    );
};
export default Frameworks;