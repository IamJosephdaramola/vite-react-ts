import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  numOfCakes: number;
}
const initialState: InitialState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    orderCake: (state, { payload = 1 }: PayloadAction<number>) => {
      state.numOfCakes -= payload;
    },
    restockCake: (state, { payload = 1 }: PayloadAction<number>) => {
      state.numOfCakes += payload;
    },
  },
});

export const { orderCake, restockCake } = cakeSlice.actions;
export default cakeSlice.reducer;
