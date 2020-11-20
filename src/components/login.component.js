import React, { Component } from "react";
import UsernameDataService from "../services/username.service";
import SettingsWidget from "./setting.component";

export default class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.addUsername = this.addUsername.bind(this);
    this.newUsername = this.newUsername.bind(this);

    this.state = {
      id: null,
      username: "",
      password: "", 
      published: false,
      submitted: false
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  addUsername() {
    var data = {
      username: this.state.username,
      password: this.state.password
    };

    this.setState({
      username: this.state.username,
      password: this.state.password,
      submitted: true
    });

    UsernameDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          username: response.data.username,
          password: response.data.password,
          published: response.data.published,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newUsername() {
    this.setState({
      id: null,
      username: "",
      password: "",
      published: false,
      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
           <SettingsWidget></SettingsWidget>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter email"
                required
                value={this.state.username}
                onChange={this.onChangeUsername}
                name="UserName"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                className="form-control"
                id="password"
                required
                value={this.state.password}
                onChange={this.onChangePassword}
                name="Password"
              />
            </div>

            <button onClick={this.addUsername} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
