import React from 'react';
import useClock from '../customHook/useClock';
import styles from '../Styles/addStud.module.css';

const AddStudentsData = () => {
  const { hours, minutes } = useClock();
  return (
    <div className={styles.container}>
      <div className={styles.hedder}>
        <h4>Add Student</h4>
        <h4>
          {new Date().toLocaleDateString() +
            ' ' +
            hours +
            ':' +
            minutes}
        </h4>
      </div>
      <div className={styles.form}>
        <input
          className={styles.First_Name}
          type="text"
          placeholder="  First Name"
        />
        <input
          className={styles.Middle_Name}
          type="text"
          placeholder="  Middle Name"
        />
        <input
          className={styles.Last_Name}
          type="text"
          placeholder="  Last Name"
        />
        <select className={styles.Class}>
          <option>Select Class</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
        <select className={styles.Division}>
          <option>Select Division</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
        </select>
        <input
          className={styles.Roll_Number}
          type="number"
          placeholder="  Enter Roll Number in Digits"
        />

        <input
          className={styles.address1}
          type="text"
          placeholder="  Address Line 1"
        />
        <input
          className={styles.address2}
          type="text"
          placeholder="  Address Line 2"
        />
        <input
          className={styles.landmark}
          type="text"
          placeholder="  Landmark"
        />
        <input
          className={styles.city}
          type="text"
          placeholder="  city"
        />
        <input
          className={styles.pincode}
          type="text"
          placeholder="  Pincode"
        />
        <button className={styles.btn} type="submit">
          Add Student
        </button>
      </div>
    </div>
  );
};

export default AddStudentsData;
