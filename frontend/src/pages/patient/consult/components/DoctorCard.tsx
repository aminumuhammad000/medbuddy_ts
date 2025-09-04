import React from "react";
import style from "./DoctorCard.module.css";
import { useDispatch } from "react-redux";
import { setConsultStep } from "../../../../store/slices/patientNavSlice";

interface DoctorCardProps {
  name: string;
  specialist: string;
  rating: number;
  price: string;
  slot?: number;
  profile: string;
}

const DoctorCard: React.FC<DoctorCardProps> = ({
  name,
  specialist,
  rating,
  price,
  slot = 0,
  profile,
}) => {
  const dispatch = useDispatch();
  const date = new Date();
  const month = date.toLocaleString("default", { month: "long" }); // e.g. "July"
  const year = date.getFullYear();

  const handlePreview = () => {
    dispatch(setConsultStep("preview"));
  };
  const getCurrentWeekDays = (): string[] => {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

    // Set to Monday (or Sunday if you want)
    const startOfWeek = new Date(today);
    const diffToMonday = (dayOfWeek + 6) % 7; // Shift so Monday = 0
    startOfWeek.setDate(today.getDate() - diffToMonday);

    const weekDays: string[] = [];

    for (let i = 0; i < 7; i++) {
      const d = new Date(startOfWeek);
      d.setDate(startOfWeek.getDate() + i);

      const day = d.toLocaleDateString("en-US", { weekday: "short" }); // Mon
      const date = d.getDate(); // 15
      const month = d.toLocaleDateString("en-US", { month: "short" }); // Jul

      weekDays.push(`${day} ${date}`);
    }

    return weekDays;
  };

  const days = getCurrentWeekDays();

  return (
    <div className={style.DoctorCard} onClick={handlePreview}>
      <div className={style.cardHead}>
        <div className={style.rating}>
          <iconify-icon icon="mdi:star" className={style.start}></iconify-icon>
          {rating}
        </div>
        <div className={style.heartIcon}>
          <iconify-icon icon="iconamoon:heart-light" className={style.icon} />
        </div>
      </div>

      <div className={style.cardMain}>
        <div className={style.info}>
          <h6 className={style.specialist}>{specialist}</h6>
          <h1 className={style.name}>{name}</h1>
          <h4 className={style.price}>{price} /session</h4>
        </div>

        <div className={style.imageContainer}>
          <img src={profile} alt="profile image" loading="lazy" />
        </div>
      </div>

      <div className={style.cardFooter}>
        <div className={style.footerHead}>
          <p>
            Availability <span className={style.slot}>{slot} slots</span>
          </p>
          <p className={style.date}>
            {"<"} {month} {year} {">"}
          </p>
        </div>
        <ul className={style.week}>
          {days.map((day, index) => (
            <li key={index}>
              <span id="smallText">{day.slice(0, 4)}</span>
              <span className={style.weekNumber} id="smallText">
                {day.slice(4)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DoctorCard;
