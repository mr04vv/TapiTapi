import * as React from 'react';
import useCommonStyles from 'common/styles';
import useScrollTop from 'hooks/ScrollTop/useScrollTop';
import useLogin from 'hooks/Login/useLogin';
import PromptLogin from 'components/PromptLogin';
import HistoryInterface from 'interfaces/HistoryInterface';
import ProgressCircle from 'components/ProgressCircle';
import useStyles from './styles';
import HistoryItemList from './HistoryItemList';


const History = () => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();
  const user = useLogin();
  useScrollTop();

  return (
    <div className={classes.bodyWrapper}>
      <h1 className={commonClasses.caption}>購入履歴</h1>
      {user.isLoading && (
      <div className={classes.loading}>
        <ProgressCircle size="30px" />
      </div>
      )}
      {!user.userId
        ? <PromptLogin login={user} />
        : user.historyItems && user.historyItems.map((his: HistoryInterface) => (
          <div key={his.createdDate} className={classes.contentWrapper}>
            <div>
              <p className={classes.storeName}>{his.storeName}</p>
              <p className={classes.time}>{his.createdDate}</p>
            </div>
            <h1 className={classes.caption}>注文内容</h1>
            <HistoryItemList his={his} />
            <div className={classes.inline}>
              <p className={classes.sum}>{`合計${his.items.reduce((s: any, x: any) => s + x.count, 0)}点`}</p>
              <p className={classes.sumPrice}>{`${his.items.reduce((p: any, x: any) => p + (x.ammount * x.count), 0)}円`}</p>
            </div>
            <hr className={classes.border} />
          </div>
        ))}
      {user.userId && user.historyItems && user.historyItems.length === 0
      && <p className={classes.non}>購入履歴はありません</p>
      }

    </div>
  );
};

export default History;
