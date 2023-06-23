import React, { Component, Fragment } from 'react';
import Select from 'react-select';
import {Form, Button} from 'react-bootstrap';
import { connect } from 'react-redux'
import '../../assets/scss/Layout/register.scss';
import { signupWithEmail } from '../../redux/actions/auth';
import { getTutors } from '../../redux/actions/app/user';
import { getLevels } from '../../redux/actions/app/level';
import { getSecurityQuestions } from '../../redux/actions/app/securityQuestion';

export class RegisterStudent extends Component {
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
        selectedTutors: [],
        // values
        tutors: [],
        levels: [],
        securityQuestions: [],
    }
    constructor(props) {
        super(props)
    }

    UNSAFE_componentWillMount() {
        this.props.getTutors();
        this.props.getLevels();
        this.props.getSecurityQuestions();
    }

    UNSAFE_componentWillReceiveProps(props) {
        if(props.tutors && props.tutors.length > 0) {
            this.setState({
                tutors: props.tutors
            })
        }
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
            CA_or_SA_score: this.state.CA_or_SA_score,
            refCode: this.state.refCode,
            SecQuestionId: this.state.SecQuestionId,
            SecQestionAnswer: this.state.SecQestionAnswer,
            level: this.state.selectedlevel,
            tutors: this.state.selectedTutors
        }
        this.props.signupWithEmail(userInfo, "user");
    }
    handelChangeValues = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handelChangeTutors = (e) => {
        let selectedTutors = e.map((elt) => elt.value)
        this.setState({
            selectedTutors
        })
    }

    render() {
        const { 
            tutors, 
            levels, 
            securityQuestions,
            firstname,
            lastname,
            identificationNumber,
            contactNumber,
            email,
            password,
            passwordConform,
            gender,
            parentName,
            selectedlevel,
            CA_or_SA_score,
            refCode,
            SecQuestionId,
            SecQestionAnswer
        } = this.state;

        const { title } = this.props;

        var tutursOption = tutors.map((tutor) => ({value: tutor._id, label: (tutor.firstname + " " + tutor.lastname)}));

        return (
            <Fragment>
                <div>
                    <Form onSubmit={this.handleSubmit}>
                        <h3 className="register-heading">{title}</h3>
                        <div className="row register-form register-student-form">
                            <div className="col-md-6 col-12 ">
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
                                {/* contact number */}
                                <div className="form-group">
                                    <input type="text" name="contactNumber" className="form-control" 
                                        placeholder="Contact Number" 
                                        value={contactNumber} 
                                        minLength='10' maxLength='10' 
                                        onChange={this.handelChangeValues}    
                                        required
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
                                    <input type="password" className="form-control" placeholder="Preferred password (hashed)*" 
                                        value={password}
                                        name="password"
                                        minLength="5"
                                        onChange={this.handelChangeValues}    
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control"  placeholder="Confirm password (hashed)*" 
                                        value={passwordConform}
                                        name="passwordConform"
                                        onChange={this.handelChangeValues}
                                        required
                                    />
                                    {
                                        password !== passwordConform && <p className="text-danger"> Please confirm your password </p>
                                    }
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
                            <div className="col-md-6  col-12 ">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Parent's Name (optional)" 
                                        name='parentName'
                                        value={parentName}
                                        onChange={this.handelChangeValues}
                                    />
                                </div>
                                
                                {/* level */}
                                <div className="form-group">
                                    <select className="form-control" defaultValue={"Level (Pri 1, 2, 3, 4, 5 or 6)"}
                                        name='selectedlevel'
                                        value={selectedlevel}
                                        onChange={this.handelChangeValues}
                                        required
                                    >
                                        <option className="hidden" disabled>Please select your level</option>
                                        {
                                            levels.length > 0 && levels.map((level) => <option key={level._id} value={level._id}>{level.name}</option>) 
                                        }
                                    </select>
                                </div>
                                {/* teachers */}
                                <div className="form-group">
                                    <Select isMulti={true} placeholder="Choose your tutors" options={tutursOption}
                                        onChange={(e) => {
                                            this.handelChangeTutors(e)
                                        }}
                                    />
                                </div>
                                    <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Last CA or SA score"
                                        name="CA_or_SA_score"
                                        value={CA_or_SA_score}
                                        onChange={this.handelChangeValues}
                                    />
                                </div>
                                {/* Referral Code (if any) */}
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Referral Code (if any)" 
                                        name="refCode"
                                        value={refCode}
                                        onChange={this.handelChangeValues}
                                    />
                                </div>
                                {/* recovery password start */}
                                <div className="form-group">
                                    <select className="form-control" 
                                        value={SecQuestionId}
                                        placeholder="Please select security question"
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
                                {/* recovery password end */}
                                {/* enter your answer */}
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Enter Your Answer *" 
                                        value={SecQestionAnswer}
                                        name="SecQestionAnswer"
                                        onChange={this.handelChangeValues}
                                        required
                                    />
                                </div>
                                <Button type="submit" className="btnRegister"> Register </Button>
                            </div>
                        </div>
                    </Form>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterStudent);
