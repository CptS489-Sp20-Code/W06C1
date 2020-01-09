import React from 'react';

class FloatingButton extends React.Component {
    render() {
      return(
        <div className="floatButton" id="floatBtnDiv" hidden={true}>
          <a className="nonMenuItem float" id="floatBtn">
            <span className="my-float fas fa-plus" id="floatBtnIcon"></span>
          </a>
        </div>  
      );
    }
}

export default FloatingButton;