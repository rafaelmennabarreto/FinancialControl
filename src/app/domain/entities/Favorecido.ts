import { BaseEntity } from '../entitiesBase/BaseEntitiy';

type FavorecidoParams = {
  id?: number;
  nome: string;
};

export class Favorecido extends BaseEntity {
  private _nome: string;

  constructor(params: FavorecidoParams) {
    super(params?.id);
    this._nome = params.nome;
  }

  public get Nome() {
    return this._nome;
  }
}
