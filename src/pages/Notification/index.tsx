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
      id: 1, content: 'Gongcha全店舗の検索が可能になりました。', imageUrl: 'https://www.fashion-press.net/img/news/47938/XH4.jpg', createdDate: '2019/07/01',
    },
    {
      id: 2, content: 'Gongcha全店舗の検索が可能になりました。', imageUrl: 'https://www.fashion-press.net/img/news/47938/XH4.jpg', createdDate: '2019/07/01',
    },
    {
      id: 3, content: 'Gongcha全店舗の検索が可能になりました。', imageUrl: 'https://www.fashion-press.net/img/news/47938/XH4.jpg', createdDate: '2019/07/01',
    },
    {
      id: 4, content: 'Gongcha全店舗の検索が可能になりました。', imageUrl: 'https://www.fashion-press.net/img/news/47938/XH4.jpg', createdDate: '2019/07/01',
    },
    {
      id: 5, content: 'Gongcha全店舗の検索が可能になりました。', imageUrl: 'https://www.fashion-press.net/img/news/47938/XH4.jpg', createdDate: '2019/07/01',
    },
  ];

  return (
    <div className={classes.bodyWrapper}>
      <h1 className={commonClasses.caption}>お知らせ</h1>
      {notificationList.map((notification: NotificationInterface) => (
        <div className={classes.contentWrapper}>
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
