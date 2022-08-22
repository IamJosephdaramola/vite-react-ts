import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { orderCake, restockCake } from "./cakeSlice";

export default function CakeView() {
  const [value, setValue] = useState(1);
  const dispatch = useAppDispatch();
  const numOfCakes = useAppSelector((state) => state.cake.numOfCakes);

  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(orderCake(1))}>Order cake</button>
      <div style={{ marginTop: "10px" }}>
        <input
          style={{ marginRight: "10px" }}
          type="number"
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value))}
        />
        <button onClick={() => dispatch(restockCake(value))}>
          Restock cakes
        </button>
      </div>
    </div>
  );
}
