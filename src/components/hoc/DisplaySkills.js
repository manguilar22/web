import React from "react";

const DisplaySkills = (props) => {
    return (
    <ol style={{listStyleType: "square"}}>
    {props.skills.map((e,idx) => {
        return (<li key={idx}>{e.skill}</li>)
    })}
    </ol>
    );
};
export default DisplaySkills;