import React, {useState, useEffect} from 'react'

import fire from '../../config/firebase';
import Login from '../Login';

import '../Login/Login.scss'

export default ({ logoutAction, clearError, userEmail, history }) => {
  const {
    location: { pathname },
  } = history;

  const [out, setOut] = useState(null);

  const logout = () => {
    clearError();
    logoutAction();
    fire.auth().signOut();
  };

  useEffect(() => {
    if (!out) {
      logout();
      setOut(true);
    }
  }, [out, setOut, logout]);

  useEffect(() => {
    if (out && userEmail && pathname === "/logout") {
      history.push("/admin");
    }
  }, [userEmail, history, pathname, out]);

  return <div className="makeStyles-wrapper-1">
             <Login message="Thanks, come back soon"/>
          </div>
}