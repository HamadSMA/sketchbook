const { app, BrowserWindow } = require('electron');
const path = require('path');

const gridArgFromCLI = process.argv.find(arg => arg.startsWith('--grid='));
const gridNumber = gridArgFromCLI ? parseInt(gridArgFromCLI.split('=')[1], 10) : 2;

if (isNaN(gridNumber) || gridNumber < 1 || gridNumber > 100) {
  console.error("Please provide a valid number between 1 and 100.");
  app.quit(); // this stops Electron from launching
} else {
  function createWindow() {
    const mainWindow = new BrowserWindow({
      width: 800,
      height: 800,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        additionalArguments: [`--grid=${gridNumber}`]
      }
    });

    mainWindow.loadFile('index.html');
  }

  app.whenReady().then(createWindow);
}
