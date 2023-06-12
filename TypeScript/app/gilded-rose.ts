export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  private AGED_BRIE = 'Aged Brie';
  private AGED_BRIE_DECREMENT_ON_SELL_LIMIT_DAYS = 0;

  private TAFKAL80ETC_BACKSTAGE_PASS = 'Backstage passes to a TAFKAL80ETC concert';
  private TAFKAL80ETC_BACKSTAGE_PASS_X2_INCREMENT_ON_SELL_LIMIT_DAYS = 11;
  private TAFKAL80ETC_BACKSTAGE_PASS_X3_INCREMENT_ON_SELL_LIMIT_DAYS = 6;
  private TAFKAL80ETC_BACKSTAGE_PASS_AFTER_SELL_LIMIT_DAYS = 0;

  private SULFURAS_HAND_OF_RAGNAROS = 'Sulfuras, Hand of Ragnaros';

  private MAX_QUALITY = 50;
  private MIN_QUALITY = 0;
  private MIN_CONJURED_QUALITY = 2;
  private DEFAULT_X2_DECREMENT_ON_SELL_LIMIT_DAYS = 0;

  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      if (item.name === this.AGED_BRIE) {
        this.decrementSellIn(item);
        this.updateAgedBrieQuality(item);
        continue;
      }

      if (item.name === this.TAFKAL80ETC_BACKSTAGE_PASS) {
        this.decrementSellIn(item);
        this.updateBackstagePassQuality(item);
        continue;
      }

      if (item.name === this.SULFURAS_HAND_OF_RAGNAROS) continue;

      this.decrementSellIn(item);
      if (this.isConjured(item)) this.updateDefaultItemQuality(item);
      if (!this.isConjured(item)) this.updateConjuredItemQuality(item);
    }

    return this.items;
  }

  private isConjured(item) {
    return true;
  }

  private decrementSellIn(item: Item) {
    item.sellIn = item.sellIn - 1;
  }

  private updateAgedBrieQuality(item: Item) {
    if (item.quality >= this.MAX_QUALITY) return;
    const { quality } = item;
    item.quality =
      item.sellIn < this.AGED_BRIE_DECREMENT_ON_SELL_LIMIT_DAYS ? quality + 2 : quality + 1;
  }

  private updateBackstagePassQuality(item: Item) {
    if (item.quality >= this.MAX_QUALITY) return;
    let { quality } = item;

    quality++;
    if (item.sellIn < this.TAFKAL80ETC_BACKSTAGE_PASS_X2_INCREMENT_ON_SELL_LIMIT_DAYS) quality++;
    if (item.sellIn < this.TAFKAL80ETC_BACKSTAGE_PASS_X3_INCREMENT_ON_SELL_LIMIT_DAYS) quality++;

    item.quality =
      item.sellIn < this.TAFKAL80ETC_BACKSTAGE_PASS_AFTER_SELL_LIMIT_DAYS ? 0 : quality;
  }
  private updateDefaultItemQuality(item: Item) {
    if (item.quality <= this.MIN_QUALITY) return;

    let { quality } = item;

    quality--;
    if (item.sellIn < this.DEFAULT_X2_DECREMENT_ON_SELL_LIMIT_DAYS && quality > this.MIN_QUALITY)
      quality--;

    item.quality = quality;
  }

  private updateConjuredItemQuality(item: Item) {
    if (item.quality <= this.MIN_CONJURED_QUALITY) return;

    let { quality } = item;

    quality = quality - 2;
    if (
      item.sellIn < this.DEFAULT_X2_DECREMENT_ON_SELL_LIMIT_DAYS &&
      quality > this.MIN_CONJURED_QUALITY
    )
      quality = quality - 2;

    item.quality = quality;
  }
}
