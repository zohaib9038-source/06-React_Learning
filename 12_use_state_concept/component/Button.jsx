const Button = (props) => {
  const { imgurl, title, clickHandler } = props;
  console.log(imgurl);
  return (
    <button title={title} onClick={clickHandler}>
      <img src={imgurl} alt={title} />
    </button>
  );
};
export default Button;
