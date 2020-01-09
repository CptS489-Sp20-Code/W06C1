import React from 'react';

class SideMenu extends React.Component {
    render() {
       return (
        <div id="sideMenu" className="sidenav" >
        {/* SIDE MENU TITLE */}
        <div className="sidenavtitle">
            <img src='http://tiny.cc/chrisprofilepic' height='50' width='50' />
            <span id="userID" className="sidenavuserID">&nbsp;Chris
            Hundhausen&nbsp;&nbsp;</span>
        </div>
        {/* MENU CONTENT */}
        <div id="mainMenuContent">
        <h2></h2>
        {/*BEGIN GROUP OF MODE/ACTION BUTTONS */}
        {/*Mode-based menu items are contextual; they provide
            easy access to most important functionality in current mode */}
        <a className="feedModeItem menuItem modeItem"><span className="fa fa-list-alt"></span>&nbsp;Feed</a>
        <a className="feedModeItem menuItem modeItem"><span className="fa fa-user-friends"></span>&nbsp;Followed Users</a>

        <a id="allRoundsItem" className="roundsModeItem menuItem modeItem"><span className="fa fa-history"></span>&nbsp;All Rounds</a>
        <a id="logRoundItem" className="roundsModeItem menuItem modeItem"><span className="fa fa-plus"></span>&nbsp;Log New Round</a>
        
        <a className="coursesModeItem menuItem modeItem" ><span className="fa fa-flag"></span>&nbsp;All Courses</a>
        <a className="coursesModeItem menuItem modeItem"><span className="fa fa-plus"></span>&nbsp;Add
        a Course</a>
        {/* The following menu items are present regardless of mode */}
        <a id="aboutBtn" className="menuItem"><span className="fa fa-info-circle"></span>&nbsp;About</a>
        <a id="logOutBtn" className="menuItem"><span className="fa fa-sign-out-alt"></span>&nbsp;Log Out</a>
        </div>
        </div>
       );
    }
}

export default SideMenu;