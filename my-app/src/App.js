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
import Login from './modal/login';
import Signup from './modal/signup';
// import contact from './components/pages/contact';
class App extends Component {
 /* constructor(props) {
    super(props);
  
    this.state = {
       header: "Welcome Vipin.",
       content: "Content from state..."
       }
     }*/


  render() {
    return (
     
      <Router>
    
      <div className="App">
      <Header/>
      <h1>{this.state.header}</h1>
       
     
<Route exact path='/' component={Homepage} />
<Route exact path='/Products' component={Products}  />
<Route exact path='/contact' component={Contactpage}  />         
<Route exact path='/help' component={Helppage}  />
<Route exact path='/.modal/login' component={Login}  />
        <Footer/>
        <div className="Login">
      <button onClick={this.toggleModal}>
      Login
      </button>
      <Login show={this.state.isOpen}
        onClose={this.toggleModal}>
        Here's some content for the modal
      </Login>
    </div> 

    <div className="Signup">
      <button onClick={this.toggleModal}>
      Sign up
      </button>
      <Signup show={this.state.isOpen}
        onClose={this.toggleModal}>
        Here's some content for the modal
      </Signup>
    </div>

      </div>
      </Router>
    );
  }


constructor(props) {
  super(props);

  this.state = { isOpen: false };
}

toggleModal = () => {
  this.setState({
    isOpen: !this.state.isOpen
  });
}
}
/*class Contactpage extends React.Component {
  render() {
     return (
        <div>
           <h1>contact</h1>
           <Route exact path='/contact' component={Contactpage}  />
        </div>
     );
  }

}*/
export default App;
