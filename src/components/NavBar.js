import React from 'react';

class NavBar extends React.Component {
    
    render() {
       return (
        <div id="navBar" className="navbar">  
        <span className="navbarItems">
          <button id="menuBtn" className="menubtn">
            <span id="menuBtnIcon" className="fa fa-bars menubtnicon">
            </span>
          </button>
          <img src="http://tiny.cc/sslogo" alt="Speed Score Logo" height="38px"
          width="38px" />
          <span id="topBarTitle" className="navbartitle">
            &nbsp;{this.props.title}
          </span>
        </span>
      </div>
    ); 
  }
}

export default NavBar;