import { useSelector } from "react-redux";

export const Calculator = () => {
  const stateNow = useSelector((state) => state.calNum);
  console.log("stateNow:", stateNow);
  return (
    <div>
      <h1>Simple Calculatar</h1>
      <div>
        <button>
          <span>-</span>
        </button>
        <input type="text" name="" id="" value="0" />
        <button>
          <span>+</span>
        </button>
      </div>
    </div>
  );
};
