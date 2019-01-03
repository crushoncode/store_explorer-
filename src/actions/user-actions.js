import $ from 'jquery';

export const API_REQUEST_SUCCESS = 'users: updateUser';
export const API_REQUEST_ERROR = 'users: showError';

export function updateUser(newUser) {
  return {
    type: API_REQUEST_SUCCESS,
    payload: {
      user: newUser
    }
  };
}

export function showError() {
  return {
    type: API_REQUEST_ERROR,
    payload: {
      user: 'ERROR!!'
    }
  };
}

// export function onRequest() {
//   return {
//     type: API_REQUEST_REQUEST
//   };
// }

// switch from jquery to javascript

export function apiRequest() {
  return (dispatch) => {
    // dispatch(requestMade());

    $.ajax({
      url: 'http://google.com',
      success(res) {
        console.log('SUCCESS');
        dispatch(updateUser(res.newUser));
      },
      error() {
        console.log('ERROR');

        dispatch(showError());
      }
    });
  };
}

// export async function apiRequest() {
//   try {
//     let response = await fetch('/users.json')
//     let json = await response.json()
//     if (json)
//       console.log('SUCCESS')
//     }
//     catch(e) {
//       console.log('ERROR')
//     }
//   }

// # 1
// function get(url) {
//   return new Promise((resolve, reject) => {
//     const req = new XMLHttpRequest();
//     req.open('GET', url);
//     req.onload = () => req.status === 200 ? resolve(req.response) : reject(Error(req.statusText));
//     req.onerror = (e) => reject(Error(`Network Error: ${e}`));
//     req.send();
//   });
// }

// # 2
// Async/Await requirements: Latest Chrome/FF browser or Babel: https://babeljs.io/docs/plugins/transform-async-to-generator/
// Fetch requirements: Latest Chrome/FF browser or Github fetch polyfill: https://github.com/github/fetch
// async function fetchAsync() {
//   // await response of fetch call
//   let response = await fetch('http://google.com');
//   // only proceed once promise is resolved
//   let data = await response.json();
//   // only proceed once second promise is resolved
//   return data;
// }

// # 3
// const fetchAsyncA = async () => await (await fetch('http://api.github.com')).json()
