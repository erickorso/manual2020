export const loginAction = (user, dispatch) => {
  dispatch({
    type: "LOGIN",
    user
  });
};

export const loginErrorAction = (error, dispatch) => {
  dispatch({
    type: "LOGIN_ERROR",
    error
  });
};

export const signInAction = (user, dispatch) => {
  dispatch({
    type: "SIGNIN",
    user
  });
};

export const signInErrorAction = (error, dispatch) => {
  dispatch({
    type: "SIGNIN_ERROR",
    error
  });
};

export const logoutAction = (dispatch) => {
  dispatch({
    type: "LOGOUT"
  });
};
