export const loadLog = (log, dispatch) => {
  dispatch({
    type: "LOAD_LOG",
    log
  });
};

export const updateCash = (cash, dispatch) => {
  dispatch({
    type: "UPDATE_CASH",
    cash
  });
};

export const updateCredit = (debt, dispatch) => {
  dispatch({
    type: "UPDATE_CREDIT",
    debt
  });
};

export const updatePasword = (password, dispatch) => {
  dispatch({
    type: "UPDATE_PASSWORD",
    password
  });
};

export const setTransaction = (transaction, dispatch) => {
  dispatch({
    type: "SET_TRANSACTION",
    transaction
  });
};

export const clearTransaction = dispatch => {
  dispatch({
    type: "CLEAR_TRANSACTION"
  });
};

export const sendTransaction = (transaction, dispatch) => {
  dispatch({
    type: "SEND_TRANSACTION",
    transaction
  });
};
