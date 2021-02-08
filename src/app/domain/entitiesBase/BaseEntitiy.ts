export abstract class BaseEntity {
  private _Id: string;
  private _CreatedAt: Date;
  public ModifiedAt: Date;

  constructor(id?: string) {
    this._Id = id ?? '0';
    this._CreatedAt = new Date();
    this.ModifiedAt = new Date();
  }

  public get Id(): string {
    return this._Id;
  }

  public get CreatedAt(): Date {
    return this._CreatedAt;
  }

  public UpdateMofiedAtToDateNow() {
    this._CreatedAt = new Date();
  }
}
