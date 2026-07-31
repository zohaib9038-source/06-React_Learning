const Basket = (props) => {
  const { no_off_apples, basket_number } = props;
  return (
    <div className="basketContainer">
      <h2>{no_off_apples} apples</h2>
      <p>
        Basket {basket_number}
        {no_off_apples === 10 && "full"} {no_off_apples === 0 && "empty"}
      </p>
    </div>
  );
};
export default Basket;
