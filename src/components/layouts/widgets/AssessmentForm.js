import React, { Component, Fragment } from 'react'
import { AiFillYoutube } from 'react-icons/ai'
import { Form, InputGroup,InputGroupText, Input} from 'reactstrap';
import Dropzone from 'react-dropzone';
import { MDBBtn, MDBIcon } from 'mdbreact';
import { BsFillMicFill } from "react-icons/bs";

const CHECKED_TYPE = {
    MCQ: 'MCQ',
    WRITTEN: "WRITTEN",
    RECORDING: "RECORDING" 
}

export class AssessmentForm extends Component {
    state = {
        file: null,
        checked: CHECKED_TYPE.MCQ
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    onDropFile = (file) => {
        this.setState({
            file
        });
    }

    handleChecked = (value) => {
        this.setState({
            checked: value
        })
    }

    render() {
        const { checked } = this.state;

        return (
            <Fragment>
                <Form onSubmit={this.handleSubmit} style={{padding: '30px 10px'}} >
                    <label htmlFor="question" className="grey-text">
                        Question Input
                    </label>
                    <input 
                        id="question" 
                        name="question" 
                        className="form-control" 
                        type="text" 
                        placeholder="Please write us any questions" 
                    />
                    <br />
                    <label className="grey-text">
                        Files
                    </label>
                    <Dropzone  onDrop={this.onDropFile}>
                    {({getRootProps, getInputProps}) => (
                        <section 
                            style={{ background: "#efe5e5", padding: "20px 0 0px 15px", marginBottom: '10px' }}
                        >
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p>Image or video</p>
                        </div>
                        </section>
                    )}
                    </Dropzone>
                    <InputGroup className='mb-2'>
                        <InputGroupText >
                            <span>
                                <AiFillYoutube /> Youtube URL
                            </span>
                        </InputGroupText>
                        <Input />
                    </InputGroup>
                    <br />
                    <div 
                        className='d-flex'
                        style={{
                            display: "-ms-flexbox",
                            display: 'flex',
                            msFlexWrap: 'wrap',
                            flexWrap: 'wrap'
                        }}
                    >
                        <div className='mb-2 mr-2'>
                            <InputGroupText >
                                <Input 
                                    addon type="checkbox" 
                                    checked={checked === CHECKED_TYPE.MCQ}
                                    onChange={() => this.handleChecked(CHECKED_TYPE.MCQ)}
                                />
                                <span 
                                    style={{paddingLeft: 10, fontSize: "0.9rem", cursor: 'pointer' }} 
                                    onClick={() => this.handleChecked(CHECKED_TYPE.MCQ)}
                                >
                                    MCQ
                                </span>
                            </InputGroupText>
                        </div>

                        <div className='mb-2 mr-2'>
                            <InputGroupText >
                                <Input 
                                    addon type="checkbox"
                                    checked={checked === CHECKED_TYPE.WRITTEN}
                                    onChange={() => this.handleChecked(CHECKED_TYPE.WRITTEN)}
                                />
                                <span 
                                    style={{paddingLeft: 10, fontSize: "0.9rem", cursor: 'pointer' }} 
                                    onClick={() => this.handleChecked(CHECKED_TYPE.WRITTEN)}
                                >
                                    Written
                                </span>
                            </InputGroupText>
                        </div>
                            
                        <div className='mb-2 mr-2'>
                            <InputGroupText >
                                <Input addon type="checkbox" 
                                    checked={checked === CHECKED_TYPE.RECORDING}
                                    onChange={() => this.handleChecked(CHECKED_TYPE.RECORDING)}
                                />  
                                <span
                                    style={{paddingLeft: 10, fontSize: "0.9rem", cursor: 'pointer' }} 
                                    onClick={() => this.handleChecked(CHECKED_TYPE.RECORDING)}
                                >
                                    Recording
                                    <BsFillMicFill className='ml-3' color='green' size={20} />
                                </span>
                            </InputGroupText>
                        </div>
                    </div>
                    <div>
                    </div>
                    <div className="text-right mt-4">
                        <MDBBtn color="info text-white" outline type="submit">
                            Submit
                            <MDBIcon far icon="paper-plane" className="ml-2" />
                        </MDBBtn>
                    </div>
                </Form>
            </Fragment>
        )
    }
}

export default AssessmentForm
