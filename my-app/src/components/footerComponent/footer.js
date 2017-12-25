import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      
      <footer>
        <div className="container">
        <div>
          <ul>
          <h5>Account</h5>
          <li>manage your id</li>
          <li>abdb</li>
          <li></li>
          <li></li>
          <li></li>

          </ul>

        </div>
        <div>
          <ul>
          <h5>Example</h5>
          <li>google</li>
          <li>facebook</li>
          <li>apple</li>
          <li></li>

          </ul>

        </div>
        <div>
          <ul>
          <h5>About</h5>
          <li>Event</li>
          <li>investors</li>
          <li>Job Opportunities</li>
          <li>Contact</li>
          <li></li>

          </ul>

        </div>
      </div>
      </footer>
    
    );
  }
}

export default Footer;