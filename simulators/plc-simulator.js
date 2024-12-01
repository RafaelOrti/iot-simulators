const mqtt = require('mqtt');
const { mqttBrokerUrl, plcTopic } = require('../config/mqtt.config');

const client = mqtt.connect(mqttBrokerUrl, {
  username: process.env.MQTT_USERNAME,
  password: process.env.MQTT_PASSWORD,
});

function simulatePLC() {
  setInterval(() => {
    const plcData = {
      clientId: "Omrom",
      machineId: "PLC001",
      dataStructure: {
        temperature: (Math.random() * 20 + 70).toFixed(2),
        humidity: (Math.random() * 30 + 30).toFixed(2),
        co2: (Math.random() * 10 + 400).toFixed(2),
      },
    };

    client.publish(plcTopic, JSON.stringify(plcData), () => {
      console.log(`Published PLC data: ${JSON.stringify(plcData)}`);
    });
  }, 5000);
}

client.on('connect', () => {
  console.log('Connected to MQTT broker');
  simulatePLC();
});
