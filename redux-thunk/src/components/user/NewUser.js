import React, { Component} from "react";
import { connect } from "react-redux"; 
import TopBar from "../bar/TopBar";
import { addUser } from "../../redux/actions/add-user-action";
import exactUsersCollector from "../../redux/actions/add-user-action";

class NewUser extends Component {
    render() {

        return(
            
            <div>
                <TopBar />
                <div className="admin-page">
                    <div className="content">
                    <form className="new-user-form">
                            <input
                                type="name"
                                placeholder="name"
                                value={this.name}
                                onChange={(e) => this.props.addUser(e.target.value)}
                            />
                            <input
                                type="username"
                                placeholder="username"
                                value={this.username}
                                onChange={(e) => this.props.addUser(e.target.value)}
                            />
                            <input
                                type="url"
                                placeholder="url"
                                value={this.avatar}
                                onChange={(e) => this.props.addUser(e.target.value)}
                            />
                            <button type="submit" onClick={this.props.exactUsersCollector}>
                                Create
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const getStateToProps = state => {
    return {
        users: state.addUserReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addUser: e => dispatch(addUser(e)),
        exactUsersCollector: () => dispatch(exactUsersCollector()),
    }
}

export default connect(getStateToProps, mapDispatchToProps)(NewUser);