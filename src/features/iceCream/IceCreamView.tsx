import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { orderIceCream, restockIceCream } from "./iceCreamSlice";

export default function IceCreamView() {
  const [value, setValue] = useState(1);
  const dispatch = useAppDispatch();
  const numOfIceCreams = useAppSelector(
    (state) => state.iceCream.numOfIceCreams
  );
  return (
    <div>
      <h2>Number of ice creams - {numOfIceCreams}</h2>
      <button onClick={() => dispatch(orderIceCream(1))}>
        Order ice creams
      </button>
      <div style={{ marginTop: "10px" }}>
        <input
          style={{ marginRight: "10px" }}
          type="number"
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value))}
        />
        <button onClick={() => dispatch(restockIceCream(value))}>
          Restock ice creams
        </button>
      </div>
    </div>
  );
}
