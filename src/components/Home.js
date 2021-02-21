import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <div>
  {/*SLIDER--*/}
  <div id="Slider">
    <div id="headerslider" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#headerslider" data-slide-to={0} className="active" />
        <li data-target="#headerslider" data-slide-to={1} />
        <li data-target="#headerslider" data-slide-to={2} />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="./img/HOME1.jpg" className="d-block w-100" alt="check your net dude" />
          <div className="carousel-caption">
            <h3>WANT TO RIDE</h3> <br />
            <h5>NO MATTER ABOUT BIKE WE ARE HERE FOR YOU TO MAKE RIDE IN OUR ROOM </h5>
          </div>
        </div>
        <div className="carousel-item">
          <img src="./img/HOME2.jpg" className="d-block w-100" alt="check your net dude" />
          <div className="carousel-caption">
            <h3>OUR MISSION IS TO MAKE THINGS GOING TO EASY</h3>
            <h5>LET'S START WITH OUR BIKES IN OUR ROOM (BHIMAVARAM)</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img src="./img/HOME3.jpg" className="d-block w-100" alt="check your net dude" />
          <div className="carousel-caption">
            <h3>MAKE OUR ROOM BIGGER IN ALL THE WAYS</h3>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#headerslider" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#headerslider" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  </div>
  {/*-----------------services-----------*/}
  <section id="services">
    <div className="container">
      <h1 className="heading">SERVICES</h1>
      <div className="row services">
        <div className="col-md-6 text-center">
          <div className="card" style={{width: '30rem'}}>
            <div className="card-body">
              <img className="ser-image" src="./img/service1.jpg" alt="check your net dude" />
              <h4 className="card-title">RIDE IN OUR ROOM</h4>
              <p className="card-text">we are allow to book a bike based on your needs just in few seconds. let's make our
                room bigger with your rides.</p>
            </div>
            <div className="card-footer">
              <Link to="/login"><a href="#" className="btn btn-primary">BOOK A RIDE</a></Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 text-center">
          <div className="card" style={{width: '30rem'}}>
            <div className="card-body">
              <img className="ser-image" src="./img/service2.jpg" alt="check your net dude" />
              <h4 className="card-title">BE A PART IN OUR ROOM</h4>
              <p className="card-text">you can create your own profile and add your bike with proper documentation and get
                payed while you relaxing.let's make our room bigger by be a part in our room.</p>
            </div>
            <div className="card-footer">
              <Link to="/login"><a href="#" className="btn btn-primary">MAKE SOMEONE'S RIDE</a></Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*-----------about us--------*/}
  <section id="about-us">
    <div className="container">
      <h1 className="heading">ABOUT US</h1>
      <div className="about-content">
        <p>
          Our mission is to make things going to easy and We work together to design, create and produce work that we
          are proud of for floks that we belive in. We are aviable for in a wide range of creative disciplines for a
          variety of jobs, projects and gigs.
        </p>
      </div>
    </div></section>
</div>

            </div>
        );
    }
}

export default Home;