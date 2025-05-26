const https = require('https');
const fs = require('fs');
const path = require('path');

const maps = [
  {
    name: 'africa.png',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Africa_%28orthographic_projection%29.svg/600px-Africa_%28orthographic_projection%29.svg.png'
  },
  {
    name: 'asia.png',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Asia_%28orthographic_projection%29.svg/600px-Asia_%28orthographic_projection%29.svg.png'
  },
  {
    name: 'australasia.png',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Oceania_%28orthographic_projection%29.svg/600px-Oceania_%28orthographic_projection%29.svg.png'
  },
  {
    name: 'europe.png',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Europe_orthographic_Caucasus_Urals_boundary_%28with_borders%29.svg/600px-Europe_orthographic_Caucasus_Urals_boundary_%28with_borders%29.svg.png'
  },
  {
    name: 'north-america.png',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Location_North_America.svg/600px-Location_North_America.svg.png'
  },
  {
    name: 'south-america.png',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/South_America_%28orthographic_projection%29.svg/600px-South_America_%28orthographic_projection%29.svg.png'
  }
];

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const targetDir = path.join(__dirname, '..', 'public', 'images', 'locations');
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const filePath = path.join(targetDir, filename);
    const file = fs.createWriteStream(filePath);

    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {});
      console.error(`Error downloading ${filename}:`, err.message);
      reject(err);
    });
  });
};

async function downloadAllMaps() {
  console.log('Starting downloads...');
  try {
    await Promise.all(maps.map(map => downloadImage(map.url, map.name)));
    console.log('All maps downloaded successfully!');
  } catch (error) {
    console.error('Error downloading maps:', error);
  }
}

downloadAllMaps();
