import { Item } from './Item';

export class DefaultItem extends Item {
  private static DEFAULT_X2_DECREMENT_ON_SELL_LIMIT_DAYS = 0;

  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality);
  }

  updateQuality(): void {
    this.decrementSellIn();
    this.decrementQuality();

    if (this.hasToBeSoldInLesThan(DefaultItem.DEFAULT_X2_DECREMENT_ON_SELL_LIMIT_DAYS))
      this.decrementQuality();
  }
}
