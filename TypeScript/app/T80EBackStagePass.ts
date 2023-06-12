import { Item } from './Item';

export class T80EBackStagePass extends Item {
  private static NAME = 'Backstage passes to a TAFKAL80ETC concert';
  private static T80E_BACKSTAGE_PASS_X2_INCREMENT = 11;
  private static T80E_BACKSTAGE_PASS_X3_INCREMENT = 6;
  private static T80E_BACKSTAGE_PASS_AFTER_SELL_LIMIT_DAYS = 0;

  constructor(sellIn: number, quality: number) {
    super(T80EBackStagePass.NAME, sellIn, quality);
  }

  updateQuality(): void {
    this.decrementSellIn();
    this.incrementQuality();

    if (this.hasToBeSoldInLesThan(T80EBackStagePass.T80E_BACKSTAGE_PASS_X2_INCREMENT))
      this.incrementQuality();

    if (this.hasToBeSoldInLesThan(T80EBackStagePass.T80E_BACKSTAGE_PASS_X3_INCREMENT))
      this.incrementQuality();

    if (this.hasToBeSoldInLesThan(T80EBackStagePass.T80E_BACKSTAGE_PASS_AFTER_SELL_LIMIT_DAYS))
      this.setQuality(0);
  }
}
