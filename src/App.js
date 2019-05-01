import React,{Component} from 'react';
import Header from "./components/layout/Header"
import {BrowserRouter, Switch, Route}  from 'react-router-dom';
import Search from './components/dashboard/search';
class App extends Component {
  render(){
  return (
    <BrowserRouter>
    <div className="app">
      <Header />
      <div className="margin-top"></div>
      <Search />
    </div>

    </BrowserRouter>
  );
}
}

export default App;
