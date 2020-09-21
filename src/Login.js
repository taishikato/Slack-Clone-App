import { Button } from '@material-ui/core';
import React from 'react';

import { auth, provider } from './firebase';
import './Login.css';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

const Login = () => {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
          alt=""
        />
        <h1>Sign in to Takato space</h1>
        <p>taishikato.com</p>
        <Button onClick={signIn}>SIgn in with Google</Button>
      </div>
    </div>
  );
};

export default Login;
