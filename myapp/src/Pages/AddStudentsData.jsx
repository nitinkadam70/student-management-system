import React from 'react';
import Date from '../Components/Date';
import styles from '../Styles/addStud.module.css';

const AddStudentsData = () => {
  return (
    <div>
      <div>
        <Date title={'Add Student'} />
      </div>
      <div>
        <input type="text" />
      </div>
    </div>
  );
};

export default AddStudentsData;
