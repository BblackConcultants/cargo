const fs = require('fs');
const https = require('https');
const path = require('path');

// Mapbox public access token (restricted to our domain)
const MAPBOX_TOKEN = 'pk.eyJ1IjoiY2FyZ293b3JsZGxpbmsiLCJhIjoiY2xwdzVnOWR2MDJnMzJqbXh6OWJ1bnpqNyJ9.6oKr7_yL6IX6Otj7dMZpYw';

const regions = [
  {
    name: 'africa',
    center: [20, 0],
    zoom: 2.5,
    style: 'mapbox/light-v11'
  },
  {
    name: 'asia',
    center: [100, 30],
    zoom: 2.5,
    style: 'mapbox/light-v11'
  },
  {
    name: 'australasia',
    center: [135, -25],
    zoom: 3,
    style: 'mapbox/light-v11'
  },
  {
    name: 'europe',
    center: [15, 50],
    zoom: 3,
    style: 'mapbox/light-v11'
  },
  {
    name: 'north-america',
    center: [-100, 45],
    zoom: 2.5,
    style: 'mapbox/light-v11'
  },
  {
    name: 'south-america',
    center: [-60, -20],
    zoom: 2.8,
    style: 'mapbox/light-v11'
  }
];

const width = 600;
const height = 400;

// Ensure the locations directory exists
const locationsDir = path.join(__dirname, '..', 'public', 'images', 'locations');
if (!fs.existsSync(locationsDir)) {
  fs.mkdirSync(locationsDir, { recursive: true });
}

// Generate maps for each region
regions.forEach(region => {
  const url = `https://api.mapbox.com/styles/v1/${region.style}/static/${region.center[0]},${region.center[1]},${region.zoom},0/${width}x${height}@2x?access_token=${MAPBOX_TOKEN}`;
  const filePath = path.join(locationsDir, `${region.name}.jpg`);

  https.get(url, (response) => {
    const fileStream = fs.createWriteStream(filePath);
    response.pipe(fileStream);

    fileStream.on('finish', () => {
      console.log(`Generated map for ${region.name}`);
      fileStream.close();
    });
  }).on('error', (err) => {
    console.error(`Error generating map for ${region.name}:`, err);
  });
});
