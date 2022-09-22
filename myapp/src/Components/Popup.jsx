import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from '../Styles/popup.module.css';

const Popup = (props) => {
  const { show, setShow, id } = props;
  const url = process.env.REACT_APP_API;
  const [data, setData] = useState({});

  useEffect(() => {
    if (id) {
      axios.get(`${url}/${id}`).then((res) => setData(res.data));
    }
  }, [id]);

  return (
    <>
      <div className={styles.popup}>
        <div>
          <button onClick={() => setShow(!show)}>𐤕</button>
          <div key={data.id}>
            <h2>Student Information</h2>
            <br />
            <ul>
              <li>
                Full Name : {data.First_Name} {data.Middle_Name}{' '}
                {data.Last_Name}
              </li>
              <li>Class : {data.Class}</li>
              <li>Division : {data.Division}</li>
              <li>Roll Number : {data.Roll_Number}</li>

              <li>
                Address : {data.Address_Line_1},{data.Address_Line_2}
              </li>
              <li>LandMark : {data.Landmark}</li>
              <li>City : {data.City}</li>
              <li>Pincode : {data.Pincode}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
