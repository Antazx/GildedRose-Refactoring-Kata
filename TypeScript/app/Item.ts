export abstract class Item {
  private static MAX_QUALITY = 50;
  private static MIN_QUALITY = 0;

  private name: string;
  private sellIn: number;
  private quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  public abstract updateQuality(): void;

  protected decrementSellIn() {
    this.sellIn = this.sellIn--;
  }

  protected incrementQuality() {
    if (this.quality < Item.MAX_QUALITY) this.quality = this.quality++;
  }

  protected decrementQuality() {
    if (this.quality > Item.MIN_QUALITY) this.quality = this.quality--;
  }

  protected setQuality(newQuality: number) {
    this.quality = newQuality;
  }

  protected hasToBeSoldInLesThan(days: number): boolean {
    return this.sellIn < days;
  }
}
