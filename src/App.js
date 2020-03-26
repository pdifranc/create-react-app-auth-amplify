import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth, API } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  post = async () => {
    console.log('calling api');
    const response = await API.post('tickets', '/items', {
      body: {
        id: '1',
        name: 'hello amplify!'
      }
    });
    alert(JSON.stringify(response, null, 2));
  };

  get = async () => {
    console.log('calling api');
    const response = await API.get('tickets', '/tickets/');
    alert(JSON.stringify(response, null, 2));
  };

  list = async () => {
    console.log('calling api');
    const response = await API.get('tickets', '/tickets/');
    alert(JSON.stringify(response, null, 2));
  };

  render() {
    return (
      <div className="App">
        <p> Pick a file</p>
        <button onClick={this.post}>POST</button>
        <button onClick={this.get}>GET</button>
        <button onClick={this.list}>LIST</button>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
