import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useClock from '../customHook/useClock';
import { addStudentsData } from '../Redux/post/action';
import styles from '../Styles/addStud.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    setUserData('');
  };

  if (loading) {
    return (
      <center>
        <img
          style={{ width: '100%', height: '80vh' }}
          src="https://cdn.dribbble.com/users/77121/screenshots/15191750/media/0ce749e630ca31ffd76e105b09340b45.gif"
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
          <option value="I">I</option>
          <option value="II">II</option>
          <option value="III">III</option>
          <option value="IV">IV</option>
          <option value="V">V</option>
          <option value="VI">VI</option>
          <option value="VII">VII</option>
          <option value="VIII">VIII</option>
          <option value="IX">IX</option>
          <option value="X">X</option>
          <option value="XI">XI</option>
          <option value="XII">XII</option>
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
          onInput={(e) => {
            if (e.target.value.length > 2)
              e.target.value = e.target.value.slice(
                0,
                e.target.maxLength
              );
          }}
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
          onChange={handlechange}
          required
          className={styles.landmark}
          type="number"
          placeholder="Landmark"
          onInput={(e) => {
            if (e.target.value.length > 6)
              e.target.value = e.target.value.slice(
                0,
                e.target.maxLength
              );
          }}
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
          type="number"
          placeholder="Pincode"
          onInput={(e) => {
            if (e.target.value.length > 6)
              e.target.value = e.target.value.slice(
                0,
                e.target.maxLength
              );
          }}
        />

        <button className={styles.btn} type="submit">
          Add Student
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddStudentsData;
