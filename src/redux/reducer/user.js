const defaultUser = {
  user: {
    email: null
  }
}
export default (state = defaultUser, action) => {
  switch (action.type) {
    case "LOGIN":
    case "SIGNIN":
      return action.user;

    case "LOGOUT":
      return defaultUser;

    default:
      break;
  }

  return state;
};
