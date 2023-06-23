import React, { Component } from 'react';
import Header from '../layouts/header';
import Breadcrumb from '../layouts/breadcrumb';
// import ContactForm from '../layouts/contact_form';
import ContactArea from '../layouts/contact_area';
import Footer from '../layouts/footer';

import RegisterStudent from '../layouts/RegisterStudent';
import RegisterTutor from '../layouts/RegisterTutor';
// register css
import '../../assets/scss/Layout/register.scss';

class Register extends Component {
    state = {}

    constructor(props) {
        super(props)
        this.state = {
            teachers: [
                { value: '1', label: 'Teacher1' },
                { value: '2', label: 'Teacher2' },
                { value: '3', label: 'Teacher3' }
            ]
        }
    }

    render() {

        return (
            <div>
                <Header {...this.props} />

                <Breadcrumb BreadcumbTitle="Register" BreadcumbBigTitle="Your self" BreadcumbLinkText="Contact" />

                <div className="register-student">
                    <div className="container register">
                        <div className="row">
                            <div className="col-md-3 register-left">
                                <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                                <h3>Welcome</h3>
                                <p>Welcome to Online Tutor Service</p>
                                {/* <input type="submit" name="" defaultValue="Login"/><br/> */}
                            </div>
                            <div className="col-md-9 register-right">
                                <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
                                            Student
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
                                            Tutor
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        {/*                                 Student section start                       */}
                                        <RegisterStudent title={"Apply as a Student"}/>
                                        {/*                                 Student section end                         */}
                                    </div>
                                    <div className="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        {/*                                 tutor start                                 */}
                                        <RegisterTutor  title={"Apply as a Tutor"}/>
                                        {/*                                 tutor end                                   */}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <ContactArea />
                <Footer />
            </div>
        );
    }
}




export default Register;