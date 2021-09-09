/* eslint-disable no-underscore-dangle */
const jwt = require('jsonwebtoken');

let refreshTokens = [];

function register(req, res) {
  res.send({
    user: req.user,
    message: 'Register works'
  });
}

function login({ user }, res) {
  const data = { _id: user._id, email: user.email };

  try {
    const token = jwt.sign(
      { user: data },
      process.env.JWT_SECRET,
      { expiresIn: '5m' }
    );

    const refreshToken = jwt.sign(
      { user: data },
      process.env.JWT_SECRET
    );
    refreshTokens.push(refreshToken);
    return res.json({
      user,
      token,
      refreshToken
    });
  } catch (error) {
    res.status(500);
    return res.send(error);
  }
}

function logout({ body: { refreshToken } }, res) {
  refreshTokens = refreshTokens.filter((current) => current !== refreshToken);
  res.send('Logout successful');
}

function thisrefreshToken({ body: { refreshToken } }, res) {
  if (!refreshToken) {
    return res.sendStatus(401);
  }

  if (!refreshTokens.includes(refreshToken)) {
    return res.sendStatus(403);
  }

  return jwt.verify(refreshToken, process.env.JWT_SECRET, (err, { user }) => {
    if (err) {
      return res.sendStatus(403);
    }

    const data = { _id: user._id, email: user.email };

    const token = jwt.sign(
      { user: data },
      process.env.JWT_SECRET,
      { expiresIn: '1m' }
    );

    return res.json({
      token
    });
  });
}

module.exports = {
  register,
  login,
  logout,
  thisrefreshToken
};
