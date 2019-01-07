import React from 'react';
import  {MemoryRouter} from "react-router-dom";
import createReactClass from "create-react-class";
import Navigation from "./components/ui/Navigation";
import Routes from "./components/ui/Routes";
import "./css/index.css";
import "react-awesome-button/src/styles/styles.scss";

const App = createReactClass({
    render: () => {
      return(
          <MemoryRouter>
              <div>
                <Navigation/>
                <Routes/>
              </div>
          </MemoryRouter>
      );
    }
});
export default App;
