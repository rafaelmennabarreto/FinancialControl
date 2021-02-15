import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Favorecido } from 'src/app/domain/entities/Favorecido';
import { IpcServiceService } from 'src/app/service/electron/ipc-service.service';
import { NotifyService } from 'src/app/service/notify.service';

@Component({
  selector: 'app-cadastrar-favorecido',
  templateUrl: './cadastrar-favorecido.component.html',
  styleUrls: ['./cadastrar-favorecido.component.scss'],
})
export class CadastrarFavorecidoComponent implements OnInit {
  constructor(
    private readonly _ipcService: IpcServiceService,
    private readonly _notifyService: NotifyService
  ) {}

  ngOnInit(): void {}

  cadastrar(form: NgForm) {
    const favorecido = new Favorecido({ nome: form.value.nome });

    console.log('clicou');
    //listem main process response message
    this._ipcService.once('SavedFavorecido', (event, resp) => {
      var favorecido: Favorecido = resp.data;
      console.log(event.returnValue);
      this._notifyService.sucess(resp.message);
      console.log('oi meu chapa');
    });

    //send message to main process;
    this._ipcService.send('SaveFavorecido', {
      content: favorecido.toJson(),
    });
  }
}
