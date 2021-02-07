import { Injectable } from '@angular/core';
import { IpcRenderer, IpcRendererEvent } from 'electron';

@Injectable({
  providedIn: 'root',
})
export class IpcServiceService {
  private _ipc: IpcRenderer | undefined;

  constructor() {
    try {
      this._ipc = window.require('electron').ipcRenderer;
    } catch (error) {
      throw error;
    }
  }

  public on(
    channel: string,
    listener: (event: IpcRendererEvent, ...args: any[]) => void
  ) {
    if (this._ipc) {
      this._ipc.on(channel, listener);
    } else {
      console.log('deu ruim');
    }
  }

  public send(channel: string, ...args: any[]): void {
    if (this._ipc) {
      this._ipc.send(channel, ...args);
    } else {
      console.log('deu ruim');
    }
  }
}
