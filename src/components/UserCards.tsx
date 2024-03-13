import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "./UserCards.module.scss";
import { ICardProps } from "../app/slices/todoSlice";

interface UserCardsProps {
  todos: ICardProps[];
  onDelete: (id: number) => void;
  search: string;
}

const UserCards: React.FC<UserCardsProps> = ({ todos, onDelete, search }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  };
  const handleClick = (id: number) => {
    if (selectedId === id) {
      setSelectedId(null);
    } else {
      setSelectedId(id);
    }
  };

  return (
    <div className={search.length > 0 ? styles.search_scroll : styles.scroll}>
      <section
        className={search.length > 0 ? styles.search_section : styles.section}
      >
        {todos.map((todo) => (
          <div
            key={todo.login.salt}
            className={`${styles.card} ${
              selectedId === todo.login.salt ? styles.card_active : ""
            }`}
            onClick={() => handleClick(todo.login.salt)}
          >
            <div className={styles.user_card_header}>
              <div className={styles.user_image}>
                <img
                  src={todo.picture.medium}
                  alt="img"
                  className={styles.user_photo}
                />
              </div>
              <div>
                <div className={styles.user_name}>
                  <div
                    className={styles.user_name_first}
                    style={{
                      color:
                        selectedId === todo.login.salt ? "#cf7b5a" : "#dcd8d3",
                    }}
                  >
                    {todo.name.first}
                  </div>

                  <div
                    className={styles.user_name_last}
                    style={{
                      color:
                        selectedId === todo.login.salt ? "#cf7b5a" : "#dcd8d3",
                    }}
                  >
                    {todo.name.last}
                  </div>
                </div>
                <div className={styles.user_email}>{todo.email}</div>
              </div>

              {selectedId === todo.login.salt && (
                <div className={styles.border_radius_delete}>
                  <DeleteIcon
                    className={styles.delete_icon}
                    onClick={(e) => {
                      e.stopPropagation();
                      onDelete(todo.login.salt);
                    }}
                  />
                </div>
              )}
            </div>
            <div className={styles.user_card_info}>
              <div className={styles.info_item}>
                <div className={styles.info_title}>Телефон</div>
                <div className={styles.info_text}>{todo.phone}</div>
              </div>
              <div className={styles.info_item}>
                <div className={styles.info_title}>День рождения</div>
                <div className={styles.info_text}>
                  {formatDate(todo.dob.date)}
                </div>
              </div>
              <div className={styles.info_item}>
                <div className={styles.info_title}>Адрес</div>
                <div className={styles.info_text}>
                  {todo.location.city}, {todo.location.state},{" "}
                  {todo.location.country}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default UserCards;
