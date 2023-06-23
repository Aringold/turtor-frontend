import React, { Component } from 'react';
import { connect } from 'react-redux';
import { history } from '../../history'
import { loginWithJWT } from '../../redux/actions/auth';
import "../../assets/css/custom/login.css";
import $ from 'jquery'

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    constructor(props) {
        super(props)
    }

    componentWillUnmount(){
        $('#myModal').modal('hide');
    }

    UNSAFE_componentWillReceiveProps( nextProps) {
        if(nextProps.auth.isLoggedIn === true) {

        }
    }

    goToRegister = () => {
        $('#myModal').modal('hide');
        history.push('/register');
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.loginWithJWT({
            email: this.state.email,
            password: this.state.password
        });
    }

    handleChangeValues = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header backgroud-style">
                            <div className="gradient-bg"></div>
                            <div className="popup-logo">
                                <img src={require("../../assets/img/logo/p-logo.jpg")} alt="" />
                            </div>
                            <div className="popup-text text-center">
                                <h2> <span>Login</span> Your Account.</h2>
                                <p>Login to our website, or <span>REGISTER</span></p>
                            </div>
                        </div>

                        <div className="modal-body">
                            {/* <div className="facebook-login">
                                <a href="#">
                                    <div className="log-in-icon">
                                        <i className="fab fa-facebook-f"></i>
                                    </div>
                                    <div className="log-in-text text-center">
                                        Login with Facebook
									</div>
                                </a>
                            </div> */}
                            <div className="facebook-login" >
                                {/* <a href='/register' > */}
                                <a href='#' >
                                    {/* data-dismiss="modal"  */}
                                    <div className="log-in-text text-center" onClick={() => this.goToRegister()}>
                                        New User? Register Now
									</div>
                                </a>
                            </div>
                            <div className="alt-text text-center"><a href="#">OR SIGN IN</a> </div>
                            <form className="contact_form" onSubmit={this.handleSubmit} encType="multipart/form-data">
                                <div className="contact-info">
                                    <input className="email" name="Email" type="email" placeholder="Email*" 
                                        value={this.state.email}
                                        name="email"
                                        onChange={this.handleChangeValues}
                                    />
                                </div>
                                <div className="contact-info">
                                    <input className="name" name="name" type="password" placeholder="Password*" 
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.handleChangeValues}
                                    />
                                </div>
                                <div className="nws-button text-center white text-capitalize">
                                    <button type="submit" value="Submit">LOg in Now</button>
                                </div>
                            </form>
                            {/* <div className="login-forgot-password">
                                <a href="#">
                                    <div className="log-in-text text-center">
                                        Forgot Password ?
									</div>
                                </a>
                            </div> */}
                            <div className="log-in-footer text-center">
                                <p>* Denotes mandatory field.</p>
                                <p>** At least one telephone number is required.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

const mapDispatchToProps = {
    loginWithJWT: loginWithJWT
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);