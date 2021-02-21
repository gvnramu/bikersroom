import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <section id="nav-bar">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#"><img src="./img/logo2.png" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">HOME</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">SERVICES</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">ABOUT US</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">CONTACT
          </a>
                </li>
              </ul>
            </div>
          </nav>
        </section>

      </div>
    );
  }
}

export default Header;