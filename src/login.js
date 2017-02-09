import React, {Component} from 'react';

class Login extends Component {
  constructor(props){
    super(props)

    this.state = {
      newUser: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({
      newUser: event.target.value
    })
  }

  render() {
    return (
      <div>
        <input value={this.state.newUser} onChange={this.handleChange}/>
        <button onClick={this.props.loginAction.bind(null, this.state.newUser)}>Login</button>
      </div>
    )
  }
}

export default Login;
