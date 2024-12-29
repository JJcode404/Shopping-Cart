import PropTypes from "prop-types";

function Button({
  text = "Add To Cart",
  type = "primary",
  handleClick,
  className,
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
    marginTop: "0.5em",
    padding: padding,
    fontSize: fontSize + "px",
    cursor: "pointer",
  };

  return (
    <button
      style={buttonStyle}
      onClick={handleClick}
      aria-label={text}
      className={className}
    >
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
