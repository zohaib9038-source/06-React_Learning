import Button from "./Button";
const LeftArrow = new URL("../assets/images/left-arrow.png", import.meta.url)
  .href;
const RightArrow = new URL("../assets/images/right-arrow.png", import.meta.url)
  .href;
import Basket from "./Basket";
let totalAppl = 10;
let rigthApple = 0;
let leftApple = totalAppl - rigthApple;

const AppleCounter = ({ onClick }) => {
  const LeftclickHandler = () => {
    if (rigthApple > 0) {
      leftApple++;
      rigthApple--;
      RenderApp();
      console.log("leftapple=", leftApple, "rightapple", rigthApple);
    }
  };
  const RightclickHandler = () => {
    if (leftApple > 0) {
      leftApple--;
      rigthApple++;
      RenderApp();
      console.log("leftapple=", leftApple, "rightapple", rigthApple);
    }
  };
  return (
    <>
      <div className="appleContainer">
        <Basket no_off_apples={leftApple} basket_number={1} />
        <Button
          imgurl={LeftArrow}
          title="LeftArrow"
          clickHandler={LeftclickHandler}
        />
        <Button
          imgurl={RightArrow}
          title="RightArrow"
          clickHandler={RightclickHandler}
        />
        <Basket no_off_apples={rigthApple} basket_number="2" />
      </div>
    </>
  );
};

export default AppleCounter;
