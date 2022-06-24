import React, { Component } from "react";
import MailInput from "./inputs/input-mail";
import PasswordInput from "./inputs/input-password";
import UserInfoInput from "./inputs/input-user-info";
import Logo from "./images/logo-component";
import LinksUp from "./sign-up-links";
import CopyrightFoot from "./copyright-footer"

class SignUpArea extends Component{
    render() {
            return(
                <div className="sign-up-area">
                    <Logo />
                    <div className='login-inputs-div'>
                        <h2>
                            Sign-up
                        </h2>
                        <UserInfoInput />
                        <MailInput />
                        <PasswordInput />
                        <label className="check-box-input"><input type="checkbox" id="one" onchange="fun1()" />I want to receive inspiration, marketing promotions and updates via email</label>
                        <button>SIGN UP</button>
                        <LinksUp />
                        <CopyrightFoot />
                    </div>
                </div>
            )
        }
}

export default SignUpArea;