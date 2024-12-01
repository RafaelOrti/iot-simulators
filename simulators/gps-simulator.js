const mqtt = require('mqtt');
const { mqttBrokerUrl, gpsTopic } = require('../config/mqtt.config');

const client = mqtt.connect(mqttBrokerUrl, {
  username: process.env.MQTT_USERNAME,
  password: process.env.MQTT_PASSWORD,
});

function simulateGPS() {
  let latitude = 40.712776;
  let longitude = -74.005974;

  setInterval(() => {
    latitude += Math.random() * 0.0002 - 0.0001;
    longitude += Math.random() * 0.0002 - 0.0001;

    const gpsData = {
      latitude,
      longitude,
      timestamp: new Date().toISOString()
    };

    client.publish(gpsTopic, JSON.stringify(gpsData), () => {
      console.log(`Published GPS data: ${JSON.stringify(gpsData)}`);
    });
  }, 5000);
}

client.on('connect', () => {
  console.log('Connected to MQTT broker');
  simulateGPS();
});
