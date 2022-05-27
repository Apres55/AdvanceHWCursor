import React, { Component } from "react";
import TopPanel from "../TopPanel/TopPanel";
import LeftPanel from "../LeftPanel/LeftPanel";
import { connect } from "react-redux";
import { addTextAction } from "../../redux/actions/add-text-action";
import exactWordsCollector from "../../redux/actions/text-parse-action";
import { saveWordsAction } from "../../redux/actions/save-words-action";

class NewPost extends Component{
    render() {
        return(
            <div>
                <TopPanel />
                <div className="admin-page">
                    <LeftPanel />
                    <div className="content">
                        <textarea 
                            cols="30" 
                            rows="10"
                            onChange={(e) => this.props.addTextAction(e.target.value)}
                        >
                        </textarea>
                        <button className="parse-in" onClick={this.props.exactWordsCollector}>Parse!</button>
                    </div>
                </div>
            </div>
        )
    }
}

const getStateToProps = state => {
    return {
        text: state.addTextReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTextAction: e => dispatch(addTextAction(e)),
        exactWordsCollector: () => dispatch(exactWordsCollector()),
        saveWordsAction: () => dispatch(saveWordsAction())
    }
}

export default connect(getStateToProps, mapDispatchToProps)(NewPost);