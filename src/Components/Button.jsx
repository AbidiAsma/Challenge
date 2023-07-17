
import './StyleButton.css';
function Button({title, children}) {
  return (
    <>
      <button className="btn">
        {title}
        {children}
      </button>
    </>
  );
}

export default Button