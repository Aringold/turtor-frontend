import React from "react";
import { MDBContainer, MDBBtn, MDBIcon } from 'mdbreact';
import { Form, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import Dropzone from 'react-dropzone';
import { AiFillYoutube } from 'react-icons/ai';

const styles = {
    CreateLesson: {
        padding: "30px 10px",
    }
}

class CreateLesson extends React.Component {
    state = {
        file: null,
        // 
        keyLearingChecked: false
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    onDropFile = (file) => {
        this.setState({
            file
        })
    }

    render() {

        const { keyLearingChecked } = this.state

        return (
            <MDBContainer className="CreateLesson">
                <Form onSubmit={this.handleSubmit} style={styles.CreateLesson} >
                    <label htmlFor="lessonName" className="grey-text">
                        Name
                    </label>
                    <input type="text" id="lessonName" name="name" className="form-control" placeholder="Input lesson Name" defaultValue="lesson"  />
                    <br />
                    <label className="grey-text">
                        File
                    </label>
                    <Dropzone  onDrop={this.onDropFile}>
                    {({getRootProps, getInputProps}) => (
                        <section 
                            style={{    background: "#efe5e5", padding: "20px 0 0px 15px", marginBottom: '10px' }}
                        >
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p>Image or video</p>
                        </div>
                        </section>
                    )}
                    </Dropzone>
                    <label htmlFor="youtubeUrl" className="grey-text">
                        <AiFillYoutube /> Youtube URL
                    </label>
                    <input type="text" id="youtubeUrl" name="youtubeUrl" className="form-control" />
                    <br />
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <Input addon type="checkbox" 
                                aria-label="Checkbox for following text input"  
                                defaultChecked={keyLearingChecked}
                            />  
                            <span style={{paddingLeft: 10, fontSize: "0.9rem", cursor: 'pointer' }} onClick={() => this.setState({keyLearingChecked: !keyLearingChecked})} >Key Learning</span>
                        </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="+ Add Keywords/pointers" />
                    </InputGroup>

                    <div className="text-right mt-4">
                        <MDBBtn color="info text-white" outline type="submit">
                            Submit
                            <MDBIcon far icon="paper-plane" className="ml-2" />
                        </MDBBtn>
                    </div>
                </Form>
            </MDBContainer>
        );
    }
}

    export default CreateLesson;