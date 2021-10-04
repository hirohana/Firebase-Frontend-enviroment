export interface USER_STATE {
  users: {
    uid: string;
    photoUrl: string;
    username: string;
  };
}

export interface ACTION {
  type: string;
  payload: {
    uid: string;
    photoUrl: string;
    username: string;
  };
}
