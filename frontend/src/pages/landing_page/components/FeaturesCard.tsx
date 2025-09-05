import React from "react";
import style from "./FeaturesCard.module.css";
import { Icon } from "@iconify/react";

interface FeaturesCardProps {
  icon: string; // iconify icon name, e.g. "mdi:account"
  title: string;
  text: string;
  bg?: string; // optional background color
  color?: string; // optional text/icon color
}

const FeaturesCard: React.FC<FeaturesCardProps> = ({
  icon,
  title,
  text,
  bg,
  color,
}) => {
  return (
    <div
      className={style.FeaturesCard}
      id="flexColumnCenter"
      style={{ backgroundColor: bg, color: color }}
    >
      <Icon icon={icon} className={style.icon} id="flexCenter"></Icon>
      <h2 className={style.title} style={{ color: color }} id="mediumText">
        {title}
      </h2>
      <p className={style.text} id="smallText">
        {text}
      </p>
    </div>
  );
};

export default FeaturesCard;
