import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import styles from '../Styles/addStud.module.css';

const Date = (props) => {
  const { title } = props;

  const [clock, setClock] = useState();

  return <div className={styles.hedder}></div>;
};

export default Date;
