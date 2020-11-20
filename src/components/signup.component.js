import React, { Component } from "react";
import AccountDataService from "../services/account.service";
import LoginWidget from "./login.component";

export default class SignUpComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      companyName: "",
      published: false,
      submitted: false
    };
    this.updateAccount = this.onChangeAccount.bind(this);
    this.addAccount = this.createAccount.bind(this);
    this.newAccount = this.newAccount.bind(this);
  }

  onChangeAccount(e) {
    this.setState({
      companyName: e.target.value
    });
  }

  createAccount() {
    var data = {
      companyName: this.state.companyName,
      submitted: true
    };

    this.setState({
      companyName: this.state.companyName,
      submitted: true
    });

    AccountDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          published: response.data.published,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newAccount() {
    this.setState({
      id: null,
      companyName: "",
      published: false,
      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
              <LoginWidget></LoginWidget>
          </div>
        ) : (
          <form className="form-inline">
            <div className="form-group mx-sm-3 mb-2">
              <label htmlFor="companyName" className="sr-only">Company Name</label>
              <input 
                type="text" 
                className="form-control" 
                id="companyName" 
                required
                placeholder="Company Name..."
                value={this.state.companyName}
                onChange={this.updateAccount}
                name="account"
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="domainName" className="sr-only">DomainName</label>
              <input type="text" readOnly className="form-control-plaintext" id="domainName" value=".vicayah.com"/>
            </div>
            <button onClick={this.addAccount} className="btn btn-primary mb-2">
              Submit
            </button>
          </form>
        )
      }
      </div>
    );
  }
}
