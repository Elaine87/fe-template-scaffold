/**
 * Created Date: 2018-11-19, 2:06:11 pm
 * Author: panmin
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2018 蘑菇智行
 * ------------------------------------
 * Make it Work, Make it Right, Make it Fast.
 */

const APIPRIFIX0 = '/api';
const APIPRIFIX1 = '/repos';
const BASEURL = '//api.zhidaohulian.com';

module.exports = {
  APIPRIFIX: APIPRIFIX0,
  BASEURL: BASEURL,
  api: {
    login: `${APIPRIFIX0}/login/account`,
    hello: `${APIPRIFIX1}/hello`
  }
};
