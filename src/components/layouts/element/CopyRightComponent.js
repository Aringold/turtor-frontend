import React, { Component,Fragment } from 'react'

export class CopyRightComponent extends Component {
    render() {
        return (
            <Fragment>
                {/* <div id="footer-area" className="footer-area-section"> */}
                    <div className='container'>
                        <div className='footer-content pb10'>
                            <div className="copy-right-menu">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="copy-right-text">
                                            <p>
                                            © 2018 - Designed & Developed by{" "}
                                            <a
                                                href="https://jthemes.com"
                                                title="Best Premium WordPress, HTML Template Store"
                                            >
                                                {" "}
                                                Jthemes Studio
                                            </a>
                                            . All rights reserved
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="copy-right-menu-item float-right ul-li">
                                            <ul>
                                                <li>
                                                    <a href="#">License</a>
                                                </li>
                                                <li>
                                                    <a href="#">Privacy & Policy</a>
                                                </li>
                                                <li>
                                                    <a href="#">Term Of Service</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
            </Fragment>
        )
    }
}

export default CopyRightComponent
