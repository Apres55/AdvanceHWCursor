import React, { Component } from "react";
import MailInput from "./inputs/input-mail";
import PasswordInput from "./inputs/input-password";
import UserInfoInput from "./inputs/input-user-info";

class SignUpArea extends Component{
    render() {
            return(
                <div className="sign-up-area">
                    <UserInfoInput />
                    <MailInput />
                    <PasswordInput />
                    <button>Push</button>
                </div>
            )
        }
}

export default SignUpArea;