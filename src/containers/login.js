//Vendor import
import React, {Component} from 'react';
import {connect} from 'react-redux';
import FacebookLogin from 'react-facebook-login';

//Utils
import * as AuthUtils from '../utils/auth';
import * as URL from '../constants/url';

//Actions
import * as UserActions from '../actions/user';


class LoginContainer extends Component {

  componentDidMount() {
    if(AuthUtils.isAuthCookiePresent()) {
      console.log('Redirecting');
      window.location.href = URL.HOME_PAGE;
    }
  }

  componentDidUpdate(prevProps) {
    if(!prevProps.user.currentUser && this.props.user.currentUser) {
      window.location.href = URL.HOME_PAGE;
    }
  }

  render() {
    let { isAuthInProgress } = this.props.user;
    let responseFacebook = (response) => {
      this.props.dispatch(UserActions.authenticateUser(response));
    };
    return (
      <div className="align-items-center">
       <FacebookLogin
          appId="1638374822841186"
          fields="name,email,picture"
          callback={responseFacebook} />
      </div>
    );
  };

};


function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(LoginContainer);

