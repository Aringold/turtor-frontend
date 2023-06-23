import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import {Form, Button} from 'react-bootstrap';
import { signupWithEmail } from '../../redux/actions/auth';
import { getTutors } from '../../redux/actions/app/user';
import { getLevels } from '../../redux/actions/app/level';
import { getSecurityQuestions } from '../../redux/actions/app/securityQuestion';

import '../../assets/scss/Layout/register.scss';

export class RegisterTutor extends Component {
    state = {
        firstname: '',
        lastname: '',
        identificationNumber: '',
        contactNumber: '',
        email: '',
        password: '',
        passwordConform: '',
        parentName: '',
        gender: "MALE",
        selectedlevel: '',
        CA_or_SA_score: "",
        refCode: '',
        SecQuestionId: '',
        SecQestionAnswer: '',
        // values
        securityQuestions: [],
    }

    UNSAFE_componentWillMount() {
        this.props.getSecurityQuestions();
    }

    UNSAFE_componentWillReceiveProps(props) {
        if(props.levels && props.levels.length > 0) {
            this.setState({
                levels: props.levels
            })
            if(this.state.selectedlevel.length === 0) {
                this.setState({
                    selectedlevel: props.levels[0]._id
                })
            }
        }
        if(props.securityQuestions && props.securityQuestions.length > 0) {
            this.setState({
                securityQuestions: props.securityQuestions
            });
            if(this.state.SecQuestionId === "") {
                this.setState({
                    SecQuestionId: props.securityQuestions[0]._id
                })
            }
        }
    }

    handelChangeValues = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.password !== this.state.passwordConform) {
            return false;
        }

        let userInfo ={}
        userInfo = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            identificationNumber: this.state.identificationNumber,
            contactNumber: this.state.contactNumber,
            email: this.state.email,
            password: this.state.password,
            parentName: this.state.parentName,
            gender: this.state.gender,
            SecQuestionId: this.state.SecQuestionId,
            SecQestionAnswer: this.state.SecQestionAnswer,
        }
        this.props.signupWithEmail(userInfo, "tutor");
    }

    render() {
        const { 
            securityQuestions,
            firstname,
            lastname,
            identificationNumber,
            contactNumber,
            email,
            password,
            passwordConform,
            gender,
            SecQuestionId,
            SecQestionAnswer
        } = this.state;

        

        const { title } = this.props;

        return (
            <Fragment>
                {/*                                   tutor section start                                   */}
                <div>
                    <Form onSubmit={this.handleSubmit}>
                        <h3  className="register-heading">{title}</h3>
                        <div className="row register-form">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="First Name *" 
                                        value={firstname}
                                        name="firstname"
                                        onChange={this.handelChangeValues}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Last Name *" value={lastname} 
                                        name="lastname"
                                        onChange={this.handelChangeValues}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Identification Number (last 4 characters)" 
                                        value={identificationNumber}
                                        name="identificationNumber"
                                        onChange={this.handelChangeValues}
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="email" name="email" className="form-control" placeholder="Email" 
                                        value={email} 
                                        name="email"
                                        onChange={this.handelChangeValues}    
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="text" minLength='10' maxLength='10' className="form-control" placeholder="Phone *" 
                                        name="contactNumber"
                                        value={contactNumber} 
                                        onChange={this.handelChangeValues}    
                                        required
                                    />
                                </div>
                                {/*  Gender start  */}
                                <div className="form-group">
                                    <div className="maxl">
                                        <label className="radio inline"> 
                                            <input type="radio" name="gender" defaultValue="MALE" 
                                                checked={gender === 'MALE'}
                                                onChange={this.handelChangeValues}
                                            />
                                            <span> Male </span> 
                                        </label>
                                        <label className="radio inline pl-3"> 
                                            <input type="radio" name="gender" defaultValue="FEMALE"
                                                checked={gender === 'FEMALE'}
                                                onChange={this.handelChangeValues}
                                            />
                                            <span>Female </span> 
                                        </label>
                                    </div>
                                </div>
                                {/*  Gender end  */}
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password *" 
                                        value={password}
                                        name="password"
                                        minLength="5"
                                        onChange={this.handelChangeValues}    
                                        required
                                    />
                                </div>
                                <div className="form-group d-relative">
                                    <input type="password" className="form-control" placeholder="Confirm Password *" 
                                        value={passwordConform}
                                        name="passwordConform"
                                        onChange={this.handelChangeValues}
                                        required
                                    />
                                    {
                                        password !== passwordConform && <p className="text-danger"> Please confirm your password </p>
                                    }
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Referral Code (if any)" defaultValue="" />
                                </div>
                                <div className="form-group">
                                    <select className="form-control"
                                        value={SecQuestionId}
                                        placeholder="Please select your Sequrity Question"
                                        name='SecQuestionId'
                                        onChange={this.handelChangeValues}
                                        required
                                    >
                                        <option className="hidden" key={0} disabled>Please select your Security Question</option>
                                        {
                                            securityQuestions.length  > 0 && securityQuestions.map((sec) => 
                                                <option key={sec._id} value={sec._id}>{sec.question}</option>    
                                            )
                                        }
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Enter Your Answer *" 
                                        value={SecQestionAnswer}
                                        name="SecQestionAnswer"
                                        onChange={this.handelChangeValues}
                                        required
                                    />
                                </div>
                                <Button type="submit" className="btnRegister">
                                    Register
                                </Button>
                            </div>
                        </div>
                    
                    </Form>
                </div>
            {/*                                   tutor section end                                   */}
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        auth: state.auth,
        tutors: state.app.user.tutors,
        levels: state.app.level.levels,
        securityQuestions: state.app.securityQuestion.securityQuestions,
    })
}
    

const mapDispatchToProps = {
    signupWithEmail: signupWithEmail,
    getTutors: getTutors,
    getLevels: getLevels,
    getSecurityQuestions: getSecurityQuestions,
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterTutor);