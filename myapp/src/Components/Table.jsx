import React, { useState } from 'react';
import styles from '../Styles/table.module.css';
import { AiOutlineEye } from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getStudentsData } from '../Redux/get/action';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Popup from './Popup';

const Table = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((store) => store.get);
  const [id, setId] = useState('');
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const url = process.env.REACT_APP_API;
  useEffect(() => {
    if (data.length == 0) {
      dispatch(getStudentsData());
    }
    console.log(data);
  }, [data.length]);

  const handleView = (id) => {
    setShow(!show);
    setId(id);
  };

  const handleDelete = (id) => {
    axios
      .delete(`${url}/${id}`)
      .then((res) => dispatch(getStudentsData()))
      .catch((error) => alert('Something went wrong while Deleting'));
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
  } else if (show) {
    return <Popup setShow={setShow} show={show} id={id} />;
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Class</th>
            <th>Roll No.</th>
            <th>View/Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((elem) => (
              <tr key={elem.id}>
                <td>
                  {elem.First_Name} {elem.Last_Name}{' '}
                </td>
                <td>{elem.Class}</td>
                <td>{elem.Roll_Number}</td>
                <td className={styles.crud}>
                  <span>
                    <AiOutlineEye
                      onClick={() => handleView(elem.id)}
                      size={'22px'}
                    />
                  </span>
                  <span>
                    <BiEditAlt size={'22px'} />
                  </span>
                  <span onClick={() => handleDelete(elem.id)}>
                    <RiDeleteBin6Line size={'22px'} />
                  </span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
