const LOGIN_USER = 'users/LOGIN_USER';

const initialState = {
  user: ''
}

export default function reducer(state = initialState , action){
  console.log(action);
  switch(action.type){
    case LOGIN_USER:
      return Object.assign({}, state, {user:action.payload})

    default:
      return state;
  }
}


export function loginUser(user) {
  return {
    type: LOGIN_USER,
    payload: user
  }
}
