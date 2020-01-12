import React from 'react';

class RoundsPage extends React.Component {

    render() {
      return(
      <div className="paddedPage">
        <h1></h1>
        <table className="table table-hover">
          <thead className="thead-light">
          <tr>
            <th>Date</th>
            <th>Course</th>
            <th>Score</th>
            <th>View/Edit...</th>
            <th>Delete</th>
          </tr>
          </thead>
          <tbody>
            <tr>
            <td colSpan="5" style={{fontStyle: "italic"}}>No rounds added yet</td>
            </tr> 
          </tbody>
        </table>
      </div>
      );
    }
}

export default RoundsPage;