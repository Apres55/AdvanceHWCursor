import Stats from "./stats";

export default function PostItem(props) {

    return (
      <div className="post-item">
        <div className="userDiv">
        <h4>{props.imgFile}</h4>
          <div className="userPanel">
            <span>{props.title}</span>
            <span>{props.link}</span>
            <span>{props.date}</span>
          </div>
        </div>
        <div className="textDiv">
          <p className="textArea">
            {props.text}
            <img className='content-image' src={props.image} alt='none'></img>
          </p>
          <Stats />
        </div>
      </div>
    );
  }
  