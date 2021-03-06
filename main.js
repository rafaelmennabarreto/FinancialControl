// TODO importar e criar servidor do express
require("./server");
const { app, BrowserWindow, ipcMain } = require("electron");
const url = require("url");
const path = require("path");
const isPRd = false;

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  let appUrl = "http://localhost:4200/";

  if (isPRd)
    appUrl = url.format({
      pathname: path.join(__dirname, `/dist/index.html`),
      protocol: "file:",
      slashes: true,
    });

  mainWindow.loadURL(appUrl);

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  mainWindow.on("closed", function () {
    mainWindow = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", function () {
  if (mainWindow === null) createWindow();
});

ipcMain.on("CadastrarFavorecido", (event, ...args) => {
  console.log(...args);
});
