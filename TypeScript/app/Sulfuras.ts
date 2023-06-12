import { Item } from './Item';

export class Sulfuras extends Item {
  private static NAME = 'Sulfuras, Hand of Ragnaros';
  private static SELL_IN = Infinity;
  private static QUALITY = 80;

  constructor() {
    super(Sulfuras.NAME, Sulfuras.SELL_IN, Sulfuras.QUALITY);
  }

  updateQuality(): void {}
}
