interface MenuInterface {
    categoryId: number;
    items: MenuItemInterface[];
  }

export interface MenuItemInterface {
  id: number;
  jaName: string;
  enName: string;
  price: any;
  imageUrl: string;
  isCustomizable?: boolean;
}

export default MenuInterface;
