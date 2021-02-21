import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <section>
                    {/*footer starts from here*/}
                    <footer className="footer">
                        <div className="container bottom_border">
                            <div className="row">
                                <div className="col-sm-4 col-md col-sm-4  col-12 col footer-left-align">
                                    <h5 className="headin5_amrc col_white_amrc pt2">Find us</h5>
                                    {/*headin5_amrc*/}
                                    <p className="mb10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s</p>
                                    <p><i className="fa fa-location-arrow" /> Bikers Room, Bhimavaram-1, PIN: 534201 </p>
                                    <p><i className="fa fa-phone" /> +91 8978766959 </p>
                                    <p><i className="fa fa fa-envelope" /> makerides@bikersroom.com </p>
                                </div>
                                {/* <div class=" col-sm-4 col-md  col-6 col">
     
    </div> */}
                                <div className=" col-sm-4 col-md col-sm-4  col-12 footer-left-align">
                                    <h5 className="headin5_amrc col_white_amrc pt2">Submit your query here</h5>
                                    <form>
                                        <div className="row form-group">
                                            <div className="col">
                                                <input type="text" className="form-control" placeholder="Enter your name" />
                                            </div>
                                            <div className="col">
                                                <input type="number" className="form-control" placeholder="Enter your mobile number" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <input type="email" className="form-control" placeholder="Enter your email" />
                                            </div>
                                            <div className="col">
                                                <textarea className="form-control" placeholder="Enter your query here" defaultValue={""} />
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-sm btn-primary">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <ul className="foote_bottom_ul_amrc">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                            {/*foote_bottom_ul_amrc ends here*/}
                            <p className="text-center">Copyright @2017 | Designed With by <a href="#">Your Company Name</a></p>
                            <ul className="social_footer_ul">
                                <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                <li><a href="#"><i className="fab fa-linkedin" /></a></li>
                                <li><a href="#"><i className="fab fa-instagram" /></a></li>
                            </ul>
                            {/*social_footer_ul ends here*/}
                        </div>
                    </footer>
                </section>

            </div>
        );
    }
}

export default Footer;