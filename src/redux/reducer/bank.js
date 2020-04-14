const mockClient = {
  id: "1234",
  user: "erickorso",
  name: "Erick",
  lastName: "Vargas",
  count: "123456789",
  cash: 150000,
  credit: 200000,
  debt: 2800,
  log: null, 
  password: "1234"
};

const transaction = {
  type: null,
  category: null,
  import: null,
  service: null,
  countToTransfer: null,
  newPassword: null
};
const log = null;

export default (state = {client: mockClient, transaction, log}, action) => {
  let client;
  switch (action.type) {
    case "UPDATE_CASH":
      client = {
        ...state.client,
        cash: action.cash
      };
      return {
        ...state,
        client
      };

    case "UPDATE_CREDIT":
      client = {
        ...state.client,
        debt: action.debt
      };
      return {
        ...state,
        client
      };

    case "UPDATE_PASSWORD":
      client = {
        ...state.client,
        password: action.password.newPassword
      };
      return {
        ...state,
        client
      };
    case "SEND_TRANSACTION":
      client = {
        ...state.client,
        log: action.transaction[action.transaction.length - 1]
      };
      return {
        ...state,
        client
      };

    case "SET_TRANSACTION":
      return {
        ...state,
        transaction: action.transaction
      };

    case "CLEAR_TRANSACTION":
      client = {
        ...state.client,
        log: null
      };
      return {
        ...state,
        transaction,
        client
      };

    case "LOAD_LOG":
      return {
        ...state,
        log: action.log
      };

    default:
      break;
  }

  return state;
};