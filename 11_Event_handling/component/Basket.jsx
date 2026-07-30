const Basket = (props) => {
  const { no_off_apples, basket_number } = props;
  return (
    <div className="basketContainer">
      <h2>{no_off_apples} apples</h2>
      <p>Basket {basket_number}</p>
    </div>
  );
};
export default Basket;
