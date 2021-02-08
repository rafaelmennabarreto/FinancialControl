import { BaseEntity } from '../entitiesBase/BaseEntitiy';

type FavorecidoParams = {
  id?: string;
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

  public toJson(): any {
    const Nome = this._nome;
    const Id = this.Id;
    const CreatedAt = this.CreatedAt;
    const ModifiedAt = this.ModifiedAt;

    return {
      Id,
      Nome,
      CreatedAt,
      ModifiedAt,
    };
  }
}
