import { useEffect, useState } from 'react';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { useSelector, useDispatch } from 'react-redux';
import StoreInterface from 'interfaces/StoreInterface';
import useGetStore from 'hooks/Store/useGetStore';
import {
  getDrinkListSuccess, getFoodListSuccess, getDrinkCategoryListSuccess, getFoodCategoryListSuccess,
} from 'reduxes/modules/menus/menuList';
import CategoryInterface from 'interfaces/CategoryInterface';
import MenuInterface from 'interfaces/MenuInterface';

const useMenuList = () => {
  const menuSelector = (state: any) => state.menuList;
  const menuState = useSelector(menuSelector);
  const dispatch = useDispatch();
  const store: StoreInterface | undefined = useGetStore();
  const [drinkList, setDrinkList] = useState<MenuInterface[]>([]);
  const [drinkCategoryList, setDrinkCategoryList] = useState<CategoryInterface[]>([]);
  const [foodList, setFoodList] = useState<MenuInterface[]>([]);
  const [foodCategoryList, setFoodCategoryList] = useState<CategoryInterface[]>([]);

  useEffect(() => {
    (async () => {
      if (menuState.drinks.length < 1) {
        const db = firebase.firestore();
        const storeRef = await db.collection('drinkList').get();
        const drinks = storeRef.docs.map(d => d.data());
        dispatch(getDrinkListSuccess(drinks));
      }
    })();

    if (menuState.drinks.length > 0) {
      setDrinkList(menuState.drinks);
    }
  }, [menuState.drinks.length, dispatch]);

  useEffect(() => {
    (async () => {
      if (menuState.foods.length < 1) {
        const db = firebase.firestore();
        const storeRef = await db.collection('foodList').get();
        const foods = storeRef.docs.map(f => f.data());
        dispatch(getFoodListSuccess(foods));
      }
    })();

    if (menuState.foods.length > 0) {
      setFoodList(menuState.foods);
    }
  }, [menuState.foods.length, dispatch]);

  useEffect(() => {
    (async () => {
      if (menuState.drinkCategories.length < 1) {
        const db = firebase.firestore();
        const storeRef = await db.collection('drinkCategories').get();
        const drinkCategories = storeRef.docs.map(dc => dc.data());
        dispatch(getDrinkCategoryListSuccess(drinkCategories));
      }
    })();

    if (menuState.drinkCategories.length > 0) {
      setDrinkCategoryList(menuState.drinkCategories);
    }
  }, [menuState.drinkCategories.length, dispatch]);


  useEffect(() => {
    (async () => {
      if (menuState.foodCategories.length < 1) {
        const db = firebase.firestore();
        const storeRef = await db.collection('foodCategories').get();
        const foodCategories = storeRef.docs.map(fc => fc.data());
        dispatch(getFoodCategoryListSuccess(foodCategories));
      }
    })();

    if (menuState.foodCategories.length > 0) {
      setFoodCategoryList(menuState.foodCategories);
    }
  }, [menuState.foodCategories.length, dispatch]);

  return {
    drinkList,
    foodList,
    drinkCategoryList,
    foodCategoryList,
    store,
  };
};
export default useMenuList;
