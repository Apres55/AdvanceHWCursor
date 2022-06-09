
const MailInput = () => {

        return(
                <div>
                    <input type="text"
                        placeholder="Enter your mail"
                        onChange={(e) => this.props.addEmail(e.target.value)}>
                    </input>
                </div>
        )
    
}

export default (MailInput);