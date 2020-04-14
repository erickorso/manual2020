import get from "lodash/get";

export const getUser = store => get(store, "user", {});
