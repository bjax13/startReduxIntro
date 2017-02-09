import React, { Component } from 'react';
import {connect} from 'react-redux'
import {loginUser} from './redux/users';

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newUser: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  handleChange(event) {
    this.setState({
      newUser: event.target.value
    })
  }

  loginUser() {
    this.props.loginUser(this.state.newUser);
  }

  render() {
    return (
      <div>
        <input value={this.state.newUser} onChange={this.handleChange}/>
        <button onClick={this.loginUser}>Login</button>
      </div>
    )
  }
}

const mapDispatchToProps = {
  loginUser: loginUser
}


export default connect(null, mapDispatchToProps)(Login);
