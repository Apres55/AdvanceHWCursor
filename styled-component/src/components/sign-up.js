import React, { Component } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MailInput from "./inputs/input-mail";
import PasswordInput from "./inputs/input-password";
import UserInfoInput from "./inputs/input-user-info";
import Logo from "./images/logo-component";
import LinksUp from "./sign-up-links";
import CopyrightFoot from "./copyright-footer";
import {addName} from "../redux/actions/addName";
import {addLastName} from "../redux/actions/addLastName";
import {addPassword} from "../redux/actions/addPass";
import {addEmail} from "../redux/actions/addEmail";
import { connect } from "react-redux";
import exactInfoCollector from "../redux/actions/parseInputs";

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
                        <button className="sign-up-btn" onClick={this.props.mapDispatchToProps}>SIGN UP</button>
                        <LinksUp />
                        <CopyrightFoot />
                    </div>
                </div>
            )
        }
}

const getStateToProps = state => {
    return {
        text: state.combineReducers,
        words: state.infoParserReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addName: e => dispatch(addName(e)),
        addLastName: e => dispatch(addLastName(e)),
        addPassword: e => dispatch(addPassword(e)),
        addEmail: e => dispatch(addEmail(e)),
        exactInfoCollector: () => dispatch(exactInfoCollector())
    }
}

export default connect(getStateToProps, mapDispatchToProps)(SignUpArea);