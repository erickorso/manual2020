const defaultUser = {
  name: 'Erick',
  lastName: 'Vargas'
}
export default (state = defaultUser, action) => {
  switch (action.type) {
    case "GET_USER":
      return {
        ...state,
        user: action.user
      };

    default:
      break;
  }

  return state;
};
