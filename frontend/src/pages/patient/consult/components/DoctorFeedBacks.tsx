import style from "./DoctorFeedBacks.module.css";
import { Icon } from "@iconify/react";

interface DoctorFeedBacksProps {
  profile: string;
  name: string;
  username: string;
  comment: string;
  date: string;
  consultType: string;
}

const DoctorFeedBacks: React.FC<DoctorFeedBacksProps> = ({
  profile,
  name,
  username,
  comment,
  date,
  consultType,
}) => {
  return (
    <div className={style.DoctorFeedBacks} id="flexColumn">
      <div className={style.cardHead} id="flexSpaceBetween">
        <div id="flexCenter">
          <img src={profile} alt={name} className={style.img} />
          <div className={style.nameContainer} id="flexColumn">
            <p className={style.name} id="mediumText">
              {name}
            </p>
            <p className={style.username} id="smallText">
              {username}
            </p>
          </div>
        </div>
        <div id="flexCenter" className={style.starContainer}>
          <Icon icon="mdi:star" className={style.icon} id="mediumText" />
          <Icon icon="mdi:star" className={style.icon} id="smallText" />
          <Icon icon="mdi:star" className={style.icon} id="smallText" />
          <Icon icon="mdi:star" className={style.icon} id="smallText" />
          <Icon icon="mdi:star" className={style.icon} id="smallText" />
        </div>
      </div>
      <p className={style.comment} id="smallText">
        {comment}
      </p>

      <p className={style.date} id="smallText">
        {consultType} {date}
      </p>
    </div>
  );
};

export default DoctorFeedBacks;
