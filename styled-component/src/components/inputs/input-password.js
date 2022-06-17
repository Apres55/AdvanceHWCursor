import React from "react";

const PasswordInput = () => {
        return(
            <div className="input-place">   
                <input className="input-place" type="text"
                    placeholder="Enter password *"
                    onChange={(e) => this.props.addPassword(e.target.value)}>
                </input>
            </div> 
        )
}

export default PasswordInput;