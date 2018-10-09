import React, { Component } from 'react';

class SessionForm extends Component {
  constructor(props){
    super(props);
    this.state={username: '', password: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (event) => this.setState({[field]: event.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    debugger
    this.props.action(this.state);
  }

  currentUser(){
    if (this.props.currentUser){
      return (<h1>Helllooo {this.props.currentUser.username}</h1>)
    }
    return null;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      {this.currentUser()}
        <label>username
          <input type="text"
            onChange={this.update("username")}
            value={this.state.username}
          />
        </label>
        <label>Password
          <input type="password"
            onChange={this.update('password')}
            value={this.state.password}
          />
        </label>
        <button>Make That User</button>
      </form>
    );
  }
}

export default SessionForm;
