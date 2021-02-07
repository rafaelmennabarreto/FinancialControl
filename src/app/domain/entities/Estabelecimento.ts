import { BaseEntity } from '../entitiesBase/BaseEntitiy';

type EstabelecimentoParams = {
  id?: number;
  nome: string;
};

export class Estabelecimento extends BaseEntity {
  private _Nome: string;

  constructor(params: EstabelecimentoParams) {
    super(params?.id);
    this._Nome = params.nome;
  }

  public get Nome(): string {
    return this._Nome;
  }
}
