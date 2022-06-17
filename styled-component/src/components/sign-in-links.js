import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

class Links extends Component {
    render() {
        return(
            <div className="links-div">
                <Link to="/">Forgot-password?</Link>
                <Link to="/sign-up">Don't have an account? Sign Up</Link>
            </div>
        )
    }
}

export default (Links);