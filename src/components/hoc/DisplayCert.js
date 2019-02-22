import React from "react";
import {Button} from "react-bootstrap";
import cert from "../../css/images/ManuelA.png";
const DisplayCert = (props) => {
    return (
        <div>
            <Button bsStyle={"link"} onClick={props.onClick}>Go Back</Button>
           <img src={cert} width={700} height={500} alt={"certification-Wolframalpha"}/>
        </div>
    );
};
export default DisplayCert;