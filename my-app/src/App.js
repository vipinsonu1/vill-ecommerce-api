import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import './Assets/css/default.min.css'
import homePage from './components/pages/homePage';
import Products from './components/pages/products';
import Contactpage from './components/pages/contact';
import Helppage from './components/pages/help';
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header/>
<Route exact path='/' component={Homepage} />
<Route exact path='/Products' component={Products}  />
<Route exact path='/contact' component={Contactpage}  />
<Route exact path='/help' component={Helppage}  />

        <Footer/>
      </div>
      </Router>
    );
  }
}

export default App;
