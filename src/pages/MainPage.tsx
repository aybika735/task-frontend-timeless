import React, { useEffect, useState } from "react";

import {  fetchTodos } from "../app/slices/todoSlice";
import { ICardProps } from "../components/user-cards/types";
import UserCards from "../components/user-cards/index";
import SideBar from "../components/side-bar/index";
import { useAppDispatch } from "../hooks/use-ape-dispatch";
import { useAppSelector } from "../hooks/use-ape-selector";
import styles from './main-page.module.scss'

interface MainPageProps {
  search: string;
}

const MainPage = ({ search }: MainPageProps) => {
  const dispatch = useAppDispatch();
  const [users, setUsers] = useState<ICardProps[]>([]);
  const todos = useAppSelector((state) => state.todosSlice.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  useEffect(() => {
    setUsers(todos);
  }, [todos]);

  useEffect(() => {
    const filteredUsers = todos.filter((user) => {
      const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
      const birthday = new Intl.DateTimeFormat("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
        .format(new Date(user.dob.date))
        .toLowerCase();

      return (
        fullName.includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase()) ||
        user.phone.includes(search) ||
        birthday.includes(search.toLowerCase()) ||
        `${user.location.city} ${user.location.state} ${user.location.country}`
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    });

    setUsers(filteredUsers);
  }, [search, todos]);

  const onDelete = (id: number) => {
    setUsers(users.filter((user) => user.login.salt !== id));
  };

  return (
    <div
      className={search.length > 0 ? styles.searchMainContainer : styles.mainContainer}
    >
      <UserCards todos={users} onDelete={onDelete} search={search} />
      <SideBar />
    </div>
  );
};

export default MainPage;
