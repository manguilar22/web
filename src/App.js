import React from 'react';

import  {MemoryRouter} from "react-router-dom";

import Navigation from "./components/ui/Navigation";
import Routing from "./components/ui/Routing";
import createReactClass from "create-react-class";
const App = createReactClass({
    render: () => {
      return(
          <MemoryRouter>
            <div>
            <Navigation/>
            <Routing/>
            </div>
          </MemoryRouter>
      )
    }
});
export default App;
