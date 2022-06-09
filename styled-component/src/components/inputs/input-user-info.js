import React from "react";

const UserInfoInput = () => {
        return(
            <div className="user-info-inputs">   
                <input type="text"
                    placeholder="Name"
                    onChange={(e) => this.props.addName(e.target.value)}>
                </input>
                <input type="text"
                    placeholder="Last Name"
                    onChange={(e) => this.props.addLastName(e.target.value)}>
                </input>
            </div> 
        )
}

export default UserInfoInput;