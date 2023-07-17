import { createSlice } from "@reduxjs/toolkit";
import competitors from "../../assets/competitors.json";
const initialState = {
  competitors: JSON.parse(localStorage.getItem("competitors")) || competitors,
  currentCompetitor: null,
  voteCount: 0,
};
const CompetitorSlice = createSlice({
  name: "competitor",
  initialState,
  reducers: {
    setCompetitor: (state, action) => {
      state.currentCompetitor = action.payload;
    },
    increaseVote: (state) => {
      state.voteCount++;
    },
    decreaseVote: (state) => {
      state.voteCount--;
    },
    addVodeToCompetitors: (state, action) => {
      let comptIndex = state.competitors.findIndex(
        (comp) => comp.Id == action.payload
      );
      // console.log(state.competitors[comptIndex].NumberofVotes);
      state.competitors[comptIndex].NumberofVotes =
        Number(state.competitors[comptIndex].NumberofVotes) + state.voteCount;
    },
    clearState: (state) => {
      localStorage.setItem("competitors", JSON.stringify(state.competitors));
      state.currentCompetitor = null;
      state.voteCount = 0;
    },
  },
});
export default CompetitorSlice.reducer;
export const {
  setCompetitor,
  increaseVote,
  decreaseVote,
  addVodeToCompetitors,
  clearState,
} = CompetitorSlice.actions;
