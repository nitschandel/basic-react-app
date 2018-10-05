import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';

//Utils
import {isAuthCookiePresent} from '../utils/auth';

//Actions
// import * as UserActions from '../actions/user';

class BaseContainer extends Component {

  componentDidMount() {
    if(isAuthCookiePresent()) {
      // this.props.dispatch(UserActions.initialiseUser());
    }
  }

  render() {

    if(!isAuthCookiePresent()) {
      return (
        <div>
          {this.props.children}
        </div>
      );
    }else {
      return (
        <div>
          <div className="app">
              {this.props.children}
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return state;
}

export default withRouter(connect(mapStateToProps)(BaseContainer));
