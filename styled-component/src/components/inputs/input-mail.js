
const MailInput = () => {

        return(
                <div>
                    <input className="input-place" type="text"
                        placeholder="Enter your email *"
                        onChange={(e) => this.props.addEmail(e.target.value)}>
                    </input>
                </div>
        )
    
}

export default (MailInput);