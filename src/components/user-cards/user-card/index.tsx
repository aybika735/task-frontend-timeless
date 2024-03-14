import React, { useState } from "react";
import styles from "../user-cards.module.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import { ICardProps } from "../types";
interface UserCardProps {
    todo: ICardProps;
    onDelete: (id: number) => void;
  
  }
const UserCard = ({todo, onDelete}: UserCardProps) => {
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
        <div
        key={todo.login.salt}
        className={`${styles.card} ${
          selectedId === todo.login.salt ? styles.cardActive : ""
        }`}
        onClick={() => handleClick(todo.login.salt)}
      >
        <div className={styles.userCardHeader}>
          <div className={styles.userImage}>
            <img
              src={todo.picture.medium}
              alt="img"
              className={styles.userPhoto}
            />
          </div>
          <div>
            <div className={styles.userName}>
              <div
                className={styles.userNameFirst}
                style={{
                  color:
                    selectedId === todo.login.salt ? "#cf7b5a" : "#dcd8d3",
                }}
              >
                {todo.name.first}
              </div>

              <div
                className={styles.userNameLast}
                style={{
                  color:
                    selectedId === todo.login.salt ? "#cf7b5a" : "#dcd8d3",
                }}
              >
                {todo.name.last}
              </div>
            </div>
            <div className={styles.userEmail}>{todo.email}</div>
          </div>

          {selectedId === todo.login.salt && (
            <div className={styles.borderRadiusDelete}>
              <DeleteIcon
                className={styles.deleteIcon}
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(todo.login.salt);
                }}
              />
            </div>
          )}
        </div>
        <div className={styles.userCardInfo}>
          <div className={styles.infoItem}>
            <div className={styles.infoTitle}>Телефон</div>
            <div className={styles.infoText}>{todo.phone}</div>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.infoTitle}>День рождения</div>
            <div className={styles.infoText}>
              {formatDate(todo.dob.date)}
            </div>
          </div>
          <div className={styles.infoItem}>
            <div className={styles.infoTitle}>Адрес</div>
            <div className={styles.infoText}>
              {todo.location.city}, {todo.location.state},{" "}
              {todo.location.country}
            </div>
          </div>
        </div>
      </div>
    );
};

export default UserCard;