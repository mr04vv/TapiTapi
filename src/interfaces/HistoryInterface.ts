interface HistoryInterface {
  storeName: string;
  createdDate: any;
  items: HistoryItemInterface[];
}

export interface HistoryItemInterface {
  id: string;
  ammount: number;
  count: number;
  options: string[];
  item: ItemInterface;
  selectedToppings: string[];
}

export interface ItemInterface {
  enName: string;
  jaName: string;
}

export default HistoryInterface;
