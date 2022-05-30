export default function PostItem(props) {
    const { name, text } = props;
  
    return (
      <div className="post-item">
        <h4>{name}</h4>
        <p>{text}</p>
      </div>
    );
  }
  