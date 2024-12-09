function Button({ text = "Add To Cart", type = "primary", handleClick }) {
  return (
    <>
      <button style={buttonStyle} onClick={handleClick} lable="button">
        {text}
      </button>
    </>
  );
}

export { Button };
