import React, { Component } from "react";
import MailInput from "./inputs/input-mail";
import PasswordInput from "./inputs/input-password";
import exactInputsCollector from "../redux/actions/parseInputs";
import Links from "./sign-in-links";
import Logo from "./images/logo-component";
import CopyrightFoot from "./copyright-footer";


class SignInArea extends Component{
    render() {
            return(
                <div className="sign-in-area">
                    <Logo />
                    <div className='login-inputs-div'>
                        <h2>
                            Sign-in
                        </h2>
                        <MailInput />
                        <PasswordInput />
                        <label className="check-box-input"><input type="checkbox" id="one" onchange="fun1()" />Remember me</label>
                        <button className="parse-in" onClick={this.props.mapDispatchToProps}>SIGN IN</button>
                        <Links />
                        <CopyrightFoot />
                    </div>
                </div>
            )
        }
}

export default SignInArea;