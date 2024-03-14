import React from "react";
import { useAppDispatch } from "../../hooks/use-ape-dispatch";
import { fetchTodos } from "../../app/slices/todoSlice";
import styles from "./header.module.scss";
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
        onChange={handleSearch}
        placeholder="Search"
      />
      <div onClick={handleRefresh}>Refresh Users</div>
    </header>
  );
};

export default Header;
