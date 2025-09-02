import style from "./OrderMedicine.module.css";
import img1 from "../../../assets/images/backgrounds/medicine-banner.png";
import DrugCard from "./components/DrugCard";
import drug1 from "../../../assets/images/backgrounds/drug1.png";
import drug2 from "../../../assets/images/backgrounds/drug2.png";
import { useState } from "react";
import Preview from "../components/Preview";
import Cart from "./Cart";
import Search from "../components/Search";
import { setDrugSection } from "../../../store/slices/patientNavSlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../store/store"; // adjust path if needed
import { Checkout } from "./Checkout";

const drugs = [
  {
    image: drug1,
    title: "Pure Nutrition Magnesium Glycinate with Zinc",
    price: "₦500",
  },
  {
    image: drug2,
    title: "Amoxicillin",
    price: "₦1200",
  },
  {
    image: drug1,
    title: "Pure Nutrition Magnesium Glycinate with Zinc",
    price: "₦800",
  },
  {
    image: drug1,
    title: "Pure Nutrition Magnesium Glycinate with Zinc",
    price: "₦500",
  },
  {
    image: drug2,
    title: "Amoxicillin",
    price: "₦1200",
  },
  {
    image: drug1,
    title: "Pure Nutrition Magnesium Glycinate with Zinc",
    price: "₦800",
  },
  {
    image: drug1,
    title: "Pure Nutrition Magnesium Glycinate with Zinc",
    price: "₦500",
  },
  {
    image: drug2,
    title: "Amoxicillin",
    price: "₦1200",
  },
  {
    image: drug1,
    title: "Pure Nutrition Magnesium Glycinate with Zinc",
    price: "₦800",
  },
];

const OrderMedicine = () => {
  const { drugSection } = useSelector((state: RootState) => state.patientNav);
  const dispatch = useDispatch();

  const [selectedDrug, setSelectedDrug] = useState(null);
  const [viewAll, setViewAll] = useState(false);

  const handleDrugClick = (drug: any) => {
    setSelectedDrug(drug);
    dispatch(setDrugSection("preview"));
    // setView("preview");
  };

  // Show cart when "Add to Cart" is clicked inside Preview
  const handleAddToCart = () => {
    dispatch(setDrugSection("cart"));
    // setView("cart");
  };

  // Go back to list from cart or preview
  // const handleBack = () => {
  //   setSelectedDrug(null);
  //   setView("list");
  // };
  return (
    <div className={style.OrderMedicine}>
      {drugSection === "cart" && <Cart />}
      {drugSection === "preview" && (
        <Preview drug={selectedDrug} onAddToCart={handleAddToCart} />
      )}

      {drugSection === "checkout" && <Checkout />}
      {drugSection === "drug" && (
        <>
          <Search label="Search Drug..." />
          {!viewAll && (
            <>
              <div className={style.Banner} id="flexSpaceBetween">
                <div className={style.detailsContainer}>
                  <h1 className={style.title}>Order with Prescription</h1>
                  <p className={style.description} id="mediumText">
                    Upload a prescription and a pharmacist will arrange your
                    medicine for you.
                  </p>
                  <button className={style.btn}>Order Now</button>
                </div>
                <img
                  src={img1}
                  alt="bannerImg"
                  className={style.medicineBanner}
                  loading="lazy"
                />
              </div>

              <div className={style.titleContainer} id="flexSpaceBetween">
                <p className={style.pageTitle} id="text30">
                  Hot Seller
                </p>
                <button
                  className={style.viewAll}
                  onClick={() => setViewAll(true)}
                  id="text30"
                >
                  View all
                </button>
              </div>
              <div className={style.DrugList} id="flexCenter">
                {drugs.slice(0, 3).map((drug, idx) => (
                  <DrugCard
                    key={idx}
                    image={drug.image}
                    title={drug.title}
                    price={drug.price}
                    onClick={() => handleDrugClick(drug)}
                  />
                ))}
              </div>
            </>
          )}

          {viewAll && (
            <div className={style.AllDrugsContainer} id="flexCenter">
              {drugs.map((drug, idx) => (
                <DrugCard
                  key={idx}
                  image={drug.image}
                  title={drug.title}
                  price={drug.price}
                  onClick={() => handleDrugClick(drug)}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};
export default OrderMedicine;
