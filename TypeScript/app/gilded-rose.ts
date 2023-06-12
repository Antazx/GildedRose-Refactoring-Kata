import { Item } from './Item';

export class GildedRose {
  updateQuality(itemList: Item[]) {
    itemList.forEach((item) => item.updateQuality());
  }
}
