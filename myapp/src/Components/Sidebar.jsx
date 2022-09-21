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
      <div onClick={() => navigate('/')}>
        <MdOutlineGroupAdd />
        <p>Add Student</p>
      </div>
      <div onClick={() => navigate('/mngstudents')}>
        <TbListDetails />
        <p>Manage Students</p>
      </div>
      <div>
        <IoIosLogOut />
        <p>Logout</p>
      </div>
    </div>
  );
};

export default Sidebar;
