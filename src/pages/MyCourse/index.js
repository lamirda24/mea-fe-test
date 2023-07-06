import React, { useEffect, useState } from "react";
import MainLayouts from "../../Layouts/MainLayouts";
import { fetchMyCourse } from "../../apis/mycourse";
import styles from "./MyCourse.module.css";
import CourseCard from "../../components/MyCourse/CourseCard";

const MyCourse = () => {
  const [data, setData] = useState("");
  const profile = JSON.parse(localStorage.getItem("profile"));
  const { user_id } = profile;

  useEffect(() => {
    getMyCourses();
  }, []);

  const getMyCourses = async () => {
    const res = await fetchMyCourse(user_id);
    if (res?.status === 200 && res?.data?.data.length > 0) {
      setData(res?.data?.data);
    } else {
      throw new Error("Error!");
    }
  };
  console.log(data);

  return (
    <MainLayouts>
      <div className={styles.container}>
        <p>Kelas</p>
        <div className={styles.content}>
          <p>content</p>

          {data.length > 0 ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: "10px",
                alignItems: "center",
                rowGap: "10px",
                columnGap: "10px",
              }}
            >
              {data?.map((item, idx) => (
                <div key={idx}>
                  <CourseCard
                    title={item?.title}
                    instructor={item?.instructors}
                    image={item?.image}
                    course_id={item?.course_id}
                  />
                </div>
              ))}
            </div>
          ) : (
            <p>tidak ada data</p>
          )}
        </div>
      </div>
    </MainLayouts>
  );
};

export default MyCourse;
