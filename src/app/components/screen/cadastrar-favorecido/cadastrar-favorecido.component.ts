import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Favorecido } from 'src/app/domain/entities/Favorecido';
import { IpcServiceService } from 'src/app/service/electron/ipc-service.service';

@Component({
  selector: 'app-cadastrar-favorecido',
  templateUrl: './cadastrar-favorecido.component.html',
  styleUrls: ['./cadastrar-favorecido.component.scss'],
})
export class CadastrarFavorecidoComponent implements OnInit {
  constructor(private readonly _ipcService: IpcServiceService) {}

  ngOnInit(): void {}

  cadastrar(form: NgForm) {
    const favorecido = new Favorecido({ nome: form.value.nome });

    //listem main process response message
    this._ipcService.on('FavorecidoCadastrado', (event) => {
      console.log('foi');
    });

    //send message to main process;
    this._ipcService.send('CadastrarFavorecido', {
      content: favorecido.toJson(),
    });
  }
}
