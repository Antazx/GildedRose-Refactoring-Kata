import { Item } from './Item';

export class ConjuredItem extends Item {
  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality);
  }

  public updateQuality(): void {
    this.decrementSellIn();
    this.decrementQuality();
    this.decrementQuality();
  }
}
