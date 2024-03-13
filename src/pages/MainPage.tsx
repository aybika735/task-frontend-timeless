import React, { useEffect, useState } from "react";

import { ICardProps, fetchTodos } from "../app/slices/todoSlice";
import UserCards from "../components/UserCards";
import SideBar from "../components/SideBar";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";

interface MainPageProps {
  search: string;
}

const MainPage: React.FC<MainPageProps> = ({ search }) => {
  const dispatch = useAppDispatch();

  const todos = useAppSelector((state) => state.todosSlice.todos);

  const [users, setUsers] = useState<ICardProps[]>([]);

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
      className={search.length > 0 ? "search_main_container" : "main_container"}
    >
      <UserCards todos={users} onDelete={onDelete} search={search} />
      <SideBar />
    </div>
  );
};

export default MainPage;
