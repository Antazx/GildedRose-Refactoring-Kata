import { Item } from './Item';

export class AgedBrie extends Item {
  private static NAME = 'Aged Brie';
  private static AGED_BRIE_DECREMENT_ON_SELL_LIMIT_DAYS = 0;

  constructor(sellIn: number, quality: number) {
    super(AgedBrie.NAME, sellIn, quality);
  }

  updateQuality() {
    this.decrementSellIn();
    this.incrementQuality();
    if (this.hasToBeSoldInLesThan(AgedBrie.AGED_BRIE_DECREMENT_ON_SELL_LIMIT_DAYS))
      this.incrementQuality();
  }
}
