import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'; 

import '../../../assets/scss/Layout/lesson-list.scss';

const Lessson = () => {
    return (
        <div className="lesson-item">
            <div className="course-list-img-text">
                <div className="course-list-img">
                    <img src={require("../../../assets/img/course/cl-1.jpg")} alt="" />
                </div>
                <div className="course-list-text">
                    <h6><a href="#">Fully Responsive Web Design &amp; Development.</a></h6>
                    <div className="course-meta">
                        <span className="course-category bold-font"><a href="#">$120.25</a></span>
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

export class LessonList extends Component {

    render() {
        let { lessons } = this.props;
        lessons = [
            {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, 
        ]
        return (
            <div className="lesson-list">
                <PerfectScrollbar 
                    className="lesson-list-scroll w-100"
                >
                    <ListGroup as="ul" className="scroll-container" >
                        {/* <ListGroup.Item as="li" active> <Lessson /> </ListGroup.Item> */}
                        {
                            lessons.map((a, index) =>
                            <ListGroup.Item as="li" key={index} >
                                <Lessson />
                            </ListGroup.Item>
                            )
                        }
                        {/* <ListGroup.Item as="li" disabled> Lesson 3 </ListGroup.Item> */}
                    </ListGroup>
                </PerfectScrollbar>
            </div>
        )
    }
}

export default LessonList