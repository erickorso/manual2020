const errorDefault = {
  code: null,
  message: null
};

export default (state = errorDefault, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
    case "SIGNIN_ERROR":
      return action.error;

    case "CLEAR_ERROR":
      return errorDefault;

    default:
      break;
  }

  return state;
};
