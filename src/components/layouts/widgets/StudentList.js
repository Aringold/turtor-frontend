import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import '../../../assets/scss/pages/tutorpages/student-list.scss';

const Student = (props) => {
    const student = props.student
    return (
        <div className="item">
            <div className="course-list-img-text">
                <div className="course-list-img">
                    <img className="user-avatar" src={student.avatar} alt="" />
                </div>
                <div className="list-text">
                    <h6>
                        <a href='#'>
                        {
                            student.name
                        }
                        </a>
                    </h6>
                    <div className="course-meta">
                        {/* <span className="course-category bold-font"><a href="#">$120.25</a></span> */}
                        <div className="course-rate ul-li">
                            <ul>
                                <li><i className="fas fa-star" /></li>
                                <li><i className="fas fa-star" /></li>
                                <li><i className="fas fa-star" /></li>
                                <li><i className="fas fa-star" /></li>
                                <li><i className="fas fa-star" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export class StudentList extends Component {

    render() {
        let { students } = this.props;
        return (
            <div className="list">
                <PerfectScrollbar 
                    className="list-scroll w-100"
                >
                    <ListGroup as="ul" className="scroll-container" >
                        {/* <ListGroup.Item as="li" active> <Lessson /> </ListGroup.Item> */}
                        {/* <ListGroup.Item as="li" disabled> Lesson 3 </ListGroup.Item> */}

                        {
                            students.map((student, index) =>
                            <ListGroup.Item as="li" key={index} >
                                <Student student={student}/>
                            </ListGroup.Item>
                            )
                        }
                    </ListGroup>
                </PerfectScrollbar>
            </div>
        )
    }
}

export default StudentList