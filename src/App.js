import React, { Component } from 'react';
import Header from "./components/layout/Header"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/layout/footer';
import Dashboard from './components/dashboard/dashboard';
import Signup from './components/auth/signup';
import Login from './components/auth/login';




class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header />
          <div className="margin-top"></div>
          <Switch>
           <Route exact path="/"  component={Dashboard } />
           <Route path="/signup" component={Signup} />
           <Route path="/login" component={Login} />

          </Switch>
          <Footer />
        </div>

      </BrowserRouter>
    );
  }
}

export default App;
