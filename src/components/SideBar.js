import React from "react";
import { useSelector} from "react-redux";
import styles from './SideBar.module.scss'
const SideBar = () => {

    const todos = useSelector((state) => state.todosSlice.todos);
   
   const ages = todos.map(item=>item.dob.age);
   const twenty = ages.filter(item=> item >= 11 && item <= 20)
   const thirty = ages.filter(item=> item >= 21 && item <= 30)
   const fourty = ages.filter(item=> item >= 31 && item <= 40)
   const fifty = ages.filter(item=> item >= 41 && item <= 50)
   const moreFifty = ages.filter(item=> item >= 51)
  const male = todos.filter(item=>item.gender === 'male')
  const famale = todos.filter(item=>item.gender === 'female')

  return (
    <div className={styles.sidebar}>
      <div className={styles.users_length}>{todos.length} Users</div>
      <div className={styles.section_users}>
        <hr></hr>
        <div className={styles.section_age}>Age Groups</div>

        <div className={styles.section_flex}>
          <div className={styles.age_range_group}>
            <span>11 to 20</span> <strong>{twenty.length} users</strong> 
             </div>
             <div className={styles.age_range_group}>
            <span>21 to 30</span> <strong>{thirty.length} users</strong> 
             </div>
             <div className={styles.age_range_group}>
            <span>31 to 40</span> <strong>{fourty.length} users</strong> 
             </div>
             <div className={styles.age_range_group}>
            <span>41 to 50</span> <strong>{fifty.length} users</strong> 
             </div>
             <div className={styles.age_range_group}>
            <span>51+</span> <strong>{moreFifty.length} user</strong> 
             </div>
        </div>
      </div>
      <div className={styles.section_gender}>
        <hr></hr>
        <div className={styles.section_gender}>Gender Groups</div>
        <div className={styles.age_range_group}>
            <span>Male</span> <strong>{male.length} users</strong> 
             </div>
             <div className={styles.age_range_group}>
            <span>Female</span> <strong>{famale.length} users</strong> 
             </div>
      </div>
    </div>
  );
};

export default SideBar;
