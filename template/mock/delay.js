/**
 * Created Date: 2018-11-19, 2:39:09 pm
 * Author: panmin
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2018 蘑菇智行
 * ------------------------------------
 * Make it Work, Make it Right, Make it Fast.
 */


module.exports = function (proxy, timer = 0) {
  const mockApi = {};
  Object.keys(proxy).forEach(function (key) {
    const result = proxy[key];
    if (Object.prototype.toString.call(result) === '[object String]' && /^http/.test(result) || key === '_proxy' || timer === 0) {
      mockApi[key] = proxy[key];
    } else {
      mockApi[key] = function (req, res) {
        let foo;
        if (Object.prototype.toString.call(result) === '[object Function]') {
          foo = result;
        } else {
          foo = function (_req, _res) {
            return _res.json(result);
          };
        }
        setTimeout(function () {
          foo(req, res);
        }, timer);
      };
    }
  });
  return mockApi;
};
