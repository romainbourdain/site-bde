import React from "react";
import Links from "./Links";
import Copyrights from "./Copyrights";

const Footer = ({setVideo}) => {
    return (
        <>
            <Links/>
            <Copyrights setVideo={setVideo}/>
        </>
    );
};

export default Footer;
