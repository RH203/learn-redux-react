import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  value: [],
  total: 0
}

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      state.value.push(action.payload)
      // console.log(`Slice added to cart: ${state.value}`)
      state.total += 1
    }
  }
})

export const {addProductToCart} = productSlice.actions;
export default productSlice.reducer;