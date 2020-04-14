export const loadUsers = (users, dispatch) => {
  dispatch({
    type: "LOAD_USERS",
    users
  });
};
