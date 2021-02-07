import { BaseEntity } from '../entitiesBase/BaseEntitiy';
import { Estabelecimento } from './Estabelecimento';

type DespesaParam = {
  id: number;
  valor: number;
  dataVencimento: Date;
  estabelecimento: Estabelecimento;
};

class Despesa extends BaseEntity {
  private _valor: number;
  private _dataVencimento: Date;
  private _estabelecimento: Estabelecimento;

  private constructor(params: DespesaParam) {
    super(params?.id);
    this._valor = params?.valor;
    this._dataVencimento = params.dataVencimento;
    this._estabelecimento = params.estabelecimento;
  }

  static create(item: DespesaParam) {
    return new Despesa(item);
  }
}

export default Despesa;
