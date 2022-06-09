import React, { Component } from "react";
import { connect } from "react-redux"; 
import { addEmail } from "../../redux/actions/addEmail";
import exactMailCollector from "../../redux/actions/parseInputs";

class MailInput extends Component {
    render() {
        return(
                <input type="text"
                    placeholder="Enter your mail"
                    value={email}
                    onChange={(e) => this.props.addEmail(e.target.value)}>
                </input>
        )
    } 
}

const getStateToProps = state => {
    return {
        text: state.addEmailReducer
    }
} 

const mapDispatchToProps = dispatch => {
    return {
        addEmail: e => dispatch(addEmail(e)),
        exactMailCollector: () => dispatch(exactMailCollector()),
    }
}

export default connect(getStateToProps, mapDispatchToProps)(MailInput);