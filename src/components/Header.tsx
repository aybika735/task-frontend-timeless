import React from "react";
import { useAppDispatch } from "../hooks/hooks";
import { fetchTodos } from "../app/slices/todoSlice";
import styles from "./Header.module.scss";
interface HeaderProps {
  search: string;
  setSearch: (value: string) => void;
}
const Header = ({ search, setSearch }: HeaderProps) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const dispatch = useAppDispatch();
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
