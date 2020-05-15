const initialState = {
  token: localStorage.getItem('token'),
  sessionKey:localStorage.getItem('sessionKey'),
  isAuthenticated: null,
  isLoading: false,
  user: null,
};

function token(state=initialState, action){
  if (action.type="AUTHENTICATE"){
    if (action.payload===undefined){
      return {
        ...state,
        isAuthenticated: localStorage.getItem('token')!==null,
      };
    }
    localStorage.setItem('token', action.payload.token);
    localStorage.setItem('sessionKey', action.payload.session);
    // var time = new Date(2021,01,01);

    let date = new Date();
    date.setTime(date.getTime()+(10*60*60*1000));
    // document.cookie = 'sessionid' + " = " + action.payload.session + "; expires = " +date.toGMTString();
    console.log(document.cookie)
    return {
      ...state,
      isAuthenticated: true,
      token:action.payload.token,
      sessionKey:action.payload.session,
    };
  }
  return state;
}

export default token;
