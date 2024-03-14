import React from "react";
import { useAppSelector } from "../../hooks/use-ape-selector";
import styles from "./side-bar.module.scss";
export enum Gender {
  Male = "male",
  Female = "female",
}

export enum AgeGroup {
  Ten = 10,
  Twenty = 20,
  Thirty = 30,
  Forty = 40,
  Fifty = 50,
}
const SideBar = () => {
  const todos = useAppSelector((state) => state.todosSlice.todos);

  const ages = todos.map((item) => item.dob.age);
  const tenToTwenty = ages.filter(
    (age) => age > AgeGroup.Ten && age <= AgeGroup.Twenty
  );
  const twentyToThirty = ages.filter(
    (age) => age > AgeGroup.Twenty && age <= AgeGroup.Thirty
  );
  const thirtyToForty = ages.filter(
    (age) => age > AgeGroup.Thirty && age <= AgeGroup.Forty
  );
  const fortyToFifty = ages.filter(
    (age) => age > AgeGroup.Forty && age <= AgeGroup.Fifty
  );
  const overFifty = ages.filter((age) => age > AgeGroup.Fifty);

  const maleTodos = todos.filter((item) => item.gender === Gender.Male);
  const femaleTodos = todos.filter((item) => item.gender === Gender.Female);

  return (
    <div className={styles.sidebar}>
      <div className={styles.usersLength}>{todos.length} Users</div>
      <div className={styles.sectionUsers}>
        <hr></hr>
        <div className={styles.sectionAge}>Age Groups</div>

        <div className={styles.sectionFlex}>
          <div className={styles.ageRangeGroup}>
            <span>11 to 20</span> <strong>{tenToTwenty.length} users</strong>
          </div>
          <div className={styles.ageRangeGroup}>
            <span>21 to 30</span> <strong>{twentyToThirty.length} users</strong>
          </div>
          <div className={styles.ageRangeGroup}>
            <span>31 to 40</span> <strong>{thirtyToForty.length} users</strong>
          </div>
          <div className={styles.ageRangeGroup}>
            <span>41 to 50</span> <strong>{fortyToFifty.length} users</strong>
          </div>
          <div className={styles.ageRangeGroup}>
            <span>51+</span> <strong>{overFifty.length} user</strong>
          </div>
        </div>
      </div>
      <div className={styles.sectionGender}>
        <hr></hr>
        <div className={styles.sectionGender}>Gender Groups</div>
        <div className={styles.ageRangeGroup}>
          <span>Male</span> <strong>{maleTodos.length} users</strong>
        </div>
        <div className={styles.ageRangeGroup}>
          <span>Female</span> <strong>{femaleTodos.length} users</strong>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
