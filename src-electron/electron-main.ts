import electron, { BrowserWindow, nativeTheme } from 'electron';
import fs from 'fs';
import os from 'os';
import path from 'path';

// needed in case process is undefined under Linux
const platform = process.platform || os.platform();

try {
  if (platform === 'win32' && nativeTheme.shouldUseDarkColors === true) {
    fs.unlinkSync(path.join(electron.app.getPath('userData'), 'DevTools Extensions'));
  }
} catch (_) {
  // Continue
}

function createWindow() {
  const mainWindow = new BrowserWindow({
    icon: path.resolve(__dirname, 'icons/icon.png'), // tray icon
    width: 1000,
    height: 600,
    center: true,
    useContentSize: true,
    frame: true,
    webPreferences: {
      contextIsolation: true,
      // More info: /quasar-cli/developing-electron-apps/electron-preload-script
      preload: process.env.QUASAR_ELECTRON_PRELOAD === undefined
        ? undefined
        : path.resolve(__dirname, process.env.QUASAR_ELECTRON_PRELOAD),
    },
  });

  // Disable Menu in Window
  mainWindow.setMenu(null);

  const url: string = process.env.APP_URL as string;
  mainWindow.loadURL(url)
    .then(() => {
      console.log(`Load: ${url}`);
    })
    .catch(() => {
      console.log('Error loading');
    });

  if (process.env.DEBUGGING) {
    // if on DEV or Production with debug enabled
    mainWindow.webContents.openDevTools();
  } else {
    // we're on production; no access to devtools pls
    mainWindow.webContents.on('devtools-opened', () => {
      mainWindow.webContents.closeDevTools();
    });
  }
}

function start(app: electron.App) {
  app.on('ready', () => {
    createWindow();

    app.on('window-all-closed', () => {
      if (platform !== 'darwin') {
        app.quit();
      }
    });

    app.on('activate', () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
  });
}

start(electron.app);
