const fs = require('fs');
const path = require('path');

function fixImagePaths(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Add basePath if not present
  if (!content.includes('const basePath = process.env.NEXT_PUBLIC_BASE_PATH || \'\'')) {
    const importSection = content.match(/^((['"]use client['"];?\n)?import[^;]+;(\n|))+/m);
    if (importSection) {
      content = content.replace(
        importSection[0],
        `${importSection[0]}\nconst basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';\n`
      );
    }
  }
  
  // Fix image paths
  content = content.replace(
    /src="(\/images\/[^"]+)"/g,
    'src={`${basePath}$1`}'
  );
  
  // Fix paths without /images prefix
  content = content.replace(
    /src="([^"]+\.(jpg|jpeg|png|gif|svg))"/g,
    (match, p1) => {
      if (p1.startsWith('http') || p1.includes('${basePath}')) return match;
      return `src={\`\${basePath}/images/${p1}\`}`;
    }
  );
  
  fs.writeFileSync(filePath, content);
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      console.log(`Processing ${fullPath}`);
      fixImagePaths(fullPath);
    }
  }
}

processDirectory('app');
