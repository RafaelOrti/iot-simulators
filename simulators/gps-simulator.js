const mqtt = require('mqtt');
const { mqttBrokerUrl } = require('../config/mqtt.config');

// const mqttBrokerUrl = 'ws://localhost:9001'; // URL del broker MQTT habilitado para WebSocket

// Configuración del cliente MQTT
const client = mqtt.connect(mqttBrokerUrl, {
  username: process.env.MQTT_USERNAME,
  password: process.env.MQTT_PASSWORD,
});

// Datos iniciales para los vehículos
const vehicles = [
  { id: 'vehicle1', latitude: 40.712776, longitude: -74.005974 },
  { id: 'vehicle2', latitude: 34.052235, longitude: -118.243683 },
  { id: 'vehicle3', latitude: 41.878113, longitude: -87.629799 },
  { id: 'vehicle4', latitude: 51.507351, longitude: -0.127758 },
];

// Función para simular actualizaciones GPS
function simulateGPS() {
  setInterval(() => {
    vehicles.forEach((vehicle) => {
      // Generar pequeñas variaciones en las coordenadas
      vehicle.latitude += Math.random() * 0.01 - 0.0005;
      vehicle.longitude += Math.random() * 0.01 - 0.0005;

      const gpsData = {
        latitude: vehicle.latitude,
        longitude: vehicle.longitude,
        timestamp: new Date().toISOString(),
      };

      // Publicar los datos en el tópico correspondiente
      const topic = `vehicles/${vehicle.id}/location`;
      client.publish(topic, JSON.stringify(gpsData), () => {
        console.log(`Published to ${topic}: ${JSON.stringify(gpsData)}`);
      });
    });
  }, 5000); // Publicar cada 5 segundos
}

// Conectar al broker y empezar la simulación
client.on('connect', () => {
  console.log('Connected to MQTT broker');
  simulateGPS();
});

client.on('error', (err) => {
  console.error('MQTT connection error:', err);
});
