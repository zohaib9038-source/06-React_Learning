const Button = (props) => {
  const { imgurl, title } = props;
  console.log(imgurl);
  return (
    <button title={title}>
      <img src={imgurl} alt={title} />
    </button>
  );
};
export default Button;
