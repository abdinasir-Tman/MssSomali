import { configureStore } from "@reduxjs/toolkit";
import ModalSlice from "../features/modalSlice/ModalSlice";
import CompetitorSlice from "../features/competitors/CompetitorSlice";
const store = configureStore({
  reducer: {
    modal: ModalSlice,
    competitor: CompetitorSlice,
  },
});

export default store;
