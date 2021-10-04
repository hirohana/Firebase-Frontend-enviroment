import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as Actions from '../../reducks/users/actions';
import { USER_STATE } from '../../reducks/users/types';

const Main: React.FC = (props: any) => {
  console.log(props);
  return (
    <>
      <div>Main</div>
      <button onClick={props.actions.login}>Button</button>
    </>
  );
};

const obj: USER_STATE = {
  users: {
    uid: '001',
    username: 'Hiro',
    photoUrl: 'https://com',
  },
};
const mapStatetoProps = (state: USER_STATE) => {
  return { users: state.users };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    actions: {
      login() {
        dispatch(Actions.loginAction(obj));
      },
    },
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(Main);
