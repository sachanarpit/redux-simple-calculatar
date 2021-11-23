import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { decNum, incNum } from "../redux/actions";

export const Calculator = () => {
  const stateNow = useSelector((state) => state.calNum);
  const disp = useDispatch();
  return (
    <div>
      <h1>Simple Calculatar using Redux</h1>
      <div>
        <button onClick={() => disp(decNum(1))}>
          <span>-</span>
        </button>
        <input type="text" name="" id="" value={stateNow} readOnly />
        <button onClick={() => disp(incNum(1))}>
          <span>+</span>
        </button>
      </div>
    </div>
  );
};
