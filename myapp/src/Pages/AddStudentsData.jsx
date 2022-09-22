import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useClock from '../customHook/useClock';
import { addStudentsData } from '../Redux/post/action';
import styles from '../Styles/addStud.module.css';

const AddStudentsData = () => {
  const { hours, minutes } = useClock();
  const dispatch = useDispatch();
  const { loading, msg, error } = useSelector((store) => store.post);

  const [userData, setUserData] = useState({});
  const handlechange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = JSON.stringify(userData);
    dispatch(addStudentsData(payload));
  };

  if (loading) {
    return (
      <center>
        <img
          style={{ widht: '100px' }}
          src="https://media.giphy.com/media/17mNCcKU1mJlrbXodo/giphy.gif"
          alt="loder"
        />
      </center>
    );
  } else if (error) {
    return alert('Something went Wrong');
  }
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
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          name="First_Name"
          onChange={handlechange}
          required
          className={styles.First_Name}
          type="text"
          placeholder="First Name"
        />
        <input
          name="Middle_Name"
          onChange={handlechange}
          required
          className={styles.Middle_Name}
          type="text"
          placeholder="Middle Name"
        />
        <input
          name="Last_Name"
          onChange={handlechange}
          required
          className={styles.Last_Name}
          type="text"
          placeholder="Last Name"
        />
        <select
          name="Class"
          onChange={handlechange}
          required
          className={styles.Class}
        >
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
        <select
          name="Division"
          onChange={handlechange}
          required
          className={styles.Division}
        >
          <option>Select Division</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
        </select>
        <input
          name="Roll_Number"
          onChange={handlechange}
          required
          className={styles.Roll_Number}
          type="number"
          placeholder="Enter Roll Number in Digits"
        />

        <input
          name="Address_Line_1"
          onChange={handlechange}
          required
          className={styles.address1}
          type="text"
          placeholder="Address Line 1"
        />
        <input
          name="Address_Line_2"
          onChange={handlechange}
          required
          className={styles.address2}
          type="text"
          placeholder="Address Line 2"
        />
        <input
          name="Landmark"
          maxLength={6}
          onChange={handlechange}
          required
          className={styles.landmark}
          type="text"
          placeholder="Landmark"
        />
        <input
          name="City"
          onChange={handlechange}
          required
          className={styles.city}
          type="text"
          placeholder="city"
        />
        <input
          name="Pincode"
          onChange={handlechange}
          required
          className={styles.pincode}
          type="text"
          placeholder="Pincode"
        />

        <button className={styles.btn} type="submit">
          Add Student
        </button>
      </form>
    </div>
  );
};

export default AddStudentsData;
