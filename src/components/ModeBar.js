import React from 'react';

class ModeBar extends React.Component {
    render() {
      return(
        <div id ="bottomBar" className="modebar">
        <a id="feedMode" className="modebarbtn">
          <span className="modebaricon nonMenuItem fa fa-th-list"></span>
          <span className="modebartext">Feed</span>
        </a>
        <a id="roundsMode" className="modebarbtn">
          <span className="modebaricon nonMenuItem fa fa-history"></span>
          <span className="modebartext">Rounds</span>
        </a>
        <a id="coursesMode" className="modebarbtn">
          <span className="modebaricon nonMenuItem fa fa-flag"></span>
          <span className="modebartext">Courses</span>
        </a> 
        </div>
      );
    }
}

export default ModeBar;