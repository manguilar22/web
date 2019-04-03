import React from "react";

const Frameworks = (props) => {
    return(
            <dl>
                <dt key={props.key}>{props.name}</dt>
                <dd key={props.key}>{props.info}</dd>
                <dd key={props.key}><u><i>Documentation</i></u> : Start Learning <a src={props.doc}>{props.name}</a></dd>
            </dl>
    );
};
export default Frameworks;