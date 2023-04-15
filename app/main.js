const { app, BrowserWindow } = require('electron');

let mainWindow = null;

app.on('ready', () => {
	// Create browser windows
	mainWindow = new BrowserWindow({
		show: false,
		webPreferences: {
			nodeIntegration: true,
		},
	});
	// Load index.html
	mainWindow.loadFile(__dirname + '/index.html');
	mainWindow.once('ready-to-show', () => {
		mainWindow.show();
		// Open developer tools
		// mainWindow.webContents.openDevTools();
	});
	// Close browser
	mainWindow.on('closed', () => {
		mainWindow = null;
	});
});
