import React from 'react';
import Modal from 'react-modal';
import { Button } from '@material-ui/core';
import ProgressCircle from 'components/ProgressCircle';
import useStyles, { customStyles } from './styles';


// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const ConfirmModal = ({
  handleChange, isOpen, onConfirm, isLoading,
}: any) => {
  const classes = useStyles();
  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      contentLabel="Example Modal"
      className={classes.modalTitle}
    >
      ご注文を確定します
      <div className={classes.buttonWrapper}>
        <Button
          className={classes.cancel}
          onClick={() => isLoading && handleChange(false)}
          variant="contained"
          color="inherit"
        >
        キャンセル
        </Button>
        <Button
          className={isLoading ? classes.loading : classes.button}
          onClick={onConfirm}
          variant="contained"
          color="inherit"
          disabled={isLoading}
        >
        確認
          {isLoading && <ProgressCircle size="20px" />}
        </Button>
      </div>
    </Modal>
  );
};
export default ConfirmModal;
