import style from "./AboutDoctor.module.css";
import { Icon } from "@iconify/react";
const AboutDoctor = () => {
  return (
    <div className={style.AboutDoctor}>
      <h3 className={style.bio}>
        Dr. Musa Abdillahi is a famous American neurosurgeon known for
        successfully separating conjoined twins in 1987. He later became a
        bestselling author and served as the U.S. Secretary of Housing and Urban
        Development.
      </h3>
      <div className={style.cardContainer} id="flexCenter">
        <div>
          <Icon icon="mdi:naira" id="text30" className={style.icon}></Icon>
          <p id="mediumText">Session Fee</p>
          <h3>₦5000</h3>
        </div>

        <div>
          <Icon
            icon="mdi:clock-outline"
            id="text30"
            className={style.icon}
          ></Icon>
          <p id="mediumText">Session Duration</p>
          <h3>147 Hrs</h3>
        </div>

        <div>
          <Icon icon="icons8:group" id="text30" className={style.icon}></Icon>
          <p id="mediumText">Attended Patients</p>
          <h3>₦5000</h3>
        </div>
      </div>
    </div>
  );
};

export default AboutDoctor;
