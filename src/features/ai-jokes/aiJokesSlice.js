import { createSlice } from "@reduxjs/toolkit";

const aiJokesSlice = createSlice({
  name: "ai-jokes",
  initialState: {
    rules: [
      {
        name: "Joke Type",
        description: "Programer",
      },
    ],
    jokes: [],
  },
  reducers: {
    ruleAdded(state, action) {
      const ruleIndex = state.rules.findIndex(
        (rule) => rule.name === action.payload.name
      );
      if (ruleIndex >= 0) return;
      state.rules.push(action.payload);
    },
    ruleRemove(state, action) {
      const ruleIndex = state.rules.findIndex(
        (rule) => rule.name === action.payload
      );
      if (ruleIndex < 0) return;
      state.rules.splice(ruleIndex, 1);
    },
  },
});

export const { ruleAdded, ruleRemove } = aiJokesSlice.actions;

export default aiJokesSlice.reducer;
