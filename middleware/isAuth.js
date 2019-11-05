import jwt from 'jsonwebtoken';

module.exports = (req, res, next) => {
  const tokenvalue = req.get('Authorization');
  try {
    const decoded = jwt.verify(tokenvalue, '0123456789abcdfghjkmnpqrstvwxyzABCDEFGHIJKLMNOPQRE');
    if (!decoded) {
      res.status(400).json({
        status: 400,
        message: 'request not authentified',
      });
    }
    req.id = decoded.id;
    next();
  } catch (error) {
    res.status(401).json({
      status: 401,
      message: 'request not authentified',
    });
  }
};
