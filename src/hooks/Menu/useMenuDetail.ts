import { useEffect, useState } from 'react';
import useReactRouter from 'use-react-router';
import { parse } from 'query-string';
import MenuInterface, { MenuItemInterface } from 'interfaces/MenuInterface';
import useMenuList from './useMenuList';

export type SelectType = 'ゼロ' | '少なめ' | 'ふつう' | '多め' | '不可'
const Choice: SelectType[] = ['ゼロ', '少なめ', 'ふつう', '多め'];
export type ToppingType = 'パール(タピオカ)' | 'ミルクフォーム' | 'アロエ' | 'ナタデココ' | 'バジルシード' | 'グラスジェリー'
const ToppingTypeList: ToppingType[] = ['パール(タピオカ)', 'ミルクフォーム', 'アロエ', 'ナタデココ', 'バジルシード', 'グラスジェリー'];
export type TempType = 'ICED' | 'HOT';
const TempList: TempType[] = ['ICED', 'HOT'];
type SizeType = 'S' | 'M' | 'L';

const useMenuDetail = () => {
  const menuList = useMenuList();
  const { location, history } = useReactRouter();
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
  const [count, setCount] = useState<number>(1);
  const [ammount, setAmmount] = useState<number>(0);
  const [ammountSingleItem, setAmmountSingleItem] = useState<number>(0);
  const [isCustomizable, setIsCustomizable] = useState<boolean>(true);

  useEffect(() => {
    const toppingAmmount = 70 * selectedToppings.length;
    const sum = (ammountSingleItem + toppingAmmount + Number(selectedIce === 'ゼロ') * 70) * count;
    setAmmount(sum);
  }, [selectedToppings, ammountSingleItem, count, selectedIce]);

  useEffect(() => {
    if (typeName === 'Drinks' && menuList.drinkList.length > 0) {
      const drinkList = menuList.drinkList.find((d: MenuInterface) => d.categoryId === Number(categoryId));
      setIsOnlyIced(drinkList!.isOnlyIced || false);
      const drink: MenuItemInterface | undefined = drinkList!.items.find((d: MenuItemInterface) => d.id === Number(id));
      setSweet(drink!.isCustomizable !== undefined ? '不可' : 'ふつう');
      setIce(drink!.isCustomizable !== undefined ? '不可' : 'ふつう');
      setIsCustomizable(drink!.isCustomizable !== undefined ? drink!.isCustomizable : true);
      setSizeSelectable(Object.keys(drink!.price).length > 1);
      setAmmountSingleItem(drink && drink!.price.M);
      setItem(drink);
    } else if (typeName === 'Foods' && menuList.foodList.length > 0) {
      const foodList = menuList.foodList.find((d: MenuInterface) => d.categoryId === Number(categoryId))!.items;
      const food = foodList.find((d: MenuItemInterface) => d.id === Number(id));
      setAmmountSingleItem(food && food!.price['１個']);
      setItem(food);
    }
  }, [menuList.drinkList, menuList.foodList, categoryId, id, typeName]);

  const pressNext = () => {
    let body;
    if (typeName === 'Drinks') {
      const options = [];
      options.push(selectedTemp);
      options.push(selectedSize);
      if (selectedSweetness !== '不可') {
        options.push(`甘さ${selectedSweetness}`);
      }
      if (selectedIce !== '不可') {
        options.push(`氷${selectedIce}`);
      }
      body = {
        id: '',
        item,
        options,
        selectedToppings,
        typeName,
        count,
        ammount,
      };
    } else {
      body = {
        id: '',
        item,
        typeName,
        count,
        ammount,
      };
    }
    const storageItem = localStorage.getItem(`item${menuList.store!.id}`);
    let itemList = [];
    if (storageItem !== null) {
      body.id = Math.random().toString(32).substring(2);
      itemList = [...JSON.parse(storageItem), body];
    } else {
      body.id = Math.random().toString(32).substring(2);
      itemList = [body];
    }
    localStorage.setItem(`item${menuList.store!.id}`, JSON.stringify(itemList));
    history.push({
      pathname: 'confirm',
    });
  };

  return {
    item,
    selectedTemp,
    selectedSize,
    selectedSweetness,
    selectedIce,
    selectedToppings,
    count,
    tempList,
    sizeList,
    iceList,
    sweetList,
    toppingList,
    sizeSelectable,
    isOnlyIced,
    isCustomizable,
    ammount,
    typeName,
    setCount: (v: React.ChangeEvent<{ name?: string | undefined; value: unknown; }>) => {
      setCount(Number(v.target.value));
    },
    setTemp: (v: TempType) => setTemp(v),
    setSize: (v: SizeType) => {
      setSize(v);
      setAmmountSingleItem(item && item!.price[v]);
      if (v === 'L') {
        setTemp('ICED');
      }
    },
    setSweet: (v: SelectType) => setSweet(v),
    setIce: (v: SelectType) => setIce(v),
    setTopping: (v: ToppingType) => {
      if (selectedToppings.includes(v)) {
        setTopping(selectedToppings.filter(t => t !== v));
      } else if (selectedToppings.length < 3) {
        setTopping([...selectedToppings, v]);
      }
    },
    pressNext,
  };
};
export default useMenuDetail;
