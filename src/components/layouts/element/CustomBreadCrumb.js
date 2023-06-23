import React from 'react';
import {Breadcrumb, BreadcrumbItem} from 'react-bootstrap';
// import { Link } from 'react-router-dom';

const styles = {
    body: {
        backgroundColor: 'white'
    }
}

function CustomBreadCrumb(props) {
    // firstText firstLink
    // secondText secondLink
    // thirdText thirdLink
    // active: 1,2,3


    const active = props.active;

    return (
        <div className='custom-breadcrumb'>
            <Breadcrumb className="" style={styles.body} color='white'>
            {
                props.firstText && props.firstLink &&
                <BreadcrumbItem
                    active={active === 1}
                >
                    {/* <Link to={props.firstLink}> */}
                    {
                        props.firstText
                    }
                    {/* </Link> */}
                </BreadcrumbItem>
            }
            {
                props.secondText && props.secondLink && 
                <BreadcrumbItem
                    active={active === 2}
                >
                    {/* <Link to={props.secondText}> */}
                    {
                        props.secondText
                    }
                    {/* </Link> */}

                </BreadcrumbItem>
            }
            {
                props.thirdText && props.thirdLink && 
                <BreadcrumbItem
                    active={active === 3}
                >
                    {/* <Link to={props.thirdLink}> */}
                    {
                        props.thirdText
                    }
                    {/* </Link> */}
                </BreadcrumbItem>
            }
            </Breadcrumb>
        </div>
    )
}

export default CustomBreadCrumb
