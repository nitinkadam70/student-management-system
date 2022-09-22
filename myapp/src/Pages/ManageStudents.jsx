import React from 'react';
import Table from '../Components/Table';
import useClock from '../customHook/useClock';
import styles from '../Styles/manageStu.module.css';

const ManageStudents = () => {
  const { hours, minutes } = useClock();
  return (
    <div>
      <div className={styles.hedder}>
        <h4>Manage Student</h4>
        <h4>
          {new Date().toLocaleDateString() +
            ' ' +
            hours +
            ':' +
            minutes}
        </h4>
      </div>
      <div className={styles.students}>
        <Table />
      </div>
    </div>
  );
};

export default ManageStudents;
