// config/mqtt.config.js
require('dotenv').config();

module.exports = {
  mqttBrokerUrl: process.env.MQTT_BROKER_URL || 'mqtt://localhost:1883',
  gpsTopic: 'transport/gps',
  plcTopic: 'factory/plc'
};
