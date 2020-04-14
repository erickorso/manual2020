import get from "lodash/get";
import { createSelector } from "reselect";

export const getClient = store => get(store, "bank.client", null);

export const getClientCash = store => get(store, "bank.client.cash", 0);

export const getClientCredit = store => get(store, "bank.client.credit", 0);

export const getDebtCredit = store => get(store, "bank.client.debt", 0);

export const getLastTransaction = store => get(store, "bank.client.log", 0);

export const allTransactions = store => get(store, "bank.log", []);

export const getCurrentOperation = store => get(store, "bank.transaction", 0);

export const purchasingCapacity = createSelector(
  getClientCash,
  getClientCredit,
  (cash, credit) => cash + credit
);

export const getAllTransactions = createSelector(
    allTransactions, 
    items => items ? items.reverse() : null
);