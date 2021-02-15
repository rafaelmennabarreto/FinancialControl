import { Injectable } from '@angular/core';
import { notify } from 'metro4';

@Injectable({
  providedIn: 'root',
})
export class NotifyService {
  constructor() {}

  sucess(message: string) {
    notify.create(message, 'Salvo', {
      cls: 'success',
    });
  }
}
