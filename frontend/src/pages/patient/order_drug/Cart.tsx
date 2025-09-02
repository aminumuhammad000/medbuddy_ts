import style from "./Cart.module.css";
import CartList from "../components/CartList";
import drug1 from "../../../assets/images/backgrounds/drug1.png";
import drug2 from "../../../assets/images/backgrounds/drug2.png";
import { setDrugSection } from "../../../store/slices/patientNavSlice";
import { useDispatch } from "react-redux";

const drugs = [
  {
    image: drug1,
    title: "Pure Nutrition Magnesium Glycinate with Zinc",
    price: "₦500",
    amount: 1,
  },
  {
    image: drug2,
    title: "Amoxicillin",
    price: "₦1200",
    amount: 1,
  },
  {
    image: drug1,
    title: "Pure Nutrition Magnesium Glycinate with Zinc",
    price: "₦800",
    amount: 1,
  },
  {
    image: drug1,
    title: "Pure Nutrition Magnesium Glycinate with Zinc",
    price: "₦500",
    amount: 1,
  },
];
const Cart = () => {
  const dispatch = useDispatch();

  const handleCheckout = () => {
    dispatch(setDrugSection("checkout"));
    console.log("payment page");
  };
  return (
    <div className={style.Cart}>
      <div className={style.cartList}>
        <div className={style.cartTitle} id="flexSpaceBetween">
          <h4>Product</h4>
          <h4>Total</h4>
        </div>

        <div className={style.drugList}>
          {drugs.map((drug, index) => (
            <CartList
              key={index}
              image={drug.image}
              title={drug.title}
              price={drug.price}
              amount={drug.amount}
            />
          ))}
        </div>
      </div>
      <div className={style.orderSummary} id="flexColumn">
        <div>
          <h1 className={style.checkoutTitle}>Order Summary</h1>
          <div className={style.subtotal} id="flexSpaceBetween">
            <h4>Subtotal</h4>
            <h4 className={style.bold}>{"₦ 100,000"}</h4>
          </div>
          <div className={style.delivery} id="flexSpaceBetween">
            <h4>Delivery</h4>
            <h4 className={style.bold}>{"₦ 1000"}</h4>
          </div>
        </div>

        <div className={style.checkoutContainer}>
          <div className={style.total} id="flexSpaceBetween">
            <h4>Total</h4>
            <h4 className={style.bold}>{"₦ 101,000"}</h4>
          </div>
          <button className={style.checkout} onClick={handleCheckout}>
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
