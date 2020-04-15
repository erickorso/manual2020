import get from "lodash/get";

export const getError = store => get(store, "error", null);
export const getErrorCode = store => get(store, "error.code", null);
export const getErrorMessage = store => get(store, "error.message", null);
