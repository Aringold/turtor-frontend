import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux'
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  Router,
  Redirect,
} from "react-router-dom";
//  history
import { history } from './history';
import { loginWithToken, logoutWithJWT } from './redux/actions/auth'; 

import HomeTwo from './components/pages/home';
import AboutUs from './components/pages/about-us';
import ContactUs from './components/pages/contact-us';
import Shop from './components/pages/shop';
import Teacher from './components/pages/teacher';
import TeacherDetail from './components/pages/teacher_details';
import Blog from './components/pages/blog';
import BlogSingle from './components/pages/blog_single';
import Course from './components/pages/course';
import CourseDetails from './components/pages/course_details';
import FAQ from './components/pages/faq';
import Checkout from './components/pages/checkout';
// product pages
import Register from './components/pages/Register';
import LogoutPage from './components/pages/Logout';

const redirectMyArea = () => {
  return window.location.pathname =  location.pathname;
}

class AppRouter extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    // console.log("AppRouter", this.props);
    this.props.loginWithToken();
  }

  render() {
    return (
      <Router history={history}>  
          <Switch>
            <Route path='/' exact component={HomeTwo} />
            <Route path='/about-us' component={AboutUs} />
            <Route path='/contact' component={ContactUs} />
            <Route path='/shop' component={Shop} />
            <Route path='/teacher' component={Teacher} />
            <Route path='/teacher-details' component={TeacherDetail} />
            <Route path='/blog' component={Blog} />
            <Route path='/blog-single' component={BlogSingle} />
            <Route path='/course' component={Course} />
            <Route path='/course-details' component={CourseDetails} />
            <Route path='/course' component={Course} />
            <Route path='/faq' component={FAQ} />
            <Route path='/checkout' component={Checkout} />
            {/* productions */}
            <Route path='/register' exact  component={Register} />
            <Route path='/logout' exact  component={LogoutPage}  />
            {
              location.hostname !== 'localhost' && <>
                <Route component={redirectMyArea} />
              </>
            }
          </Switch>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
      </Router>
    );
  }
}
const mapStateToProps = (state) => ({
  isLoggedIn : state.auth.isLoggedIn
})

export default connect(mapStateToProps, {loginWithToken})(AppRouter);