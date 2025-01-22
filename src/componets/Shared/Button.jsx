import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./Shared.module.css";

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
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: isHovered ? "#808080" : background,
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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${styles[type]}`}
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
