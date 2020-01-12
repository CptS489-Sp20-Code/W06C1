import React from 'react';
import AppMode from "./../AppMode.js";

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        //Create a ref for the email input DOM element
        this.emailInputRef = React.createRef();
    }

    //Focus cursor in email input field when mounted
    componentDidMount() {
        this.emailInputRef.current.focus();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.changeMode(AppMode.FEED);
        this.props.setUserId(this.emailInputRef.current.value);
    }
    
    render() {
        return(
        <div id="loginModeDiv" className="paddedPage">
        <center>
            <h1 />
            <form onSubmit={this.handleSubmit}>
            <label htmlFor="emailInput" style={{ padding: 0, fontSize: 24 }}>
                Email:
                <input
                ref={this.emailInputRef} 
                className="form-control logintext"
                type="email"
                placeholder="Enter Email Address"
                id="emailInput"
                pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}"
                required={true}
                />
            </label>
            <p />
            <label htmlFor="passwordInput" style={{ padding: 0, fontSize: 24 }}>
                Password:
                <input
                className="form-control logintext"
                type="password"
                placeholder="Enter Password"
                id="passwordInput"
                pattern="[A-Za-z0-9!@#$%^&*()_+\-]+"
                required={true}
                />
            </label>
            <p className="bg-danger" id="feedback" style={{ fontSize: 16 }} />
            <button
                type="submit"
                className="btncolortheme btn btn-primary btn-block loginbtn">
                <span id="loginBtnIcon" className="fa fa-sign-in"/>
                &nbsp;Log In
            </button>
            <br />
            <a role="button" className="loginBtn">
                <img src="https://drive.google.com/uc?export=view&id=1YXRuG0pCtsfvbDSTzuM2PepJdbBpjEut" />
            </a>
            <a role="button" className="loginBtn">
                <img src="https://drive.google.com/uc?export=view&id=1ZoySWomjxiCnC_R4n9CZWxd_qXzY1IeL" />
            </a>
            <p>
                <i>Version CptS 489 Sp20</i>
            </p>
            <p>
                <i>© 2020 Professor of Speedgolf. All rights reserved.</i>
            </p>
            </form>
        </center>
        </div>
        )
    }
}

export default LoginPage;