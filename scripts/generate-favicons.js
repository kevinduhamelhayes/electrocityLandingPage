const { favicons } = require('favicons');
const fs = require('fs');
const path = require('path');

// Rutas de origen y destino
const source = path.resolve(__dirname, '../public/icons/logo.svg');
const destPath = path.resolve(__dirname, '../public/icons');

// Configuración para los favicons
const configuration = {
  path: '/icons',
  appName: 'Electricista Rosario',
  appShortName: 'ElectricistaRos',
  appDescription: 'Servicios profesionales de electricidad en Rosario',
  background: '#ffffff',
  theme_color: '#F97316',
  version: '1.0',
  icons: {
    android: true,
    appleIcon: true,
    appleStartup: false,
    favicons: true,
    windows: false,
    yandex: false,
  },
};

// Crear la carpeta si no existe
if (!fs.existsSync(destPath)) {
  fs.mkdirSync(destPath, { recursive: true });
}

// Generar los iconos
favicons(source, configuration)
  .then((response) => {
    // Guardar las imágenes generadas
    response.images.forEach((image) => {
      fs.writeFileSync(
        path.join(destPath, image.name),
        image.contents
      );
    });
    
    // Guardar el favicon principal en la raíz
    const faviconIndex = response.images.findIndex(img => img.name === 'favicon.ico');
    if (faviconIndex !== -1) {
      fs.writeFileSync(
        path.resolve(__dirname, '../public/favicon.ico'),
        response.images[faviconIndex].contents
      );
    }
    
    console.log('✅ Favicons generados con éxito');
  })
  .catch((error) => {
    console.error('❌ Error al generar los favicons:', error);
  }); 