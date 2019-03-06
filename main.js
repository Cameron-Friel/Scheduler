const {app, BrowserWindow} = require('electron');
const DataStore = require('./DataStore.js');

const dataStore = new DataStore ({
  configName: 'user-preferences',
  defaults: {
    windowBounds: { width: 800, height: 600 }
  }
});

let win = null;

createWindow = () => {
  let { width, height } = dataStore.getData('windowBounds');

  // Initialize the window to our specified dimensions
  win = new BrowserWindow({ width, height, minWidth: 800, minHeight: 500 });

  // Specify entry point
  win.loadURL('http://localhost:3000');

  // Show dev tools
  // Remove this line before distributing
  win.webContents.openDevTools();

  // Update local storage on user's preferred window size
  win.on('resize', () => {
    let { width, height } = win.getBounds();

    dataStore.setData('windowBounds', { width, height });
  });

  // Remove window once app is closed
  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', () => {
  createWindow();
});

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
});

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
});
