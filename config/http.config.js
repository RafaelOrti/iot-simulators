// config/http.config.js
require('dotenv').config();

module.exports = {
  salesApiUrl: process.env.SALES_API_URL || 'http://localhost:5000/api/sales'
};
