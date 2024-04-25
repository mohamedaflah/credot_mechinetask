import { UserReducerInitial } from "@/dev/types/userReducer.type";
import { createSlice } from "@reduxjs/toolkit";
import { userSignupAction } from "../actions/users/signupAction";
import { ErrorPayload } from "@/dev/types/ErroInterface";

const initialState: UserReducerInitial = {
  loading: false,
  err: false,
  user: null,
};
const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userSignupAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(userSignupAction.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.err = false;
      })
      .addCase(userSignupAction.rejected, (state, { payload }) => {
        state.loading = false;
        state.err = (payload as ErrorPayload).message;
        state.user = null;
      });
  },
});
export default userReducer.reducer;
