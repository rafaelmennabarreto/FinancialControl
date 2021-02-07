export abstract class BaseEntity {
  private _Id: number;
  private _CreatedAt: Date;
  public ModifiedAt: Date;

  constructor(id?: number) {
    this._Id = id ?? 0;
    this._CreatedAt = new Date();
    this.ModifiedAt = new Date();
  }

  public get Id(): number {
    return this._Id;
  }

  public get CreatedAt(): Date {
    return this._CreatedAt;
  }

  public UpdateMofiedAtToDateNow() {
    this._CreatedAt = new Date();
  }
}
