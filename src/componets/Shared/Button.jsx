import PropTypes from "prop-types";

function Button({
  text = "Add To Cart",
  type = "primary",
  handleClick,
  border,
  background = "transparent",
  color = "#BF4F74",
  fontSize,
  width,
  padding = "0.25em 1em",
}) {
  const buttonStyle = {
    background: background,
    borderRadius: "3px",
    border: border,
    width: width,
    color: color,
    margin: "0.5em 1em",
    padding: padding,
    fontSize: fontSize + "px",
    cursor: "pointer",
  };

  return (
    <button style={buttonStyle} onClick={handleClick} aria-label={text}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  handleClick: PropTypes.func,
};

export { Button };
