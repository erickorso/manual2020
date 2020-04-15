import get from "lodash/get";

export const getUser = store => get(store, "user", {});
export const getUserEmail = store => get(store, "user.user.email", {});
