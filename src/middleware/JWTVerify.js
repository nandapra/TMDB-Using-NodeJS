const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
  JWTVerify: (req, res, next) => {
    try {
      const authHeader = req.header('Authorization');
      if (authHeader.indexOf('Bearer ') >= 0) {
        const token = authHeader.split('Bearer ');
        var decoded = jwt.verify(token[1], process.env.SECRET_KEY);
        req.user = decoded;
        next();
      } else {
        const bodyRes = {
          code: 401,
          result: null,
          errorMessage: 'Unauthorized',
        };
        res.status(401).send(bodyRes);
        return;
      }
    } catch (error) {
      if (error.name === 'TypeError') {
        const bodyRes = {
          code: 401,
          result: null,
          errorMessage: 'Unauthorized',
        };
        res.status(401).send(bodyRes);
        return;
      }
      if (error.name === 'TokenExpiredError') {
        const bodyRes = {
          code: 401,
          result: null,
          errorMessage: 'Token Expired',
        };
        res.status(401).send(bodyRes);
        return;
      }
      const bodyRes = {
        code: 500,
        result: null,
        errorMessage: 'Internal Server Error',
      };
      res.status(500).send(bodyRes);
      return;
    }
  },
};
