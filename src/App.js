import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import '@coreui/icons/css/coreui-icons.min.css';
import 'flag-icon-css/css/flag-icon.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'simple-line-icons/css/simple-line-icons.css';
import './scss/style.css'
import { Login, Register, LayoutedContainer } from './Pages'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" name="Login Page" component={Login} />
          <Route path="/register" name="Register Page" component={Register} />
          <Route path="/home" name="Home" component={LayoutedContainer} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App
