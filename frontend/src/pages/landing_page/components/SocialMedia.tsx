import style from "./SocialCard.module.css";
import { Icon } from "@iconify/react";
const SocialMedia = () => {
  return (
    <div className={style.socialCard} id="flexCenter">
      <div className={style.twitter} id="flexCenter">
        <Icon
          icon="mdi:twitter"
          id="smallText"
          className={style.icon}
          style={{ color: "#fff" }}
        ></Icon>
      </div>
      <div className={style.instagram} id="flexCenter">
        <Icon icon="mdi:instagram" id="smallText" className={style.icon} />
      </div>
      <div className={style.facebook} id="flexCenter">
        <Icon icon="mdi:facebook" id="smallText" className={style.icon} />
      </div>
    </div>
  );
};

export default SocialMedia;
