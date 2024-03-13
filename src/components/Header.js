import React from 'react';

import {useDispatch } from "react-redux";
import { fetchTodos } from '../app/slices/todoSlice';
import styles from './Header.module.scss'
const Header = ({search, setSearch }) => {

   
    const handleSearch = (e) => {
        setSearch(e.target.value)
       

      }
    const dispatch = useDispatch();
    const handleRefresh = () => {
        dispatch(fetchTodos());
      };


  return (
    <header className={styles.header}>
      <input 
        type="text"
        value={search}
        onChange={(e) => handleSearch(e)}
        placeholder="Search" 
      />
   <div onClick={handleRefresh}>Refresh Users</div>
    </header>
  );
};

export default Header;