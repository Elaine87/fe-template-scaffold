/**
 * Created Date: 2018-11-14, 6:55:00 pm
 * Author: panmin
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2018 蘑菇智行
 * ------------------------------------
 * Make it Work, Make it Right, Make it Fast.
 */

const { home } = require('./api/home');
const { login } = require('./api/user.js');
const delay = require('./delay');
// 是否禁用代理
const noProxy = process.env.NO_PROXY === 'true';

const proxy = {

  'GET /repos/*': home,
  'GET /api/:owner/:repo/raw/:ref/(.*)': (req, res) => {
    const {
      owner,
      repo,
      ref
    } = req.params;
    // http://localhost:8081/api/admin/webpack-mock-api/raw/master/add/ddd.md
    // owner => admin
    // repo => webpack-mock-api
    // ref => master
    // req.params[0] => add/ddd.md


    return res.json({
      id: 1,
      owner,
      repo,
      ref,
      path: req.params[0]
    });
  },
  'POST /api/login/account': login

};


module.exports =  delay(proxy, 1000);

