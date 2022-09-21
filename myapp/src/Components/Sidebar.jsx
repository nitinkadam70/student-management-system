import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from '../Styles/sidebar.module.css';
import { MdOutlineGroupAdd } from 'react-icons/md';
import { TbListDetails } from 'react-icons/tb';
import { IoIosLogOut } from 'react-icons/io';

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.Sidebar}>
      <NavLink className={styles.link} to="/addStudents">
        <MdOutlineGroupAdd />
        <span>Add Student</span>
      </NavLink>
      <br />
      <NavLink className={styles.link} to="/mngstudents">
        <TbListDetails />
        <span>Manage Students</span>
      </NavLink>
      <br />
      <NavLink className={styles.link} to="/logout">
        <IoIosLogOut />
        <span>Logout</span>
      </NavLink>
    </div>
  );
};

export default Sidebar;
