import React, { Component } from "react";
import { Link } from "react-router-dom"

class TopPanel extends Component {
    render() {
        return(
            <div className="top-panel">
                <Link to="/">WordsExtractionAdmin</Link>
                <button>Save</button>
            </div>
        )
    }
} 

export default TopPanel;