import { UserReducerInitial } from "@/dev/types/User/userReducer.type";
import { createSlice } from "@reduxjs/toolkit";
import { userSignupAction } from "../actions/users/signupAction";
import { ErrorPayload } from "@/dev/types/Common/ErroInterface";
import { getUser } from "../actions/users/getUserAction";
import toast from "react-hot-toast";
import { userLogoutAction } from "../actions/users/logoutUserAction";
import { userLoginAction } from "../actions/users/loginUserAction";
import { getAllUsersAction } from "../actions/users/getAllUsers";


const initialState: UserReducerInitial = {
  loading: false,
  err: false,
  user: null,
  role: null,
  users: null,
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
        state.role = payload.role;
        toast.success("Successfully registered");
      })
      .addCase(userSignupAction.rejected, (state, { payload }) => {
        state.loading = false;
        state.err = (payload as ErrorPayload).message;
        state.user = null;
        toast.error(state.err);
      })
      .addCase(getUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.err = false;
        state.role = payload.role;
      })
      .addCase(getUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.err = (payload as ErrorPayload).message;
        state.user = null;
        if (state.err === "Your Permission Denied by Admin") {
          toast.caller(state.err);
        }
      })
      .addCase(userLogoutAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(userLogoutAction.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.role = null;
        state.err = false;
        toast.success("Logout successful You can Login");
      })
      .addCase(userLogoutAction.rejected, (state, { payload }) => {
        state.loading = false;
        state.err = (payload as ErrorPayload).message;
      })
      .addCase(userLoginAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(userLoginAction.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.role = payload.role;
        state.err = false;
        toast.success("Login succesfull");
      })
      .addCase(userLoginAction.rejected, (state, { payload }) => {
        state.loading = false;
        state.err = (payload as ErrorPayload).message;
        state.user = null;
        toast.error(state.err);
      })
      .addCase(getAllUsersAction.pending, (state) => {
        state.loading = false;
      })
      .addCase(
        getAllUsersAction.fulfilled,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (state, { payload }: { payload: any }) => {
          state.users = payload?.users;

          state.loading = false;
          state.err = false;
        }
      )
      .addCase(getAllUsersAction.rejected, (state, { payload }) => {
        state.loading = false;
        state.err = (payload as ErrorPayload).message;
        toast.error(state.err)
      });
  },
});
export default userReducer.reducer;
