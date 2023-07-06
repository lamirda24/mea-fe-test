import React from "react";
import styles from "./CourseCard.module.css";
const CourseCard = (props) => {
  const { title, name, desc, image, course_id, instructor } = props;
  console.log(instructor, "asd");
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div className={styles.badge}>
          <p>{course_id}</p>
          <p>3</p>
        </div>
        <img src={image} className={styles.image} alt="test-1" />
      </div>

      <div className={styles.bot}>
        <div>
          <h3>{title}</h3>
          <div className={styles.botCardContent}>
            <img src={image} alt="profile" className={styles.avatar} />
            <div>
              <p className={styles.name}></p>
              <p className={styles.desc}>desc</p>
            </div>
          </div>
        </div>

        <button className={styles.button} type="button">
          Lanjut
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
