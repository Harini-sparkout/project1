export class Base{
  protected message: string ="hello from base ";
  protected items: string[] =['item1','item2','item3'];
  protected getItemsCount() : number{
    return this.items.length;

  }
  public getMessage(): string{
    return this.message;
  }
  public getItemCount() : number{
    return this.getItemsCount();
  }
}
