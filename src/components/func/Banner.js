import React from "react";
import {ResponsiveEmbed} from "react-bootstrap";
import banner from "../../css/images/banner.svg";
import "../../css/Banner.css";
const Banner = () => {
    return (
        <div className={"Banner"} >
        <ResponsiveEmbed a16by9={true}><embed type={"image/svg+xml"} src={banner}/></ResponsiveEmbed>
        </div>
    );
};
export default Banner;