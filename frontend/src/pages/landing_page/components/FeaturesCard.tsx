import React from "react";
import style from "./FeaturesCard.module.css";
// import { Icon } from "@iconify/react";

interface FeaturesCardProps {
  icon: React.ReactNode; // instead of string
  title: string;
  text: string;
  bg?: string;
  color?: string;
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
      <div className={style.icon} id="flexCenter">
        {icon}
      </div>
      <h2 className={style.title} style={{ color: color }} id="mediumText">
        {title}
      </h2>
      <p className={style.text} id="smallText" style={{ color: color }}>
        {text}
      </p>
    </div>
  );
};


export default FeaturesCard;
