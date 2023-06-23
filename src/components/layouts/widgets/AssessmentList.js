import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

const Assessment = (props) => {
    const data = props.data
    return (
        <div className="item">
            <div className="course-list-img-text">
                <div className="course-list-img" >
                    <img className="" src={data.image} alt="" style={{maxHeight: 100, width: 100, maxWidth: 100, borderRadius: '10%'}} />
                </div>
                <div className="list-text">
                    <h6>
                        <a href='#'>
                        {   
                            data.name || data.name
                        }
                        </a>
                    </h6>
                    <div className="course-meta">
                        <span className="course-category bold-font">
                            {
                                data.description || data.description
                            }
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export class AssessmentList extends Component {

    render() {
        let { datas } = this.props;
        return (
            <div className="list">
                <PerfectScrollbar 
                    className="list-scroll w-100"
                >
                    <ListGroup as="ul" className="scroll-container" >
                        {
                            datas.map((data, index) =>
                            <ListGroup.Item as="li" key={index} >
                                <Assessment data={data}/>
                            </ListGroup.Item>
                            )
                        }
                    </ListGroup>
                </PerfectScrollbar>
            </div>
        )
    }
}

AssessmentList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object)
}

export default AssessmentList;