import { BaseEntity } from '../entitiesBase/BaseEntitiy';

type FavorecidoParams = {
  id?: string;
  nome: string;
};

export class Favorecido extends BaseEntity {
  private _nome: string;
  private _ativo: boolean;

  constructor(params: FavorecidoParams) {
    super(params?.id);
    this._nome = params.nome;
    this._ativo = true;
  }

  public get Nome() {
    return this._nome;
  }

  public get Ativo() {
    return this._ativo;
  }

  public Inativar(): void {
    this._ativo = false;
  }

  public IsValid(): boolean {
    return !!this._nome;
  }

  public ToJson(): any {
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
