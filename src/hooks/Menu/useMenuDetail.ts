import { useEffect, useState } from 'react';
import useReactRouter from 'use-react-router';
import { parse } from 'query-string';
import MenuInterface, { MenuItemInterface } from 'interfaces/MenuInterface';
import useMenuList from './useMenuList';

type SelectType = 'ゼロ' | '少なめ' | 'ふつう' | '多め'
const Choice: SelectType[] = ['ゼロ', '少なめ', 'ふつう', '多め'];
type ToppingType = 'パール(タピオカ)' | 'ミルクフォーム' | 'アロエ' | 'ナタデココ' | 'バジルシード' | 'グラスジェリー'
const ToppingTypeList: ToppingType[] = ['パール(タピオカ)', 'ミルクフォーム', 'アロエ', 'ナタデココ', 'バジルシード', 'グラスジェリー'];
export type TempType = 'ICED' | 'HOT';
const TempList: TempType[] = ['ICED', 'HOT'];
type SizeType = 'S' | 'M' | 'L';

const useMenuDetail = () => {
  const menuList = useMenuList();
  const { location } = useReactRouter();
  const { categoryId, id, type }: any = parse(location.search);
  const typeName: 'Drinks' | 'Foods' = type;
  const [tempList] = useState<TempType[]>(TempList);
  const [sizeList] = useState<SizeType[]>(['S', 'M', 'L']);
  const [iceList] = useState<SelectType[]>(Choice);
  const [sweetList] = useState<SelectType[]>(Choice);
  const [toppingList] = useState<ToppingType[]>(ToppingTypeList);
  const [item, setItem] = useState<MenuItemInterface>();
  const [selectedTemp, setTemp] = useState<TempType>('ICED');
  const [selectedSize, setSize] = useState<SizeType>('M');
  const [selectedSweetness, setSweet] = useState<SelectType>('ふつう');
  const [selectedIce, setIce] = useState<SelectType>('ふつう');
  const [selectedToppings, setTopping] = useState<ToppingType[]>([]);
  const [sizeSelectable, setSizeSelectable] = useState<boolean>(true);
  const [isOnlyIced, setIsOnlyIced] = useState<boolean>(false);

  useEffect(() => {
    if (typeName === 'Drinks' && menuList.drinkList.length > 0) {
      const drinkList = menuList.drinkList.find((d: MenuInterface) => d.categoryId === Number(categoryId));
      setIsOnlyIced(drinkList!.isOnlyIced || false);
      const drink: MenuItemInterface | undefined = drinkList!.items.find((d: MenuItemInterface) => d.id === Number(id));
      setSizeSelectable(Object.keys(drink!.price).length > 1);
      setItem(drink);
    } else if (typeName === 'Foods' && menuList.foodList.length > 0) {
      const foodList = menuList.foodList.find((d: MenuInterface) => d.categoryId === Number(categoryId))!.items;
      const food = foodList.find((d: MenuItemInterface) => d.id === Number(id));
      setItem(food);
    }
  }, [menuList.drinkList, menuList.foodList, categoryId, id, typeName]);
  return {
    item,
    selectedTemp,
    selectedSize,
    selectedSweetness,
    selectedIce,
    selectedToppings,
    tempList,
    sizeList,
    iceList,
    sweetList,
    toppingList,
    sizeSelectable,
    isOnlyIced,
    setTemp: (v: TempType) => setTemp(v),
    setSize: (v: SizeType) => {
      setSize(v);
      if (v === 'L') {
        setTemp('ICED');
      }
    },
    setSweet: (v: SelectType) => setSweet(v),
    setIce: (v: SelectType) => setIce(v),
    setTopping,
  };
};
export default useMenuDetail;
