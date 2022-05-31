import React, { Component} from "react";
import { useDispatch } from 'react-redux';
import TopBar from "../bar/TopBar";
import { addUser } from "../../redux/actions/add-user-action";
import { USERS } from "../../redux/reducers/addUserReducer";


class NewUser extends Component {
    render() {

        return(
            
            <div>
                <TopBar />
                <div className="admin-page">
                    <div className="content">
                    <form className="new-user-form" onSubmit={onCreateUser}>
                            <input
                                type="text"
                                placeholder="text"
                                value={avatar}
                                onChange={(e) => this.props.addUser(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="text"
                                value={name}
                                onChange={(e) => this.props.addUser(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="url"
                                value={username}
                                onChange={(e) => this.props.addUser(e.target.value)}
                            />
                            <button type="submit">
                                Create
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewUser;