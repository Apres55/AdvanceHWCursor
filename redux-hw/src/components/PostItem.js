export default function PostItem(props) {
    const { userData, textHolder } = props;
  
    return (
      <div className="post-item">
        <div>
          <h4>{userData.title}</h4>
          {userData.link}
          {userData.date}
        </div>
        <p>{textHolder.text}</p>
      </div>
    );
  }
  