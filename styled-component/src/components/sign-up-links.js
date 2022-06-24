import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

class LinksUp extends Component {
    render() {
        return(
            <div className="links-div-up">
                <Link to="/">Already have account? Sign In</Link>
            </div>
        )
    }
}

export default (LinksUp);