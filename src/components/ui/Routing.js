import React from "react";
import {Route,Switch} from "react-router-dom";
import RenderHome from "../RenderHome";
import DevOps from "../DevOps";
import Cloud from "../Cloud";
import Software from "../Software";
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