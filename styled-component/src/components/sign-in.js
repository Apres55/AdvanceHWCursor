import React, { Component } from "react";
import MailInput from "./inputs/input-mail";
import PasswordInput from "./inputs/input-password";

class SignInArea extends Component{
    render() {
            return(
                <div className="sign-in-area">
                    <MailInput />
                    <PasswordInput />
                    <button>Push</button>
                </div>
            )
        }
}

export default SignInArea;