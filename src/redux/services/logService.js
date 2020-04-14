import { sendTransaction, loadLog } from "../actions/bank";

export const loadLogService = dispatch => {
  fetch("http://localhost:8080/count/log")
    .then(response => response.json())
    .then(logs => loadLog(logs, dispatch));
};

export const saveLogService = (data, dispatch) => {
  fetch("http://localhost:8080/count/saveLog", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(logs => sendTransaction(logs, dispatch));
};
