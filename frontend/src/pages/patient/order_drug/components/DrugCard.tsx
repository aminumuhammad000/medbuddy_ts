import React from "react";
import style from "./DrugCard.module.css";

interface DrugInterface {
  image?: string;
  title: string;
  price: string;
  onClick?: () => void; // optional, since you used it on img
}

const DrugCard: React.FC<DrugInterface> = ({
  image,
  title,
  price,
  onClick,
}) => {
  return (
    <div className={style.DrugCard}>
      <img
        src={image}
        alt={title}
        className={style.img}
        onClick={onClick}
        loading="lazy"
      />
      <p className={style.title} id="mediumText">
        {title}
      </p>
      <div>
        <h3 className={style.price}>
          {price} <span id="smallText">{price}</span>
        </h3>
        <p className={style.discount} id="smallText">
          Get 10% off
        </p>
        <button className={style.addCart}>Add to Cart +</button>
      </div>
    </div>
  );
};

export default DrugCard;
