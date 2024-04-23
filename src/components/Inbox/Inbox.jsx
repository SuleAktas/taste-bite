import React from "react";
import "./Inbox.css";

function Inbox() {
  return (
    <div className="inbox-box">
      <div className="inbox-title">Deliciousness to your box</div>
      <div className="inbox-exp">
        Enjoy weekly hand picked recipes and recommandations
      </div>
      <div className="inbox-input">
        <div className="inbox-input-text">Email Address</div>
        <div className="inbox-input-button">JOIN</div>
      </div>
      <div className="inbox-little-exp">
        By joining our newsletter you agree to our Terms and Conditions
      </div>
    </div>
  );
}

export default Inbox;
