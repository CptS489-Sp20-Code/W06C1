import React from 'react';
import AppMode from '../AppMode.js';

class ModeBar extends React.Component {

    handleModeBtnClick = (newMode) => {
      if (this.props.mode != newMode) {
      this.props.changeMode(newMode);
      }
    }

    render() {
      return(
        <div className={"modebar" + (this.props.mode === AppMode.LOGIN ? " invisible" : " visible")}>
          <a className={"modebarbtn" + 
            (this.props.mode === AppMode.FEED ? " menuItemSelected" : "")} 
            onClick={this.props.menuOpen ? null : () => this.handleModeBtnClick(AppMode.FEED)}>
            <span className="modebaricon nonMenuItem fa fa-th-list"></span>
            <span className="modebartext">Feed</span>
          </a>
          <a className={"modebarbtn" +
            (this.props.mode === AppMode.ROUNDS ? " menuItemSelected" : "")} 
            onClick={this.props.menuOpen ? null : () => this.handleModeBtnClick(AppMode.ROUNDS)}>
            <span className="modebaricon nonMenuItem fa fa-history"></span>
            <span className="modebartext">Rounds</span>
          </a>
          <a className={"modebarbtn" +
            (this.props.mode === AppMode.COURSES ? " menuItemSelected" : "")} 
            onClick={this.props.menuOpen ? null : () => this.handleModeBtnClick(AppMode.COURSES)}>
            <span className="modebaricon nonMenuItem fa fa-flag"></span>
            <span className="modebartext">Courses</span>
          </a> 
        </div>
      );
    }
}

export default ModeBar;