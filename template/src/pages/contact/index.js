/**
 * Created Date: 2018-11-06, 5:02:39 pm
 * Author: panmin
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2018 蘑菇智行
 * ------------------------------------
 * Make it Work, Make it Right, Make it Fast.
 */
import '../../assets/base.scss';
import '../../assets/home.scss';
import './index.scss';
const {
  api: {
    login,
    hello
  }
} = require('../../config/index');
console.log('------------------------------------hello-start');
console.log(hello);
console.log('------------------------------------hello-end');

fetch(login , {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  method: 'POST',
  body: JSON.stringify({
    password: '888888',
    username: 'admin'
  })
}).then((response) => {
  return response.json();
}).then(data => {
  console.log('data:', data);

});


fetch(hello)
  .then(response => response.json())
  .then(data => {
    console.log("response data is : %s", data);
  });

