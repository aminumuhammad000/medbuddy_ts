import React from "react";
import style from "./DoctorAppointmentCard.module.css";
import { useDispatch } from "react-redux";
import { setConsultStep } from "../../../../store/slices/patientNavSlice";

type DoctorAppointmentCardProps = {
  name: string;
  specialist: string;
  title: string;
  profile: string; // image path or URL
  price: string;
  experience: string;
  rating: number;
  totalPatient: string;
};

const DoctorAppointmentCard: React.FC<DoctorAppointmentCardProps> = ({
  name,
  specialist,
  title,
  profile,
  price,
  experience,
  rating,
  totalPatient,
}) => {
  const dispatch = useDispatch();

  const handleBooking = () => {
    dispatch(setConsultStep("booking"));
  };
  return (
    <div className={style.DoctorAppointmentCard} id="flexColumn">
      <button className={style.appointment} onClick={handleBooking}>
        Book Appointment
      </button>

      <div className={style.mainCard} id="flexBetween">
        <div className={style.info}>
          <h3 className={style.specialist}>{specialist}</h3>
          <h1 className={style.name}>{name}</h1>
          <p className={style.title} id="text30">
            {title}
          </p>
          <h4 className={style.price} id="text30">
            {price}{" "}
            <span className={style.session} id="smallText">
              /session
            </span>
          </h4>
        </div>

        <div className={style.imgContainer}>
          <img src={profile} alt={`${name} profile`} loading="lazy" />
        </div>
      </div>

      <div className={style.footer} id="flexCenter">
        <div className={style.experience}>
          <iconify-icon icon="uil:bag" className={style.icon} />
          <h1 className={style.heading}>
            {experience}{" "}
            <span className={style.small} id="smallText">
              Experience
            </span>
          </h1>
        </div>

        <div className={style.experience}>
          <iconify-icon
            icon="material-symbols-light:star-outline-rounded"
            className={style.icon}
          />
          <h1 className={style.heading}>
            {rating}{" "}
            <span className={style.small} id="smallText">
              Rating
            </span>
          </h1>
        </div>

        <div className={style.totalPatient}>
          <iconify-icon
            icon="ion:people-outline"
            className={style.icon}
          ></iconify-icon>
          <h1 className={style.heading}>
            {totalPatient}{" "}
            <span className={style.small} id="smallText">
              Patients
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default DoctorAppointmentCard;
