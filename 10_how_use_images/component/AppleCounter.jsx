import Button from "./Button";
const LeftArrow = new URL("../assets/images/left-arrow.png", import.meta.url)
  .href;
const RightArrow = new URL("../assets/images/right-arrow.png", import.meta.url)
  .href;
import Basket from "./Basket";
const AppleCounter = () => {
  return (
    <div className="appleContainer">
      <Basket no_off_apples="10" basket_number="1" />
      <Button imgurl={LeftArrow} title="Left-arrow" />
      <Button imgurl={RightArrow} title="Right-arrow" />
      <Basket no_off_apples="0" basket_number="2" />
    </div>
  );
};

export default AppleCounter;
