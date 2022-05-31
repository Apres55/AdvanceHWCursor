export default function PostItem(props) {
  
    return (
      <div className="post-item">
        <div className="userDiv">
          <img className="avatar" src={props.avatar} alt=''/>
          <div className="userPanel">
            <span>{props.name}</span>
            <span>{props.username}</span>
          </div>
        </div>
        <div className="textDiv">
          <p className="textArea">
            {props.text}
          </p>
        </div>
      </div>
    );
  }
  