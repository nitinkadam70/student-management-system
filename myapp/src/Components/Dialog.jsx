import React from 'react';
import styles from '../Styles/dialog.module.css';
const Dialog = (props) => {
  const { showDialog, setShowDialog, id, handleDelete } = props;

  return (
    <div className={styles.container}>
      <div>
        <h2>Are you sure you want to delete this item</h2>
        <br />
        <div>
          <button onClick={() => setShowDialog(!showDialog)}>
            Cancle
          </button>
          <button onClick={() => handleDelete(id)}>Yes</button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
