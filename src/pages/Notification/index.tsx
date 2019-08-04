import * as React from 'react';
import useStyles from './styles';

const Notification = () => {
  const classes = useStyles();

  const foodMenuList: MenuInterface[] = [
    {
      id: 1, content: 'Cake', imageUrl: 'https://www.fashion-press.net/img/news/45290/LJc.jpg', createdDate: '2019/07/01'
    },
    {
      id: 2, enName: 'Egg Tart', jaName: 'エッグタルト', price: '¥250円〜', imageUrl: 'https://www.fashion-press.net/img/news/45290/LJc.jpg',
    },
    {
      id: 3, enName: 'Pudding', jaName: 'プリン', price: '¥250円〜', imageUrl: 'https://www.fashion-press.net/img/news/45290/LJc.jpg',
    },
  ];

  return (
    <div className={classes.bodyWrapper}>
      <h1 className={classes.caption}>お知らせ</h1>
        <div className={classes.contentWrapper}>
          <img src="https://www.fashion-press.net/img/news/47938/XH4.jpg" alt="imageUrl" className={classes.image}/>
            <div className={classes.rightWrapper}>
              <p className={classes.content}>Gongcha全店舗の検索が可能になりました。</p>
              <p className={classes.time}>2時間前</p>
            </div>
        </div>
    </div>
  );
};

export default Notification;
