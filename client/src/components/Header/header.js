import React, { Component } from 'react';
import FontAwsome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import Nav from './Sidenav/sidenav';

class Header extends Component {

  state = {
    showNav:false
  }

  onHideNav = () => {
    this.setState({showNav:false})
  }


  render() {
    return (
      
      <header>
        <div className='open_nav'>
          <FontAwsome name="bars"
            onClick={()=>this.setState({showNav:true})}
            style={{
              color:'#ffffff',
              padding:'10px',
              cursor:'pointer'
            }}
          />
        </div>
        <Nav
          showNav={this.state.showNav}
          onHideNav={()=>this.onHideNav()}
        />  
          <Link to="/" className="logo">
            The Book Shelf
          </Link>
        
      </header>
    );
  }
}

export default Header;