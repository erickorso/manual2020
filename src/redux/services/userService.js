import { loadUsers } from "../actions/user";

export const loadUserService = dispatch => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => loadUsers(users, dispatch));
};
