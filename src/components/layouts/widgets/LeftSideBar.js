import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../../assets/scss/Layout/LeftSideBar.scss';

/* side object
{  
    index: 0
    displayName: 'Lesson',
    link: '/tutor/online-lessons',
    isParent: false,
    children: [
        {
            displayName: 'Lesson',
            link: '/tutor/online-lessons',
            isParent: false,
            children: []
        }
    ]
},
*/

export class LeftSideBar extends Component {
    state = {
        activedLink: ''
    }

    componentDidMount() {
        this.initElement();
    }

    // sidebar init
    initElement = () => {
        var dropdown = document.getElementsByClassName("dropdown-btn");
        var i;

        for (i = 0; i < dropdown.length; i++) {
            dropdown[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var dropdownContent = this.nextElementSibling;
                if (dropdownContent.style.display === "block") {
                    dropdownContent.style.display = "none";
                } else {
                    dropdownContent.style.display = "block";
                }
            });
        }
    }

    onChangeSideBar = (index) => {
        this.setState({
            activeIndex: index
        })
    }

    getSideBar = (role) => {

        if(role === 'tutor') {
            return [
                {
                    index: 1,
                    displayName: 'Lesson',
                    link: '/tutor/online-lessons',
                    isParent: false,
                    children: []
                },
                {
                    index: 2,
                    displayName: 'Assessment',
                    link: '/tutor/assessment',
                    isParent: false,
                    children: []
                },
                {
                    index: 3,
                    displayName: 'Assign',
                    link: '/tutor/assign',
                    isParent: false,
                    children: []
                },
                {
                    index: 4,
                    displayName: 'Marking',
                    link: '/tutor/marking',
                    isParent: false,
                    children: []
                },

            ]
        } else if(role === 'student') {

        }

    }

    renderItem = (item, path) => (
        item.isParent && item.children 
            ? renderParent(item) 
            :   <Link className={`item ${ path === item.link && 'active'}`} 
                    to={item.link}
                    key={item.index}
                >
                    { item.displayName }
                </Link>
    )

    renderParent = (parent) => (
        <>
            <button className="dropdown-btn">
                { parent.displayName }
                <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-container">
            {
                parent.children && parent.children.length > 0 
                    ? parent.children.map((childItem) => 
                        this.renderItem(childItem)
                    ) 
                    : null
            }
            </div>
        </>
    )

    render() {
        const path = location.pathname;
        
        const sideMenus = this.getSideBar('tutor');

        return (
            <div className={`leftSidebar ${this.props.className}`}>
                <div className="sidenav">
                    {
                        sideMenus.map((item) => 
                            this.renderItem(item, path)
                        )
                    }
                </div>
            </div>
        )
    }
}

export default LeftSideBar
