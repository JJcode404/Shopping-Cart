function CartSumary({ cart }) {
  return (
    <div className="summaryContainer">
      <div className="hearder">Order Summary</div>
      <hr />
      <div className="subtotalContainer">
        <div className="subtotal">Subtotal</div>
        <div className="subtotalPrice">$38.99</div>
      </div>
      <div className="totalContainer">
        <div className="total">Total</div>
        <div className="totalPrice">$38.99</div>
      </div>
      <div className="checkOut">
        <Button
          type="submit"
          text="Checkout"
          color="white"
          background="black"
          width="100%"
          padding="15px"
          fontSize="16px"
          border="none"
        />
      </div>
    </div>
  );
}
