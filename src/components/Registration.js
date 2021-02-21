import React, { Component } from 'react';

class Registration extends Component {
    render() {
        return (
            <div>
                <div className="global-container">
                    <div className="card login-form">
                        <div className="card-body">
                            <h3 className="card-title text-center">Register</h3>
                            <div className="card-text">
                                {/*
			<div class="alert alert-danger alert-dismissible fade show" role="alert">Incorrect username or password.</div> */}
                                <form>
                                    {/* to error: add class "has-danger" */}
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name</label>
                                        <input type="text" className="form-control form-control-sm" id="name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email address</label>
                                        <input type="email" className="form-control form-control-sm" id="email" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="gender">Gender</label>
                                            <input type="radio" id="male" name="gender" defaultValue="male" />
                                            <label htmlFor="male">Male</label><br />
                                            <input type="radio" id="female" name="gender" defaultValue="female" />
                                            <label htmlFor="female">Female</label><br />
                                            <input type="radio" id="other" name="gender" defaultValue="other" />
                                            <label htmlFor="other">Other</label>

                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="dob">Date of Birth</label>

                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" className="form-control form-control-sm" id="password" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="confirmPassword">Confirm Password</label>
                                        <input type="password" className="form-control form-control-sm" id="confirmPassword" />
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block">Register</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Registration;