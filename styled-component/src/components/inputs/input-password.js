import React, { Component } from "react";
import { connect } from "react-redux"; 
import { addPassword } from "../../redux/actions/addPass";
import exactPasswordCollector from "../../redux/actions/parseInputs";

class PasswordInput extends Component {
    render() {
        return(
                <input type="text"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => this.props.addPassword(e.target.value)}>
                </input>
        )
    } 
}

const getStateToProps = state => {
    return {
        text: state.addPasswordReducer
    }
} 

const mapDispatchToProps = dispatch => {
    return {
        addPassword: e => dispatch(addPassword(e)),
        exactPasswordCollector: () => dispatch(exactPasswordCollector()),
    }
}

export default connect(getStateToProps, mapDispatchToProps)(PasswordInput);