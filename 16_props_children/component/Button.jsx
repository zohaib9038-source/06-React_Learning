const Button = (props) => {
  const { imgurl, children, clickHandler } = props;
  console.log(imgurl);
  return (
    <button title={children} onClick={clickHandler}>
      {children}
      <img src={imgurl} alt={children} />
    </button>
  );
};
export default Button;
