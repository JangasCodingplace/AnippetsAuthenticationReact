import axios from 'axios';

let csrfcookie = function() {  // for django csrf protection
let cookieValue = null,
    name = "csrftoken";
if (document.cookie && document.cookie !== "") {
    let cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) == (name + "=")) {
            cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
            break;
        }
    }
  }
  return cookieValue;
}

export function actionAuthenticate(formValues){
  return dispatch => {
    var csrftoken = csrfcookie();
    const basic_url = process.env.REACT_APP_API_URL;
    const auth_url = basic_url + 'user/auth/authentication'

    const body = JSON.stringify(formValues);
    console.log('TOKEN >',csrftoken)
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken
      },
      withCredentials: true,
    };

    axios
      .post(auth_url, body, config)
      .then((res) => {
        console.log(res)
        dispatch({
          type: "AUTHENTICATE",
          payload:res.data
        })
      })
      .catch((err) => {

      })
  }
}

export function actionSomething(){
  return {type: "SOMETHING"}
}
