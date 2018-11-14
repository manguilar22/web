import React from "react";
import {Route,Switch} from "react-router-dom";
import RenderHome from "../topics/RenderHome";
import DevOps from "../topics/DevOps";
import Cloud from "../topics/Cloud";
import Software from "../topics/Software";
const Routing = (props) => {
    return(
        <Switch>
            <Route exact path={"/"} component={RenderHome}/>
            <Route path={"/DevOps"} component={DevOps}/>
            <Route path={"/Cloud"} component={Cloud}/>
            <Route path={"/Software"} component={Software}/>
        </Switch>
    );
};
export default Routing;