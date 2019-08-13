import React from "react";
import "./Home.css";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer className="footer text-Left">
          <div className="container">
            <center>
                <br></br>
              <p className="footer-text">
                &copy; Copyright 2019. All Rights Reserved.
              </p>
            </center>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
