const Increase = (props) => {
  const { Increment, clickHandling, disabled } = props;

  return (
    <div className="CounterContainer">
      <button disabled={disabled} onClick={clickHandling}>
        {Increment}
      </button>
    </div>
  );
};
export default Increase;
