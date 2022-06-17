import React, { Component } from "react";
import MailInput from "./inputs/input-mail";
import PasswordInput from "./inputs/input-password";
import exactInputsCollector from "../redux/actions/parseInputs";
import Links from "./sign-in-links"

class SignInArea extends Component{
    render() {
            return(
                <div className="sign-in-area">
                    <MailInput />
                    <PasswordInput />
                    <label className="check-box-input"><input type="checkbox" id="one" onchange="fun1()" />Remember me</label>
                    <button className="parse-in" onClick={exactInputsCollector}>Push</button>
                    <Links />
                </div>
            )
        }
}

export default SignInArea;