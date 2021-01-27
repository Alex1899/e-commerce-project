import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

export const selectSignInStarted = createSelector(
  [selectUser],
  (user) => user.startSignin
);

export const selectSignUpStarted = createSelector(
    [selectUser],
    (user) => user.startSignup
)
