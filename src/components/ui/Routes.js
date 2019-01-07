import React from "react";
import {Switch, Route} from "react-router-dom";

import Home from "../topics/Home";
import Software from "../topics/Software";
import DevOps from "../topics/Devops";
import NotFound from "./NotFound";

const Routes = () => {
    return (
        <Switch>
            <Route exact path={"/"} component={Home}/>
            <Route path={"/Software"} component={Software}/>
            <Route path={"/DevOps"} component={DevOps}/>
            <Route path={"*"} component={NotFound}/>
        </Switch>
    );
};
export default Routes;