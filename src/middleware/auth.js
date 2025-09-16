// Authentication middleware placeholder
const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  
  if (!token || !token.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  
  // In a real implementation, you would validate the token here
  next();
};

module.exports = { authenticate };