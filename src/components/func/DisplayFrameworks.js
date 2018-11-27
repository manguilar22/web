import React from "react";
import {Well} from "react-bootstrap";
const Frameworks = (props) => {
    return(
        <Well  bsSize={"sm"}>
            <li className={props.logo} key={props.key}>{props.name}</li>
        </Well>
    );
};
export default Frameworks;