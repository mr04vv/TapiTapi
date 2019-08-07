interface CategoryInterface {
  id: number;
  jaName: string;
  enName: string;
  isHotable?: boolean;
  storeIds?: number[];
}

export default CategoryInterface;
