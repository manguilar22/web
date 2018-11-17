import React from "react";
const Frameworks = (props) => {
    return(
            <li className={props.logo} key={props.key}>{props.name}</li>
    );
};
export default Frameworks;