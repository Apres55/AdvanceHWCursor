import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import saveWordsAction from "../../redux/actions/save-words-action";


class TopPanel extends Component {
    render() {
        return(
            <div className="top-panel">
                <Link to="/">WordsExtractionAdmin</Link>
                <button onClick={this.props.saveWordsAction}>Save</button>
            </div>
        )
    }
} 

const mapDispatchToProps = dispatch => {
    return {
        saveWordsAction: () => dispatch(saveWordsAction())
    }
}

export default connect(null, mapDispatchToProps)(TopPanel);