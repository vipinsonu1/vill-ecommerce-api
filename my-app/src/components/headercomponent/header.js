import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
    
     <header>
      <div className="logo">
      <Link to="/">Logo</Link>
      </div>
   <nav>
<ul>
<li className='first'>
<Link to="/">Home</Link>
</li>
<li>
  <Link to="/Products">Products</Link>
 
</li>
<li>
<Link to="/Contact">Contact</Link>

</li>
<li className="last">
<Link to="/Help">Help</Link>
</li>

  </ul>
  </nav>

       </header>
    
    );
  }
}

export default Header;