import React, {Component} from 'react';
import { connect } from 'react-redux'
import { logoutWithJWT } from './../../redux/actions/auth';

class Logout extends Component {
  componentDidMount() {
    this.props.logoutWithJWT()
  }
  
  render() {
    return (
      <div>
        Logout
      </div>
    );
  }
}

const mapDispatchToProps = {
  logoutWithJWT
}

export default connect(null, mapDispatchToProps)(Logout)