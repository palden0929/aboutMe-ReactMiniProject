import React from "react";
import Twitter from "../images/TwitterIcon.png"
import Facebook from "../images/FacebookIcon.png"
import Instagram from "../images/InstagramIcon.png"
import Github from "../images/GitHubIcon.png"

export default function Footer(){
    return <div className="footer">
        <img src={Twitter} />
        <img src={Facebook} />
        <img src={Instagram} />
        <img src={Github} />
    </div>
}