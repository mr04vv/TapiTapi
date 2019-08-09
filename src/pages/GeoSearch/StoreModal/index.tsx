/* eslint-disable react/no-danger */
import React, { Fragment } from 'react';
import Modal from 'react-modal';
import { Button } from '@material-ui/core';
import StoreInterface from 'interfaces/StoreInterface';
import useStyles, { customStyles } from './styles';
import './style.css';


// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

interface PropsInterface {
  handleChange: any;
  isOpen: StoreInterface | false ;
  moveMenuPage: () => void;
  showDirection: () => void;
}

const StoreModal = ({
  handleChange, isOpen, moveMenuPage, showDirection,
}: PropsInterface) => {
  const classes = useStyles();
  return (
    <Modal
      isOpen={!!isOpen}
      closeTimeoutMS={600}
      style={customStyles}
      contentLabel="Example Modal"
      className={classes.modalTitle}
      onRequestClose={() => handleChange(false)}
    >
      {!!isOpen
      && (
      <Fragment>
        <p className={classes.storeName}>{isOpen.storeName}</p>
        <p className={classes.storeInfo}>{isOpen.address}</p>
        <p className={classes.storeInfo}>{`TEL：${isOpen.tellNumber}`}</p>
        <p className={classes.storeInfo} dangerouslySetInnerHTML={{ __html: isOpen.time }} />
      </Fragment>
      )
      }

      <div className={classes.buttonWrapper}>
        <Button
          className={classes.button}
          variant="contained"
          color="inherit"
          onClick={moveMenuPage}
        >
        メニュー画面へ
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          color="inherit"
          onClick={showDirection}
        >
        経路を表示
        </Button>
      </div>
    </Modal>
  );
};
export default StoreModal;
