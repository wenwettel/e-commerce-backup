import './buttonStyle.css';

function Button(props) {
  console.log(props);
  return (
    <div className="btn" role="button" onClick={props.onClick}>
      {props.text}
      {props.children}
    </div>
  );
}

export default Button;
