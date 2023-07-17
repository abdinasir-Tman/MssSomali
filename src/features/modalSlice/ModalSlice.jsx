import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isOpen: false,
};
const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    handleModal: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});
export default ModalSlice.reducer;
export const { handleModal } = ModalSlice.actions;
