import React, { Component } from 'react';
import { connect } from 'react-redux';


class Users extends Component {

  render() {
    const showUsers = this.props.users.map(user => <li>{user.username}</li>)
    return (
      <div>
        {this.props.numUsers}
        <ul>
          {showUsers}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    numUsers: state.users.length
   }
}

//add mapStateToProps here

export default connect(mapStateToProps)(Users);
