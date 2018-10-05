import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Button, Table, Input} from 'reactstrap';

//Actions
import * as UserActions from '../actions/user';

import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8000');


class DashboardContainer extends Component {

  constructor(){
    super();
  }

  componentDidMount() {
  }

  onLogout(){
    this.props.dispatch(UserActions.logoutUser());
  }

  handleKeyPress(target) {
    this.props.dispatch(UserActions.logoutUser());
  }

  subscribeToTimer(cb) {
    socket.on('timer', timestamp => cb(null, timestamp));
  }

  

  render() {
    return (
      <div className="animated fadeIn">
        <Button color='primary'  style={{ float: 'right' }}
            onClick = {
                () => {this.onLogout();}
            }>
            Logout
        </Button>
        You are logged in
      </div>
    );
  };


}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(DashboardContainer);
