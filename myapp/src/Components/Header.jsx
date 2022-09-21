import React from 'react';
import styles from '../Styles/header.module.css';
import { BsPerson } from 'react-icons/bs';

const Header = () => {
  return (
    <div className={styles.Header}>
      <div>
        <img
          src="https://resoluteai.in/static/media/logo.9bb1eca6.png"
          alt="logo"
        />
      </div>
      <div>
        <BsPerson size={'20px'} />
        <p>nitinkadam@resoluteai.in</p>
      </div>
    </div>
  );
};

export default Header;
