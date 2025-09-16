const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();

// Security middleware
app.use(helmet());
app.use(cors());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Routes
app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

app.get('/api/users', (req, res) => {
  // This would require authentication in a real implementation
  res.status(401).json({ error: 'Unauthorized' });
});

module.exports = app;