const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  args: process.argv
});