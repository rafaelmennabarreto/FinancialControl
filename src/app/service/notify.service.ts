import { Injectable } from '@angular/core';
import { notify } from 'metro4';

@Injectable({
  providedIn: 'root',
})
export class NotifyService {
  constructor() {}

  Sucess(message: string) {
    notify.create(message, 'Salvo', {
      cls: 'success',
    });
  }

  Error(message: string) {
    notify.create(message, 'Erro', {
      cls: 'alert',
    });
  }
}
