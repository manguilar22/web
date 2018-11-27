import React from "react";
import {Route,Switch} from "react-router-dom";
import RenderHome from "../topics/RenderHome";
import DevOps from "../topics/DevOps";
import Cloud from "../topics/Cloud";
import Software from "../topics/Software";
import OperatingSys from "../topics/OperatingSys";
import NotFound from "../hoc/NotFound";
const Routing = (props) => {
    return(
        <Switch>
            <Route exact path={"/"} component={RenderHome}/>
            <Route path={"/DevOps"} component={DevOps}/>
            <Route path={"/Cloud"} component={Cloud}/>
            <Route path={"/Software"} component={Software}/>
            <Route path={"/OS"} component={OperatingSys}/>
            <Route path={"*"} component={NotFound}/>
        </Switch>
    );
};
export default Routing;