import { ToppingType } from 'hooks/Menu/useMenuDetail';
import StoreInterface from './StoreInterface';
import { MenuItemInterface } from './MenuInterface';

interface OrderedMenuInterface {
  isFinish: boolean;
  isRead: boolean;
  storeId: number;
  id: number;
  storeInfo: StoreInterface;
  items: OrderedItemInterface[];
}

export interface OrderedItemInterface {
  ammount: number;
  count: number;
  typeName: string;
  selectedToppings: ToppingType[];
  options: string[];
  item: MenuItemInterface;
  id?: string;
}

export default OrderedMenuInterface;
