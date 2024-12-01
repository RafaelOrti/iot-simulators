const axios = require('axios');
const { salesApiUrl } = require('../config/http.config');

function simulateSale() {
  console.log('Holaaaa')
  // setInterval(async () => {
  //   const saleData = {
  //     order_id: Math.floor(Math.random() * 900000 + 100000),
  //     product: ["Laptop", "Smartphone", "Tablet"][Math.floor(Math.random() * 3)],
  //     quantity: Math.floor(Math.random() * 5) + 1,
  //     price: (Math.random() * 950 + 50).toFixed(2),
  //     timestamp: new Date().toISOString()
  //   };

  //   try {
  //     const response = await axios.post(salesApiUrl, saleData);
  //     if (response.status === 201) {
  //       console.log(`Sale data sent: ${JSON.stringify(saleData)}`);
  //     }
  //   } catch (error) {
  //     console.error('Failed to send sale data:', error.message);
  //   }
  // }, 15000);
}

simulateSale();
