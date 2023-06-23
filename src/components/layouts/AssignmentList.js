import React, { Component } from 'react';
import { ListGroup} from 'react-bootstrap';
import { Button} from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
// import '../../../assets/scss/pages/tutorpages/student-list.scss';

const Assignment = (props) => {
    const assignment = props.assignment
    return (
        <div className="item assignment">
            <div className="course-list-img-text">
                <div className="course-list-img">
                    <img src={assignment.image} alt="" />
                </div>
                <div className="list-text">
                    <h6>
                    {
                        assignment.name
                    }
                    </h6>
                    <div className="course-meta">
                        <span className="course-category bold-font">
                            { assignment.description }
                        </span>
                    </div>
                    <div className='action'>
                        {
                            assignment.assigned 
                                ? <><Button outline color="success">Assign</Button>{' '}</>
                                : <><Button variant="outline-danger">Unassign</Button>{' '}</>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export class AssignmentList extends Component {

    render() {
        let { assignments } = this.props;
        return (
            <div className="list">
                <PerfectScrollbar
                    className="list-scroll w-100"
                >
                    <ListGroup as="ul" className="scroll-container" >
                        {/* <ListGroup.Item as="li" active> <Lessson /> </ListGroup.Item> */}
                        {/* <ListGroup.Item as="li" disabled> Lesson 3 </ListGroup.Item> */}

                        {
                            assignments && assignments.map((assignment, index) =>
                            <ListGroup.Item as="li" key={index} >
                                <Assignment assignment={assignment}/>
                            </ListGroup.Item>
                            )
                        }
                    </ListGroup>
                </PerfectScrollbar>
            </div>
        )
    }
}

export default AssignmentList