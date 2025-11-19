import React from "react";
import Profile from "../images/ProfilePicture.jpg";
import Mail from "../images/Mail.png";
import Linkedin from "../images/linkedin.png";

export default function Info() {
  return (
    <div className="info">
      <img className="info--image" src={Profile} />
      <h1 className="info--title">Palden Gyatso Lama</h1>
      <h3 className="info--job">Frontend Developer</h3>
      <h4 className="info--website">paldenlama.website</h4>
      <div className="buttons">
        <h1 className="email">
          <img className="email--logo" src={Mail} />
          Email
        </h1>
        <h1 className="linkedin">
          <img className="linkedin--logo" src={Linkedin} />
          LinkedIn
        </h1>
      </div>
    </div>
  );
}
