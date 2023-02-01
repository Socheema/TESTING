import React from "react";
import InfoPhoto from "../images/chima.jpg";
function Info() {
  return (
    <div>
      <div className="flex">
        <img src={InfoPhoto} alt="Infophoto" className="info--photo" />
        <h3 className="info--name">Azubuike Chima</h3>
        <p className="info--occupation">Frontend developer</p>
        <a href="https//linkedin.com" className="info--website">
          azubuike.website
        </a>
      </div>
      <div className="btn">
        <button className="email">Email</button>
        <button className="linkedin">linkedin</button>
      </div>
    </div>
  );
}

export default Info;
