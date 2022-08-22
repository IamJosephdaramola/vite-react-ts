import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  numOfIceCreams: number;
};

const initialState: InitialState = {
  numOfIceCreams: 20,
};

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    orderIceCream: (state, { payload = 1 }: PayloadAction<number>) => {
      state.numOfIceCreams -= payload;
    },
    restockIceCream: (state, { payload = 1 }: PayloadAction<number>) => {
      state.numOfIceCreams += payload;
    },
  },
});

export const { orderIceCream, restockIceCream } = iceCreamSlice.actions;
export default iceCreamSlice.reducer;
