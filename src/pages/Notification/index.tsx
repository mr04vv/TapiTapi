import * as React from 'react';
import NotificationInterface from 'interfaces/NotificationInterface';
import useCommonStyles from 'common/styles';
import useScrollTop from 'hooks/ScrollTop/useScrollTop';
import useStyles from './styles';

const Notification = () => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();
  useScrollTop();

  const notificationList: NotificationInterface[] = [
    {
      id: 1, content: '当店が4周年を迎えました。', imageUrl: 'https://www.fashion-press.net/img/news/47938/XH4.jpg', createdDate: '2019/03/25',
    },
    {
      id: 2, content: '全店舗の検索が可能になりました。', imageUrl: 'https://www.fashion-press.net/img/news/47938/XH4.jpg', createdDate: '2019/07/01',
    },
    {
      id: 3, content: '所沢店がオープンしました', imageUrl: 'https://www.fashion-press.net/img/news/47938/XH4.jpg', createdDate: '2019/07/26',
    },
    {
      id: 4, content: 'アルシェ大宮店がオープンしました。', imageUrl: 'https://www.fashion-press.net/img/news/47938/XH4.jpg', createdDate: '2019/07/26',
    },
    {
      id: 5, content: 'パークシティ武蔵小山店がオープンしました。', imageUrl: 'https://www.fashion-press.net/img/news/47938/XH4.jpg', createdDate: '2019/07/26',
    },
  ];

  return (
    <div className={classes.bodyWrapper}>
      <h1 className={commonClasses.caption}>お知らせ</h1>
      {notificationList.map((notification: NotificationInterface) => (
        <div key={notification.id} className={classes.contentWrapper}>
          <div className={classes.contentBody}>
            <img src={notification.imageUrl} alt="imageUrl" className={classes.image} />
            <div className={classes.rightWrapper}>
              <p className={classes.content}>{notification.content}</p>
              <p className={classes.time}>{notification.createdDate}</p>
            </div>
          </div>
          <hr className={classes.border} />
        </div>
      ))}
    </div>
  );
};

export default Notification;
