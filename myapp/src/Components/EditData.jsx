import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useClock from '../customHook/useClock';
import { addStudentsData } from '../Redux/post/action';
import styles from '../Styles/addStud.module.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const EditData = () => {
  const { id } = useParams();
  const { hours, minutes } = useClock();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  const url = process.env.REACT_APP_API;
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const handlechange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    if (id) {
      setLoading(true);
      axios.get(`${url}/${id}`).then((res) => {
        setLoading(false);
        setData(res.data);
      });
    }
  }, [id]);

  const handleEdit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios(`${url}/${id}`, {
      method: 'PATCH',
      data: JSON.stringify(userData),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        setLoading(false);
        navigate('/mngStudents');
        alert('Data successfully Upadeted');
      })
      .catch((error) => {
        setLoading(false);
        alert('Something went wrong');
      });
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
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.hedder}>
          <h4>Edit Student Data</h4>
          <h4>
            {new Date().toLocaleDateString() +
              ' ' +
              hours +
              ':' +
              minutes}
          </h4>
        </div>
        <form onSubmit={handleEdit} className={styles.form}>
          <input
            defaultValue={data.First_Name}
            name="First_Name"
            onChange={handlechange}
            required
            className={styles.First_Name}
            type="text"
            placeholder="First Name"
          />
          <input
            defaultValue={data.Middle_Name}
            name="Middle_Name"
            onChange={handlechange}
            required
            className={styles.Middle_Name}
            type="text"
            placeholder="Middle Name"
          />
          <input
            defaultValue={data.Last_Name}
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
            defaultValue={data.Class}
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
            defaultValue={data.Division}
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
            defaultValue={data.Roll_Number}
            name="Roll_Number"
            onChange={handlechange}
            required
            className={styles.Roll_Number}
            type="number"
            placeholder="Enter Roll Number in Digits"
          />

          <input
            defaultValue={data.Address_Line_1}
            name="Address_Line_1"
            onChange={handlechange}
            required
            className={styles.address1}
            type="text"
            placeholder="Address Line 1"
          />
          <input
            defaultValue={data.Address_Line_2}
            name="Address_Line_2"
            onChange={handlechange}
            required
            className={styles.address2}
            type="text"
            placeholder="Address Line 2"
          />
          <input
            defaultValue={data.Landmark}
            name="Landmark"
            maxLength={6}
            onChange={handlechange}
            required
            className={styles.landmark}
            type="number"
            placeholder="Landmark"
          />
          <input
            defaultValue={data.City}
            name="City"
            onChange={handlechange}
            required
            className={styles.city}
            type="text"
            placeholder="city"
          />
          <input
            defaultValue={data.Pincode}
            name="Pincode"
            onChange={handlechange}
            required
            className={styles.pincode}
            type="number"
            placeholder="Pincode"
            minLength={6}
            maxLength={6}
          />

          <button className={styles.btn} type="submit">
            Upadate Student
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default EditData;
