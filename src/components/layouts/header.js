import React from 'react';
import {
  Link
} from "react-router-dom";
import '../../assets/js/jquery.meanmenu.min.js';
import { connect } from 'react-redux'
import { AiOutlineUser } from 'react-icons/ai';
import { Image } from 'react-bootstrap';
import { loginWithToken } from '../../redux/actions/auth'; 

import Login from './login';
import logo from '../../assets/img/logo/logo.png';
import UserAvatar from '../../assets/img/teacher/mt-6.jpg';

class Header extends React.Component {
  state = {
    auth: this.props.auth,
    showSearchForm: false
  }

  UNSAFE_componentWillMount() {
    // this.props.loginWithToken();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if(! Object.is(this.state.auth, nextProps.auth)) {
      this.setState({
        auth: Object.assign({}, nextProps.auth),
      })
    }
  }

  render() {
    let { auth, showSearchForm } = this.state;
    auth.userinfo ? auth.userinfo.avatar = UserAvatar : null // temp for test;
    const isLogin = auth.isLoggedIn;

    return (
      <header>
        <div id="main-menu" className="main-menu-container">
          <div className="main-menu">
            <div className="container">
              <div className="navbar-default">
                <div className="navbar-header float-left">
                  <Link className="navbar-brand text-uppercase" to="/">
                    <img src={logo} alt="logo" />
                  </Link>
                </div>
                
                {/*  select Mutiple language start */}
                {/* <div className="select-lang">
                  <select>
                    <option value={9}>ENG</option>
                    <option value={10}>BAN</option>
                    <option value={11}>ARB</option>
                    <option value={12}>FRN</option>
                  </select>
                </div> */}

                {/*  select Mutiple  language start */}

                <div className="cart-search float-right ul-li">
                  <ul style={{display: 'inline-flex'}}>
                    {/* user area start */}
                    {
                      isLogin &&  <li className="menu-item-has-children d-flex pt-1" style={{width: '120px', border: 'none'}}>
                        {
                          auth.userinfo && auth.userinfo.avatar !== '' 
                            ?
                              <Image className="user-avatar"  src={auth.userinfo.avatar} style={{ clear: 'both', width: "38px", height: '38px !important', borderRadius: '50%'}} />
                            :
                            <AiOutlineUser size={30} />
                        }
                        <Link to="/#!">{auth.userinfo && auth.userinfo.firstname + " " + auth.userinfo.lastname}</Link>
                        <ul className="sub-menu" style={{width: 150, left: -20}}>
                          <li style={{border: 'none'}}>
                            <Link to="/logout">Logout</Link>
                          </li>
                        </ul>
                      </li>
                    }
                    {/* user area end */}
                    <li>
                      <a href="#">
                        <i className="fas fa-shopping-bag" />
                      </a>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="toggle-overlay search-btn"
                        onClick={() => {this.setState({
                          showSearchForm: ! this.state.showSearchForm
                        })}}
                      >
                        <i className="fas fa-search" />
                      </button>
                      {
                        showSearchForm && 
                        <div className="search-body" 
                          style={{
                            opacity: "1",
                            zIndex: "999",
                            visibility: "visible",
                          }}
                        >
                          <div className="search-form" >
                            <form action="#">
                              <input
                                className="search-input"
                                type="search"
                                placeholder="Search Here"
                              />
                              <div className="outer-close toggle-overlay">
                                <button type="button" className="search-close"
                                  onClick={() => this.setState({
                                    showSearchForm: ! this.state.showSearchForm
                                  })}
                                >
                                  <i className="fas fa-times" />
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      }
                    </li>
                  </ul>
                </div>
                {
                  ! isLogin && <div className="log-in float-right" style={{marginTop: 19}}>
                    <a data-toggle="modal" data-target="#myModal" href="#">
                      log in
                    </a>  
                    <Login  />
                  </div>
                }
                <nav className="navbar-menu float-right">
                  <div className="nav-menu ul-li">
                    <ul>
                      {/* <li>
                        <Link to="/">Home</Link>
                      </li> */}

                      {/* <li className="menu-item-has-children ul-li-block">
                        <Link to="/">Home</Link>  
                        <ul className="sub-menu">
                          <li>
                            <Link to="/">Home 1</Link>
                          </li>
                          <li>
                            <Link to="/home-2">Home 2</Link>
                          </li>
                          <li>
                            <Link to="/home-3">Home 3</Link>
                          </li>
                          <li>
                            <Link to="/home-4">Home 4</Link>
                          </li>
                        </ul>
                      </li> */}
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      {
                        isLogin &&  <li>
                          {/* main area */}
                          <a href="/myarea" target="_blank" >My Area</a>
                        </li>
                      }
                      <li>
                        <Link to="/shop">shop</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                      <li className="menu-item-has-children ul-li-block">
                        <Link to="/#!">Pages</Link>
                        <ul className="sub-menu" style={{left: -110}}>
                          <li>
                            <Link to="/teacher">Teacher</Link>
                          </li>
                          <li>
                            <Link to="/teacher-details">Teacher Details</Link>
                          </li>
                          <li>
                            <Link to="/blog">Blog</Link>
                          </li>
                          <li>
                            <Link to="/blog-single">Blog Single</Link>
                          </li>
                          <li>
                            <Link to="/course">Course</Link>
                          </li>
                          <li>
                            <Link to="/course-details">Course Details</Link>
                          </li>
                          <li>
                            <Link to="/faq">FAQ</Link>
                          </li>
                          <li>
                            <Link to="/checkout">CheckOut</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </nav>
                <div className="mobile-menu">
                  <div className="logo">
                    <Link to="/">
                      <img src={logo} alt="Logo" />
                    </Link>
                  </div>
                  <nav>
                    <ul>
                      {/* <li>
                        <Link to="/">Home</Link>
                        <ul>
                          <li>
                            <Link to="/">Home 1</Link>
                          </li>
                          <li>
                            <Link to="/home-2">Home 2</Link>
                          </li>
                          <li>
                            <Link to="/home-3">Home 3</Link>
                          </li>
                          <li>
                            <Link to="/home-4">Home 4</Link>
                          </li>
                        </ul>
                      </li> */}
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about-us">About Us</Link>
                      </li>
                      <li>
                        <Link to="/shop">shop</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="/#!">Pages</Link>
                        <ul>
                          <li>
                            <Link to="/teacher">Teacher</Link>
                          </li>
                          <li>
                            <Link to="/teacher-details">Teacher Details</Link>
                          </li>
                          <li>
                            <Link to="/blog">Blog</Link>
                          </li>
                          <li>
                            <Link to="/blog-single">Blog Single</Link>
                          </li>
                          <li>
                            <Link to="/course">Course</Link>
                          </li>
                          <li>
                            <Link to="/course-details">Course Details</Link>
                          </li>
                          <li>
                            <Link to="/faq">FAQ</Link>
                          </li>
                          <li>
                            <Link to="/checkout">CheckOut</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>

                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
};

const dispatchToProps  = {
  loginWithToken
}
export default connect(mapStateToProps, dispatchToProps)(Header)