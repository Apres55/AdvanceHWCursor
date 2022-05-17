export default function PostItem(props) {
    const { userData, textHolder } = props;
  
    return (
      <div className="post-item">
        <div className="userDiv">
        <h4>{userData.imgFile}</h4>
          <div className="userPanel">
            <span>{userData.title}</span>
            <span>{userData.link}</span>
            <span>{userData.date}</span>
          </div>
        </div>
        <div className="textDiv">
          <p>{textHolder.text}</p>
          {textHolder.postImg}
        </div>
      </div>
    );
  }
  