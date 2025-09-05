import style from "./CartList.module.css";
import { Icon } from "@iconify/react";
interface CartListProps {
  image: string;
  title: string;
  price: number | string;
  amount: number;
}

const CartList: React.FC<CartListProps> = ({ image, title, price, amount }) => {
  return (
    <div className={style.CartList} id="flexSpaceBetween">
      <div className={style.imgContainer} id="flexCenter">
        <img src={image} alt={title} loading="lazy" />
      </div>
      <h4 className={style.title}>{title}</h4>
      <div className={style.controlAmount} id="flexCenter">
        <button className={style.button} id="flexCenter">
          -
        </button>
        <p className={style.amount}>{amount}</p>
        <button className={style.button} id="flexCenter">
          +
        </button>
      </div>

      <div className={style.priceContainer} id="flexCenter">
        <button>
          <Icon icon="fa:trash" className={style.delete} />
        </button>
        <p className={style.price} id="text30">
          {price}
        </p>
      </div>
    </div>
  );
};

export default CartList;
