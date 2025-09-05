import { useState } from "react";
import style from "./Preview.module.css";
import profile from "../../../assets/images/profiles/profile.jpg";
import { Icon } from "@iconify/react";
// Define the type for drug
interface Drug {
  image: string;
  title: string;
  price: string;
  description?: string;
}

// Props for Preview
interface PreviewProps {
  drug?: Drug; // drug can be undefined, since you check `if (!drug) return null;`
  onAddToCart: () => void;
}

const Preview: React.FC<PreviewProps> = ({ drug, onAddToCart }) => {
  const [amount, setAmount] = useState<number>(0);

  if (!drug) return null;

  const handleDecrement = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  };

  return (
    <div className={style.Preview}>
      <div className={style.container}>
        <div className={style.imgContainer}>
          <img src={drug.image} alt="drug image" />
        </div>
        <div className={style.details}>
          <h1 className={style.title}>{drug.title}</h1>
          <div className={style.priceContainer}>
            <h1 className={style.price}>
              {drug.price} <span id="mediumText">{drug.price}</span>
              <p className={style.discount} id="smallText">
                Get 10% off
              </p>
            </h1>
            <div className={style.controlContainer}>
              <button className={style.dec} onClick={handleDecrement}>
                -
              </button>
              <h3>{amount}</h3>
              <button
                className={style.inc}
                onClick={() => setAmount(amount + 1)}
              >
                +
              </button>
            </div>
          </div>
          <button className={style.addToCart} onClick={onAddToCart}>
            Add to Cart +
          </button>
        </div>
      </div>

      <h2 className={style.descriptionTitle}>Product Details</h2>
      <div className={style.descriptionContainer} id="flexColumn">
        <div className={style.mainDetails}>
          <h3 className={style.title2}>Description</h3>
          <p className={style.description} id="mediumText">
            {drug.description ||
              "Lorem ipsum dolor sit amet consectetur. Condimentum pretium at facilisis velit..."}
          </p>
        </div>

        <div className={style.ratingContainer}>
          <h3 className={style.title2}>Ratings & Reviews</h3>
          <div className={style.reviewContainer} id="flexColumn">
            <div className={style.ratingHead} id="flexSpaceBetween">
              <div className={style.profileDetails} id="flexCenter">
                <img
                  src={profile}
                  alt="profile image"
                  className={style.profileImage}
                />
                <div>
                  <h4 className={style.name}>Mustapha Hussein</h4>
                  <p className={style.date} id="smallText">
                    19th June, 2025
                  </p>
                </div>
              </div>
              <div className={style.rating}>
                {[...Array(5)].map((_, index) => (
                  <Icon
                    key={index}
                    icon="material-symbols:star-rounded"
                    className={style.star}
                  ></Icon>
                ))}
              </div>
            </div>

            <p className={style.ratingText} id="mediumText">
              Lorem ipsum dolor sit amet consectetur. Condimentum pretium at
              facilisis velit...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
