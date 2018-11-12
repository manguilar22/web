import createClass from "create-react-class";
import HomeButton from "../func/HomeButtons";
import React from "react";
import Banner from "../func/Banner";
import Footer from "../func/Footer";

const HOME = createClass({
    render: function () {
        return(<div>
            <Banner/>
            <HomeButton trigger={this.props.trigger}/>
            <Footer/>
        </div>)
    }
});
export default HOME;
