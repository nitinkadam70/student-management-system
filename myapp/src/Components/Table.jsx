import React from 'react';
import styles from '../Styles/table.module.css';
import { AiOutlineEye } from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getStudentsData } from '../Redux/get/action';

const Table = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((store) => store.get);
  useEffect(() => {
    if (data.length == 0) {
      dispatch(getStudentsData());
    }
    console.log(data);
  }, [data.length]);
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
              <tr>
                <td>{elem.First}</td>
                <td>hello</td>
                <td>je</td>
                <td className={styles.crud}>
                  <span>
                    <AiOutlineEye size={'22px'} />
                  </span>
                  <span>
                    <BiEditAlt size={'22px'} />
                  </span>
                  <span>
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
