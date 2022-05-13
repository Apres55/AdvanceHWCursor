export default function PostItem(props) {
    const { title, text } = props;
  
    return (
      <div className="post-item">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    );
  }
  