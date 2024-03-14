import React from "react";
import styles from "./user-cards.module.scss";
import { ICardProps } from "./types";
import UserCard from "./user-card/index";


interface UserCardsProps {
  todos: ICardProps[];
  onDelete: (id: number) => void;
  search: string;
}

const UserCards = ({ todos, onDelete, search }: UserCardsProps) => {
 

  return (
    <div className={search.length > 0 ? styles.searchScroll : styles.scroll}>
      <section
        className={search.length > 0 ? styles.searchSection : styles.section}
      >
        {todos.map((todo) => (
        <UserCard todo = {todo} onDelete={onDelete}/>
        ))}
      </section>
    </div>
  );
};

export default UserCards;
