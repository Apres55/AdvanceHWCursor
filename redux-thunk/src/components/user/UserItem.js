export default function UserItem(props) {

    return (
        <div className="post-item">
            <div className="userDiv">
                <img className="avatar" src={props.avatar} alt=''/>
                <div className="userPanel">
                    <span>{props.name}</span>
                    <span>{props.username}</span>
                </div>
            </div>
        </div>
    );
}