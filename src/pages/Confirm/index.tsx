import * as React from 'react';
import useCommonStyles from 'common/styles';
import { Button } from '@material-ui/core';
import useScrollTop from 'hooks/ScrollTop/useScrollTop';
import useConfirm from 'hooks/Menu/useConfirm';
import useReactRouter from 'use-react-router';
import ProgressCircle from 'components/ProgressCircle';
import useStyles from './styles';
import Item from './Item';
import ConfirmModal from './ConfirmModal';


const Confirm = () => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();
  const confirmItem = useConfirm();
  const { history } = useReactRouter();
  const { match } = useReactRouter();
  const { params }: any = match;
  useScrollTop();

  return (
    <div className={classes.wrapper}>
      <ConfirmModal handleChange={confirmItem.setIsShowModal} onConfirm={confirmItem.confirm} isOpen={confirmItem.isShowModal} isLoading={confirmItem.isOrderLoading} />
      <div className={classes.body}>
        <h1 className={commonClasses.commonCaption}>ご注文内容の確認</h1>
        {confirmItem.items
        && <Item selectedItem={confirmItem.items} />
        }
      </div>
      <hr className={classes.border} />
      {confirmItem.isLoading
        ? <ProgressCircle size="24px" relative />
        : (
          <div className={classes.body}>
            <Button className={classes.orderButton} onClick={() => history.push({ pathname: `/menus/${params.storeId}` })}>＋ ご注文を追加する</Button>
            {confirmItem.items
            && (
            <div className={classes.inline}>
              <p className={classes.sum}>{`合計${confirmItem.items.reduce((s: number, x: { count: number; }) => s + x.count, 0) || 0}点`}</p>
              <p className={classes.sumPrice}>{`${confirmItem.items.reduce((p: number, x: { ammount: number; count: number; }) => p + (x.ammount), 0) || 0}円`}</p>
            </div>
            )}
          </div>
        )
      }
      <hr className={classes.border} />

      <Button
        className={classes.determineButton}
        onClick={() => confirmItem.setIsShowModal(true)}
        disabled={!confirmItem.items || confirmItem.items.length < 1}
        classes={{ disabled: classes.disabledButton }}
      >
        ご注文内容を確認する
      </Button>
    </div>
  );
};

export default Confirm;
