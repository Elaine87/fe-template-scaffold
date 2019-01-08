/**
 * Created Date: 2018-11-19, 2:36:00 pm
 * Author: panmin
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2018 蘑菇智行
 * ------------------------------------
 * Make it Work, Make it Right, Make it Fast.
 */


exports.login = function (req, res) {
  const { password, username } = req.body;
  if (password === '888888' && username === 'admin') {
    return res.json({
      status: 'ok',
      code: 0,
      token: '111111111111f',
      data: {
        id: 1,
        username: 'kenny',
        sex: 6
      }
    });
  } else {
    return res.json({
      status: 'error',
      code: 403
    });
  }
};
